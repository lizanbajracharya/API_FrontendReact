import React, { Component } from 'react'

import Axios from 'axios'
import {  Container, ListGroup, ListGroupItem, Button } from 'reactstrap'

import AdminNavigation from './AdminNavigation'

export default class AllUsers extends Component{
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/user', this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    user: response.data
                })
            })
    }
    deleteUser = (userid) => {
        Axios.delete(`http://localhost:3000/user/${userid}`, this.state.config)
            .then((response) => {
                const filtereduser = this.state.user.filter((user) => {
                    return user._id !== userid
                })

                this.setState({
                    user: filtereduser
                })
            }).catch((err) => console.log(err.response));
    }
    render() {
        return (
            <React.Fragment>
                <AdminNavigation />
                <Container>
                    <ListGroup>
                        {
                            this.state.user.map((user) => {
                                return (<ListGroupItem key={user._id} color='info' className='d-flex justify-content-between align-items-center'>
                                    {user.username}
                                    <Button color='danger' size='sm' onClick={() => this.deleteUser(user._id)}>Delete</Button>
                                </ListGroupItem>)
                            })
                        }
                    </ListGroup>
                </Container>
            </React.Fragment>
        )
    }

}