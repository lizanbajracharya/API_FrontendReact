import React, { Component } from 'react'
import Navigation from './Navigation'
import Axios from 'axios'
import { Form, FormGroup, Input, Button, Label, Container } from 'reactstrap'

export default class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            selectedFile: null,
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/user/me', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data
                })
            });
    }

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('myFile', this.state.selectedFile)
        Axios.post('http://localhost:3001/upload', data, this.state.config)
            .then((response) => {
                this.setState({
                    user: { ...this.state.user, image: response.data.filename }
                })
            }).catch((err) => console.log(err.response))
    }

    updateUser = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3000/user/me', this.state.user, this.state.config)
            .then((response) => console.log(response.data)).catch((err) => console.log(err.response))
        this.props.history.push('/dashboard');
    }

    handleChange(e) {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value }
        })
    }

    render() {
        if (this.state.user === null) {
            return <h3>Loading ...</h3>
        } else {
            return (
                <div>
                    <Navigation />
                    <Container className='mt-4'>
                        <Form>
                            <FormGroup>
                                <Label for='mobileNumber'>Mobile Number</Label>
                                <Input type='text'
                                    id="mobileNumber"
                                    name='mobileNumber'
                                    value={this.state.user.mobileNumber}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='Email'>Email</Label>
                                <Input type='text' id='Email'
                                    name='Email'
                                    value={this.state.user.Email}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='username'>Username</Label>
                                <Input type='text' id='username'
                                    name='username'
                                    value={this.state.user.username}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <Button color='danger' onClick={this.updateUser} block>Update User</Button>
                        </Form>
                    </Container>
                </div>
            )
        }
    }
}
