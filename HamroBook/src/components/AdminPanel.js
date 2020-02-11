import React from 'react'
import Axios from 'axios';
import { Form, FormGroup, Input, Button, Label, CustomInput, Container,ListGroup,ListGroupItem } from 'reactstrap'
import AdminNavigation from './AdminNavigation';
class AdminPanel extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
        book: [],
        currentTodo: '',
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
}

componentDidMount() {
    Axios.get('http://localhost:3000/book', this.state.config)
        .then((response) => {
            console.log(response.data)
            this.setState({
                book: response.data
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

    Axios.post('http://localhost:3001/tasks', { name: this.state.currentTodo },
        this.state.config).then((response) => {
            this.setState({
                tasks: [...this.state.tasks, response.data],
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
                                <Label for='BookTitle'>Book Title</Label>
                                <Input type='text'
                                  id="BookTitle"
                                    name='BookTitle'
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='BookCategory'>Category</Label>
                                <Input type='text'
                                  id="Category"
                                    name='Category'
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='BookWriter'>BookWriter</Label>
                                <Input type='text'
                                  id="BookWriter"
                                    name='BookWriter'
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='BookContent'>Select Book</Label>
                                <Input type='file' id='BookContent' name='BookContent'/>
                            </FormGroup>
                            
                            <Button color='danger' >Add Book</Button>
                        </Form>
                        <ListGroup>
                        {
                            this.state.book.map((book) => {
                                return (<ListGroupItem key={book._id} color='info' className='d-flex justify-content-between align-items-center'>
                                    {book.BookTitle}{book.BookWriter}{book.BookContent}{book.Date}{book.Category}
                                    <Button color='danger' size='sm' onClick={() => this.deleteUser(book._id)}>Delete</Button>
                                </ListGroupItem>)
                            })
                        }
                    </ListGroup>
            </Container>
        </React.Fragment>
    )
}
}

export default AdminPanel