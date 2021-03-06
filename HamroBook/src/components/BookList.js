import React, { Component } from 'react'
import {
  Card, CardGroup, CardBody,
  CardTitle, CardSubtitle, Col,
} from 'reactstrap';
import axios from 'axios'
import Navigation from './Navigation';


export default class BookList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book: [],
      bookContent:'',
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
                        book: response.data,
                        bookContent:response.data.BookContent
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
          <a href={`http://localhost:3000/load/${book.BookContent}`} target='_blank'>Read Now</a>
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
