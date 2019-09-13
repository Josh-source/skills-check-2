module.exports = {
    create: ( req, res, next) => {
        const db = req.app.get('db');
        const {name, address, city, state, zipcode} = req.body
        console.log('fired');
        db.create_house([name, address, city, state, zipcode])
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: `please try again`})
        });
    },
    getOne: (rea, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.read_house(id)
        .then(house => res.status(200).json(house))
        .catch(err => {
            res.status(500).send({errorMessage: `please try again`})
        });
    },
    update: (req,res,next) => {
        const db = req.app.get('db');
        const {params, query} = req
        db.update_store([ params.id, query.asc])
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: `please try again`})
        });
    },
    deleteOne: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_house(id)
        .then( () => res.status(200))
        .catch( err => {
            res.status(500).send({errorMessage: `please try again`})
        });
    }
}