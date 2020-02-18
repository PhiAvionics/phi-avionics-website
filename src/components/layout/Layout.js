import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LandingPage from '../../pages/landing/LandingPage';
import JoinPage from '../../pages/join/JoinPage';
import SponsorPage from '../../pages/sponsor/SponsorPage';

export default class Layout extends Component {
    render() {
        // let location = useLocation();
        
        return (
            <div className="page-viewport">
                <TransitionGroup>
                    <CSSTransition
                        key={"join"}
                        classNames="fade"
                        timeout={300}
                    >
                        <Switch location={ navigator.location }>
                            <Route exact path="/" component={ LandingPage }/>
                            <Route exact path="/join" component={ JoinPage }/>
                            <Route exact path="/sponsor" component={ SponsorPage }/>

                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>

            </div>
        )
    }
}
