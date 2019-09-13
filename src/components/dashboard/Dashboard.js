import React, {Component} from 'react';
import House from '../house/House';
import {Link} from "react-router-dom";

const initialState = House;

export default class Dashboard extends React.Component{
    render() {
        return (
        <div>
            <Dashboard>
                <Link to= "/my-react-app/src/components/wizard/Wizard.js">
                    <button className="next">Add New Property</button>
                </Link>
            </Dashboard>
            <House/>
        </div>
        )
    }
}