import { createStore} from "redux";

const initialState = {
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
};

function reducer(state= initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_NAME:
            return {...state, name: payload};
        case UPDATE_ADDRESS:
            return {...state, address:payload};
        case UPDATE_CITY:
            return {...state, city:payload};
        case UPDATE_STATE:
            return {...state, state: payload};
        case UPDATE_ZIPCODE:
            return {...state, zipcode:payload};

    default:
        return state;
    }
}

export default createStore(reducer);