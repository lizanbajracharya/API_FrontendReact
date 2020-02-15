import React, { Component } from 'react'
import Navigation from './Navigation'
import Axios from 'axios'
import {
    Card, CardImg, CardGroup, CardBody,
    CardTitle, CardSubtitle, Col, Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Book extends Component{
    constructor(props) {
        super(props)

        this.state = {
            product: [],
            productName:'',
            productImage:'',
            productDescription:'',
            Writer:'',
            price:'',
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
                    productImage:response.data.productImage,
                    productName:response.data.productName,
                    Writer:response.data.Writer,
                    productDescription:response.data.productDescription,
                    price:response.data.price
                })
            })
    }
    render() {
        return (
            <div>
            <Navigation/>
      <CardGroup>
              <Col sm="8">
              <Card>
        <CardImg top width="100%" src={`http://localhost:3000/upload/${this.state.productImage}`} alt="Card image cap" />
        <CardBody>
          <CardTitle> {this.state.productName} </CardTitle>
          <CardSubtitle> <b>Price: {this.state.price} </b></CardSubtitle><br></br>
          <CardSubtitle> <b>Writer: {this.state.Writer} </b></CardSubtitle><br></br>
          <CardSubtitle> <b>Description: {this.state.productDescription} </b></CardSubtitle>
          <Link to= {`/order/`+(this.props.match.params.id)}>
          <Button>BUY NOW</Button>
          </Link>
        </CardBody>
      </Card>
      </Col>
    </CardGroup>
            </div>
    
    
        )
    }
}