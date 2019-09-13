require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const house_controller= require("./house_controller");

const app = express();

const PORT = 4000;

const{SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(express.json());

app.post('/api/house', house_controller.create);
app.get('api/house/:id', house_controller.getOne);
app.put('api/house/:id', house_controller.update);
app.delete('api/house/:id', house_controller.deleteOne);

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 *7
        }
}))

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('db connected')
})
    .catch(err => console.log(err));



app.listen(PORT, () => console.log(`Listening on ${PORT}`))