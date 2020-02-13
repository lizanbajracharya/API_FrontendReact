import React, { Component } from 'react'
import { Form, FormGroup, Input, Container, ListGroup, ListGroupItem, Button,Label } from 'reactstrap'
import Axios from 'axios'
import AdminNavigation from './AdminNavigation'

export default class AddCategory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categoryname: '',
            categoryimage:'',
            categories: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }

        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/category', this.state.config)
            .then((response) => {
                this.setState({
                    categories: response.data
                })
            }).catch((err) => console.log(err.response))
    }

    handleCategoryChange = (e) => {
        this.setState({
            categoryname: e.target.value
        })
    }

    handleCurrentTodoChange=event=> {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    submitCategory = (e) => {
            const data=new FormData()
            data.append('categoryimage',this.state.selectedFile)
            data.append('categoryname',this.state.categoryname)
            Axios.post('http://localhost:3000/category',data)
            .then(res=>{
            console.log(res.statusText)
            this.setState({
            categories: [...this.state.categories, res.data],
            categoryname:'',
            selectedFile:null
        })
    })
    }

    deleteCategory = (categoryId) => {
        Axios.delete(`http://localhost:3000/category/${categoryId}`, this.state.config)
            .then((response) => {
                const filteredCategories = this.state.categories.filter((category) => {
                    return category._id !== categoryId
                })

                this.setState({
                    categories: filteredCategories
                })
            }).catch((err) => console.log(err.response));
    }

    render() {
        return (
            <React.Fragment>
                <AdminNavigation />
                <Container>
                    <Form>
                        <FormGroup>
                            <Input type='text'
                                placeholder='add category'
                                value={this.state.categoryname}
                                onChange={this.handleCategoryChange}
                            />
                        </FormGroup>
                        <FormGroup>
                                <Label for='categoryimage'>Select Image</Label>
                                <Input type='file' id='categoryimage' name='filesss' 
                                    onChange={this.handleCurrentTodoChange}/>
                            </FormGroup>
                            <Button color='danger' onClick={this.submitCategory}>Add Product</Button>
                    </Form>

                    <ListGroup>
                        {
                            this.state.categories.map((category) => {
                                return (<ListGroupItem key={category._id} color='info' className='d-flex justify-content-between align-items-center'>
                                    {category.categoryname}
                                    <Button color='danger' size='sm' onClick={() => this.deleteCategory(category._id)}>Delete</Button>
                                </ListGroupItem>)
                            })
                        }
                    </ListGroup>
                </Container>
            </React.Fragment>
        )
    }
}
