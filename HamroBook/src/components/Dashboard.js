import React, { Component } from 'react'
import {
  Card, CardImg, CardGroup, Button, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
import axios from 'axios'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';


export default class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      product: [],
        config: {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
          }
        }
      }

      componentDidMount() {
            axios.get('http://localhost:3000/product', this.state.config)
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        product: response.data
                    })
                }).catch((err) => console.log(err.response))          
    }

    handleLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem('token');
      this.props.history.push('/');
  }

    render() {
        return (
            <div>
            <Navigation/>
      <CardGroup>
        {
          this.state.product.map((product)=> {
            return (
              <Col sm="3">
              <Card>
        <CardImg top width="100%" src={`http://localhost:3000/upload/${product.productImage}`} alt="Card image cap" />
        <CardBody>
          <CardTitle> {product.productName} </CardTitle>
          <CardSubtitle> <b>Price: {product.price} </b></CardSubtitle>
          <Link to={`/booklist/${product._id}`}>
          <Button>View More</Button></Link>
        </CardBody>
      </Card>
      </Col>
            )
          })
        }
    </CardGroup>
            </div>
    
    
        )
    }
}
