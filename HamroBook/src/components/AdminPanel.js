import React from 'react'
import Axios from 'axios';
import { Form, FormGroup, Input, Button, Label,Table, Container } from 'reactstrap'
import AdminNavigation from './AdminNavigation';
class AdminPanel extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
        book: [],
        BookName:'',
        BookContent:'',
        BookWriter:'',
        Category:'',
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

handleCurrentTodoChange = (event) => {
    this.setState({
        selectedFile: event.target.files[0]
    })
}

handleTodoSubmit = (e) => { 
    const data=new FormData()
    data.append('BookContent',this.state.selectedFile)
    data.append('BookName',this.state.BookName)
    data.append('BookWriter',this.state.BookWriter)
    data.append('Category',this.state.Category)
    alert(this.state.selectedFile.name)
    Axios.post('http://localhost:3000/book',data)
    this.state.config.then((response) => {
        this.setState({
            book: [...this.state.book, response.data],
            taskName: ''
        })
    })
}


handleTodoDelete = (bookId) => {
    const filteredBook = this.state.book.filter((book) => {
        return book._id !== bookId
    })
    this.setState({
        book: filteredBook
    })
    Axios.delete(`http://localhost:3001/book/${bookId}`, this.state.config)
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
                                  id="BookName"
                                    name='BookName'
                                    value={this.state.BookName}
                                    onChange={(event)=>this.setState({BookName:event.target.value})}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='BookCategory'>Category</Label>
                                <Input type='text'
                                  id="Category"
                                    name='Category'
                                    value={this.state.Category}
                                    onChange={(event)=>this.setState({Category:event.target.value})}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='BookWriter'>BookWriter</Label>
                                <Input type='text'
                                  id="BookWriter"
                                    name='BookWriter'
                                    value={this.state.BookWriter}
                                    onChange={(event)=>this.setState({BookWriter:event.target.value})}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for='BookContent'>Select Book</Label>
                                <Input type='file' id='BookContent' name='BookContent' onChange={this.handleCurrentTodoChange}/>
                            </FormGroup>
                            
                            <Button color='danger' onClick={this.handleTodoSubmit}>Add Book</Button>
                        </Form>
                        <Table>
                        {
                            this.state.book.map((book) => {
                                return (<tr key={book._id} color='info' className='d-flex justify-content-between align-items-center'>
                                    <td>{book.BookTitle}</td><td>{book.BookWriter}</td><td>{book.BookContent}</td><td>{book.Date}</td><td>{book.Category}</td>
                                   <td> <Button color='danger' size='sm' onClick={() => this.handleTodoDelete(book._id)}>Delete</Button></td>
                                   <td> <Button color='danger' size='sm' onClick={() => this.handleTodoDelete(book._id)}>Edit</Button></td>
                                    </tr>)
                            })
                        }
                    </Table>
            </Container>
        </React.Fragment>
    )
}
}

export default AdminPanel