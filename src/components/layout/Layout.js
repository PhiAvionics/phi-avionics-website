import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import LandingPage from '../../pages/landing/LandingPage';
import JoinPage from '../../pages/join/JoinPage';
import SponsorPage from '../../pages/sponsor/SponsorPage';

export default class Layout extends Component {
    render() {
        return (
            <div className="page-viewport">
                <Switch location={ navigator.location }>
                    <Route exact path="/" component={ LandingPage }/>
                    <Route exact path="/join" component={ JoinPage }/>
                    <Route exact path="/sponsor" component={ SponsorPage }/>

                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </div>
        )
    }
}
