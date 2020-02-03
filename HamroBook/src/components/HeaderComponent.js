import React from 'react'
import './css/modern-business.css'
import './css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
class HeaderComponent extends React.Component{
render(){
return(
<BrowserRouter>
<div className="App">
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
<div class="container">
<a class="navbar-brand" href="index.html">Hamro Book Ebook Store</a>
<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarResponsive">
<ul class="navbar-nav ml-auto">
<li class="nav-item">
<a class="nav-link" href="home">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="admin">Books</a>
</li>
<li class="nav-item">
<a class="nav-link" href="about">About</a>
</li>
<li class="nav-item">
<a class="nav-link" href="login">Login</a>
</li>
<li class="nav-item">
<a class="nav-link" href="signup">SignUp</a>
</li>
</ul>
</div>
</div>
</nav>
</div>
</BrowserRouter>
)    
}
}

export default HeaderComponent
