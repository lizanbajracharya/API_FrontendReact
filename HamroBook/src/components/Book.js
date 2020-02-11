import React, { Component } from 'react'
import Navigation from './Navigation'
import Axios from 'axios'
import { Form, FormGroup, Input, Button, Label, CustomInput, Container } from 'reactstrap'
import FileUploadButton from './FileUploadButton'

export default class Book extends Component{
    constructor(props) {
        super(props)

        this.state = {
            book: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/book', this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    tasks: response.data
                })
            })
    }

}