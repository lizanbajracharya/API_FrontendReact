import React, { Component } from 'react'
import Axios from 'axios'
import { Form, FormGroup, Input, Button, Label, Container } from 'reactstrap'
import { Redirect } from 'react-router-dom'
export default class Order extends Component{
    constructor(props) {
        super(props)

        this.state = {
            product: [],
            order:null,
            location:'',
            mobileNumber:'',
            productName:'',
            isBought:false,
            rate:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:3000/product/`+(this.props.match.params.id), this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    product: response.data,
                    productName:response.data.productName,
                    rate:response.data.price
                })
            })
    }

    handleTodoSubmit = (e) => { 
        Axios.post('http://localhost:3000/order',
        {
            productname: this.state.productName,
            mobilenumber: this.state.mobileNumber,
            location: this.state.location,
            rate:this.state.rate
        }
        ,this.state.config)
        .then(res=>{
            this.setState({
                isBought: true
            });
        })
    }
    
    render() {
        if (this.state.isBought === true) {
            alert("you have succcessfull bought");
            return <Redirect to='/dashboard' />
        }
        return (
    <Container>
                <h2>Order Form</h2>
                <Form>
                    <FormGroup>
                        <Label for='productName'>Product Name</Label>
                        <Input type='text' name='productName' id='productName'
                            value={this.state.productName}  onChange={(event)=>this.setState({productName:event.target.value})}disabled/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='price'>Price</Label>
                        <Input type='text' name='rate' id='rate'
                            value={this.state.rate} onChange={(event)=>this.setState({rate:event.target.value})}disabled/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='Address'>Delivery Location</Label>
                        <Input type='text' name='location' id='location'
                            value={this.state.location} onChange={(event)=>this.setState({location:event.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='mobileNumber'>Contact Information</Label>
                        <Input type='text' name='mobileNumber' id='mobileNumber'
                            value={this.state.mobileNumber} onChange={(event)=>this.setState({mobileNumber:event.target.value})}/>
                    </FormGroup>
                    <Button color='primary' onClick={this.handleTodoSubmit}>Order Now</Button>
                </Form>
            </Container>
    
        )
    }
}