import React, { Component } from 'react'
import {
   Table
} from 'reactstrap';
import axios from 'axios'
import Navigation from './Navigation';


export default class OrderHistory extends Component {

  constructor(props) {
    super(props)
    this.state = {
      order: [],
        config: {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
          }
        }
      }

      componentDidMount() {
            axios.get('http://localhost:3000/order', this.state.config)
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        order: response.data
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
            <React.Fragment>   
            <div>
            <Navigation/>     
                <h1 className="tableName donorstable">All Order</h1>
                <Table className="table table-dark table-striped donorstable">
                    <thead className="table-head">
                        <th>Product Name</th>
                        <th>Rate</th>
                        <th>Location</th>
                        <th>Contact Information</th>
                    </thead>
                    <tbody>
                        {this.state.order.map(order=>(
                        <tr key={order._id}>
                            <td>{order.productname}</td>
                            <td>{order.rate}</td>
                            <td>{order.location}</td>
                            <td>{order.mobilenumber}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
      {/* <Table>
        {
          this.state.order.map((order)=> {
            return (
              <Col sm="9">
              <Card>
        <CardBody>
          <CardTitle>Product Name: {order.productname} </CardTitle>
          <CardSubtitle> <b>Rate: {order.rate} </b></CardSubtitle>
        </CardBody>
      </Card>
      </Col>
            )
          })
        }
    </Table> */}
    
    </React.Fragment>
        )
    }
}
