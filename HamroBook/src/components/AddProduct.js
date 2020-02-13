import React from 'react'
import Axios from 'axios';
import { Form, FormGroup, Input, Button, Label,Table, Container } from 'reactstrap'
import AdminNavigation from './AdminNavigation';

class AddProduct extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
        product: [],
        productId:'',
       productName:'',
       productDescription:'',
       Writer:'',
       Stock:'',
       price:'',
       productImage:'',
       isEdit:false,
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
}

componentDidMount() {
    Axios.get('http://localhost:3000/product', this.state.config)
        .then((response) => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        })
}

handleCurrentTodoChange=event=> {
    this.setState({
        selectedFile: event.target.files[0]
    })
}


handleTodoSubmit = (e) => { 
    const data=new FormData()
    data.append('productImage',this.state.selectedFile)
    data.append('productName',this.state.productName)
    data.append('productDescription',this.state.productDescription)
    data.append('Stock',this.state.Stock)
    data.append('Writer',this.state.Writer)
    data.append('price',this.state.price)
    Axios.post('http://localhost:3000/product',data)
    .then(res=>{
        console.log(res.statusText)
        this.setState({
            product: [...this.state.product, res.data],
            productName:'',
       productDescription:'',
       Writer:'',
       Stock:'',
       price:'',
       selectedFile:null
        })
    })
}



handleTodoDelete = (productId) => {
    const filteredproduct = this.state.product.filter((product) => {
        return product._id !== productId
    })
    this.setState({
        product: filteredproduct
    })
    Axios.delete(`http://localhost:3000/product/${productId}`, this.state.config)
}

itemClick = (productId) => {
    Axios.get(`http://localhost:3000/product/${productId}`, this.state.config)
    .then((response => {
    this.setState({
        productId:response.data._id,
        productName: response.data.productName,
        productDescription:response.data.productDescription,
        Writer:response.data.Writer,
        price:response.data.price,
        Stock:response.data.Stock,
        isEdit:true
    })
})
)}

handleTaskUpdate = (e) => {
    const data=new FormData()
    data.append('productImage',this.state.selectedFile)
    data.append('productName',this.state.productName)
    data.append('productDescription',this.state.productDescription)
    data.append('Stock',this.state.Stock)
    data.append('Writer',this.state.Writer)
    data.append('price',this.state.price)
    Axios.patch(`http://localhost:3000/product/${this.state.productId}`,data)
    .then((response) => {
        const updatedTasks = this.state.product.map((products) => {
            if (products._id === response.data._id) {
                products = response.data
            }
            return products;
        })
        this.setState({
            product: updatedTasks,
            productName:'',
       productDescription:'',
       Writer:'',
       Stock:'',
       price:'',
       selectedFile:null,
            isEdit: false
        })
    }).catch((err) => console.log(err.response));
}

render() {
    return (
        <React.Fragment>
            <AdminNavigation />
            <Container className='mt-4'>
            <Form>
                            <FormGroup>
                                <Label for='productName'>Product Name</Label>
                                <Input type='text'
                                  id="productName"
                                    name='productName'
                                    value={this.state.productName}
                                    onChange={(event)=>this.setState({productName:event.target.value})}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='Writer'>Writer</Label>
                                <Input type='text'
                                  id="Writer"
                                    name='Writer'
                                    value={this.state.Writer}
                                    onChange={(event)=>this.setState({Writer:event.target.value})}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='Price'>Price</Label>
                                <Input type='text'
                                  id="price"
                                    name='price'
                                    value={this.state.price}
                                    onChange={(event)=>this.setState({price:event.target.value})}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='productDescription'>Product Description</Label>
                                <Input type='text'
                                  id="productDescription"
                                    name='productDescription'
                                    value={this.state.productDescription}
                                    onChange={(event)=>this.setState({productDescription:event.target.value})}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='Stock'>Stock</Label>
                                <Input type='text'
                                  id="stock"
                                    name='stock'
                                    value={this.state.Stock}
                                    onChange={(event)=>this.setState({Stock:event.target.value})}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='productImage'>Select Image</Label>
                                <Input type='file' id='productImage' name='filesss' 
                                    onChange={this.handleCurrentTodoChange}/>
                            </FormGroup>
                            {
                        (this.state.isEdit) ? <Button color='success' block
                            onClick={this.handleTaskUpdate}>Update</Button> :
                            <Button color='primary' block
                                onClick={this.handleTodoSubmit}>Add</Button>
                    }
                        </Form>
                        <Table>
                        {
                            this.state.product.map((product) => {
                                return (<tr key={product._id} color='info' className='d-flex justify-content-between align-items-center'>
                                    <td>{product.productName}</td><td>{product.Writer}</td><td>{product.price}</td>
                                    <td><img src={`http://localhost:3000/upload/${product.productImage}`} alt={product.productName} width="200px" /></td><td>{product.productDescription}</td><td>{product.Stock}</td><td>
                                    <Button color='danger' size='sm' onClick={() => this.handleTodoDelete(product._id)}>Delete</Button></td><td>
                                    <Button color='danger' size='sm' onClick={() => this.itemClick(product._id)}>Edit</Button></td>
                                </tr>)
                            })
                        }
                    </Table>
            </Container>
        </React.Fragment>
    )
}
}

export default AddProduct

