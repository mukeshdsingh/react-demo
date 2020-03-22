import React, { Component } from 'react'

export default class UsersComponent extends Component {
    render() {
        const { params } = this.props.match
        return (
            <div>
                <h1>Users</h1>
                <p>{params.id}</p>
            </div>
        )
    }
}
