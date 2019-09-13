import React, { Component } from 'react'

export default class JoinPage extends Component {
    testServer = () => {
        fetch('http://localhost:3001/join.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: 'a',
              mail: 'b',
            })
        })
    }

    render() {
        return (
            <div onClick={() => {
                this.testServer();
                console.log("sendt");
            }}>
                Join
            </div>
        )
    }
}
