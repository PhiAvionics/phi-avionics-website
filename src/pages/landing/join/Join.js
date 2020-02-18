import React, { Component } from 'react'
import './style.scss'

export default class Join extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/apply', {
            method: 'POST',
            body: data,
        });

        document.getElementById("application").classList.add("hidden");
        document.getElementById("recieved").classList.remove("hidden");
    }

    render() {
        return (
            <section className="join section">
                <div className="layout box">
                    <h1 className="typography headline">Join The Team</h1>
                    <div className="typography text">
                        We are looking for motivated individuals wanting to join this years team.<br/>
                        Don't be afraid to apply!
                    </div>
                </div>
                <div id="recieved" className="recieved hidden typography text">
                    Thank you for applying! You will hear from us shortly.
                </div>
                <form id="application" onSubmit={this.handleSubmit}>
                    {/* Name */}
                    <label className="form-group">
                        <input  id="name" name="name" type="text" className="form-control" required/>
                        <span>Name</span>
                        <span className="border"></span>
                    </label>
                    {/* Mail */}
                    <label className="form-group">
                        <input  id="mail" name="mail" type="email" className="form-control" required/>
                        <span>Mail</span>
                        <span className="border"></span>
                    </label>
                    {/* Line of Study */}
                    <label className="form-group">
                        <input  id="study" name="study" type="text" className="form-control" required/>
                        <span>Field of Study</span>
                        <span className="border"></span>
                    </label>
                    {/* Position */}
                    <label className="form-group">
                        <input  id="position" name="position" type="text" className="form-control" required/>
                        <span>Applying for Position</span>
                        <span className="border"></span>
                    </label>

                    <button>Apply!</button>
                </form>
            </section>
        )
    }
}
