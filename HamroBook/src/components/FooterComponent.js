import React from 'react'
import './css/modern-business.css'
import './css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
class FooterComponent extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
    </div>
    {/* <!-- /.container --> */}
  </footer>
            </div>
            </BrowserRouter>
        )
    }
}

export default FooterComponent