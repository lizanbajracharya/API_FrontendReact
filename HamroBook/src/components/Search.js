import React, {Component} from "react";
import Navigation from "./Navigation";
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Col,
    Container,
    Form,
    Input,Label
} from "reactstrap";
import FormGroup from "reactstrap/es/FormGroup";
import axios from "axios";
import {Link} from "react-router-dom";


export default class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            BookName: '',
            data: []
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    search = (e) => {
        axios.get("http://localhost:3000/product/search/" + this.state.BookName)
            .then((response) => {
                this.setState({
                    data: response.data
                })
            }).catch((err) => console.log(err.response))
    }


    render() {

        return (
            <div>
                <Navigation/>
                <Container>
                    <h2>Search</h2>
                    <Form>
                        <FormGroup>
                            <Label for='BookName'>Book Name</Label>
                            <Input type='text' name='BookName' id='BookName'
                                   value={this.state.name} onChange={this.handleChange}/>
                        </FormGroup>
                        <Button color='primary' onClick={this.search}>Search</Button>
                        <br/>
                    </Form>

                        {
                            this.state.data.map((res) => {
                                return (

                                    <Col md="10">
                                        <br/>
                                        <Card>
                                            <center>
                                            <Col md="4">
                                            </Col>
                                            <CardBody>
                                                <CardTitle> <b>{res.productName}</b> </CardTitle>
                                                <CardSubtitle> Writer: {res.Writer}</CardSubtitle>
                                                <Link to={`/booklist/${res._id}`}>
                                                    <Button>View More</Button></Link>
                                            </CardBody>
                                            </center>
                                        </Card>
                                    </Col>
                                )
                            })
                        }

                </Container>
            </div>

        )
    }
}