import React, { Component } from 'react'
import {
  Card, CardGroup, Button, CardBody,
  CardTitle, CardSubtitle, Col,
} from 'reactstrap';
import axios from 'axios'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';


export default class BookList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book: [],
        config: {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
          }
        }
      }

      componentDidMount() {
            axios.get('http://localhost:3000/book', this.state.config)
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        book: response.data
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
          this.state.book.map((book)=> {
            return (
              <Col sm="6">
              <Card>
        <CardBody>
          <CardTitle>Title: {book.BookName} </CardTitle>
          <CardSubtitle> <b>Writer: {book.BookWriter} </b></CardSubtitle>
          <Link to={`/pdf/${book.BookContent}`}>
            <Button>Read Now </Button>
            </Link>
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
