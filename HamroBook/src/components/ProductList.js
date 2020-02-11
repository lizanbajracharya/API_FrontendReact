import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup } from 'reactstrap'
import Axios from 'axios'

export default class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            productImage: this.props.product.productImage,
            productName: this.props.product.name,
            productDescription: this.props.product.productDescription,
            Writer: this.props.product.Writer,
            Stock: this.props.product.stock,
            price: this.props.product.price,
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }

    toggleEdit = (e) => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    handleBookChange = (e) => {
        this.setState({
            // [e.target.name]: e.target.value
            productName: e.target.value,
            productImage: e.target.value,
        })
    }

    handleDoneChange = (e) => {
        this.setState({
            bookDone: e.target.checked
        })
    }

    handleBookUpdate = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:3000/product/${this.props.product._id}`,
        {photo:this.state.productImage},
            { name: this.state.productName }, this.state.config)
            .then((response) => {
                console.log(response.data)
                this.toggleEdit();
            }).catch((err) => console.log(err.response));
    }

    handleAddNote = (newNote) => {

        alert(newNote);

        this.setState({
            bookNotes: [newNote, ...this.state.bookNotes]
        })
        
    }

    render() {
        const { book, handleDelete, handleUpdate } = this.props;
        return (

            <React.Fragment>
                <tr>
                <td>
                        
                <img src={`http://localhost:3000/upload/${this.props.product.photo}`} alt={this.props.product.name}/>
                    </td>
                    <td>
                        <Button onClick={this.toggleEdit}>Edit</Button>
                    </td>
                    <td>
                        <Button onClick={() => handleDelete(book._id)}>Delete</Button>
                    </td>
                </tr>

                <Modal isOpen={this.state.isEdit} toggle={this.toggleEdit}>
                    <ModalHeader toggle={this.toggleEdit}>
                        Edit Book
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Input name='productName' type='text'
                                value={this.state.productName} onChange={this.handleBookChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input name='productName' type='text'
                                value={this.state.productName} onChange={this.handleBookChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input name='productName' type='text'
                                value={this.state.productName} onChange={this.handleBookChange} />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color='primary' onClick={() => handleUpdate(book._id, this.state.bookDone, this.state.bookName)}>
                            Save</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>

        )
    }
}
