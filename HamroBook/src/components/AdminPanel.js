import React from 'react'
import Axios from 'axios';
import { Form, FormGroup, Input, Button, Label,Table, Container } from 'reactstrap'
import AdminNavigation from './AdminNavigation';
class AdminPanel extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
        book: [],
        categories: [],
        BookName:'',
        BookContent:'',
        BookWriter:'',
        Category:'',
        categoryId:'',
        isEdit:false,
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
        Axios.get('http://localhost:3000/category', this.state.config)
            .then((response) => {
                this.setState({
                    categories: response.data,
                    categoryId: response.data[0]._id,
                    Category:response.data.categoryname
                })
            }).catch((err) => console.log(err.response))
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
    data.append('Category',this.state.categoryId)
    Axios.post('http://localhost:3000/book',data)
    .then((response) => {
        this.setState({
            book: [...this.state.book, response.data],
            BookName:'',
            selectedFile:null,
            BookWriter:'',
            Category:'',
        })
    })
}

handleCategoryChange = (e) => {
    this.setState({
        categoryId: e.target.value
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

handleTaskUpdate = (e) => {
    const data=new FormData()
    data.append('BookContent',this.state.selectedFile)
    data.append('BookName',this.state.BookName)
    data.append('BookWriter',this.state.BookWriter)
    data.append('Category',this.state.categoryId)
    Axios.patch(`http://localhost:3000/book/${this.state.bookId}`,data)
    .then((response) => {
        const updatedTasks = this.state.book.map((books) => {
            if (books._id === response.data._id) {
                books = response.data
            }
            return books;
        })
        this.setState({
            book: updatedTasks,
            BookName:'',
            Category:'',
            BookWriter:'',
            selectedFile:null,
            isEdit: false
        })
    }).catch((err) => console.log(err.response));
}

itemClick = (bookId) => {
    Axios.get(`http://localhost:3000/book/${bookId}`, this.state.config)
    .then((response => {
    this.setState({
        bookId:response.data._id,
        BookName: response.data.BookName,
        BookWriter:response.data.BookWriter,
        Category:response.data.Category,
        isEdit:true
    })
})
)}

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
                                    <Input type='select' id='category' value={this.state.categoryId} onChange={this.handleCategoryChange}>
                            {
                                this.state.categories.map((category) => {
                                    return <option key={category._id} value={category._id}>{category.categoryname}</option>
                                })
                            }
                        </Input>
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
                            {
                            (this.state.isEdit) ? <Button color='success' block
                            onClick={this.handleTaskUpdate}>Update</Button> :
                            <Button color='primary' block
                                onClick={this.handleTodoSubmit}>Add</Button>}
                        </Form>

                                <h1 align="center">BOOK LIST</h1>
                        <Table>
                            
                        {
                            this.state.book.map((book) => {
                                return (<tr key={book._id} color='info' className='d-flex justify-content-between align-items-center'>
                                    <td>{book.BookName}</td><td>{book.BookWriter}</td><td>{book.BookContent}</td><td>{book.Date}</td><td>{book.Category}</td>
                                   <td> <Button color='danger' size='sm' onClick={() => this.handleTodoDelete(book._id)}>Delete</Button></td>
                                   <td> <Button color='danger' size='sm' onClick={() => this.itemClick(book._id)}>Edit</Button></td>
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