import React from 'react'
import Axios from 'axios';
import { Form, FormGroup, Input, Button, Label,Table, CustomInput, Container ,ListGroupItem,ListGroup} from 'reactstrap'
import AdminNavigation from './AdminNavigation';
class AddProduct extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
        product: [],
        currentTodo: '',
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

handleCurrentTodoChange = (newTodo) => {
    this.setState({
        currentTodo: newTodo
    })
}

handleTodoSubmit = (e) => {
    e.preventDefault();
    if (!this.state.currentTodo) return;

    Axios.post('http://localhost:3000/product', { name: this.state.currentTodo },
        this.state.config).then((response) => {
            this.setState({
                product: [...this.state.prodcut, response.data],
                currentTodo: ''
            })
        })
}

handleTodoDelete = (taskId) => {
    const filteredTask = this.state.tasks.filter((task) => {
        return task._id !== taskId
    })
    this.setState({
        tasks: filteredTask
    })
    Axios.delete(`http://localhost:3001/tasks/${taskId}`, this.state.config)
}

updateTask = (updatedTask) => {
    const updatedTasks = this.state.tasks.map((task) => {
        if (task._id === updatedTask._id) {
            task = updatedTask
        }
        return task;
    })
    this.setState({
        tasks: updatedTasks
    })
    Axios.put(`http://localhost:3001/tasks/${updatedTask._id}`,
        { name: updatedTask.name, done: updatedTask.done },
        this.state.config).then((response) => console.log(response.data));
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
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='Writer'>Writer</Label>
                                <Input type='text'
                                  id="Writer"
                                    name='Writer'
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='Price'>Price</Label>
                                <Input type='text'
                                  id="price"
                                    name='price'
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='productDescription'>Product Description</Label>
                                <Input type='text'
                                  id="productDescription"
                                    name='productDescription'
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='Stock'>Stock</Label>
                                <Input type='text'
                                  id="stock"
                                    name='stock'
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='productImage'>Select Image</Label>
                                <Input type='file' id='productImage' name='productImage'/>
                            </FormGroup>
                            <Button color='danger' >Add Product</Button>
                        </Form>
                        <Table>
                        {
                            this.state.product.map((product) => {
                                return (<ListGroupItem key={product._id} color='info' className='d-flex justify-content-between align-items-center'>
                                    {product.productName}{product.Writer}{product.price}{product.productImage}{product.productDescription}{product.Stock}
                                    <Button color='danger' size='sm' onClick={() => this.deleteUser(product._id)}>Delete</Button>
                                </ListGroupItem>)
                            })
                        }
                    </Table>
            </Container>
        </React.Fragment>
    )
}
}

export default AddProduct