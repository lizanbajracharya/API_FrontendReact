import React from 'react'
import './css/modern-business.css'
import './css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import AboutComponent from './about/AboutComponent'
import LoginComponent from './login/LoginComponent'
import adminpanel from './admin/adminpanel'
class BodyComponent extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Route path="/about" component={AboutComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/admin" component={adminpanel}/>
            {/* <div class="container">

            <h1 class="my-4">Welcome to Modern Business</h1>
    
            <div class="row">
              <div class="col-lg-4 mb-4">
                <div class="card h-100">
                  <h4 class="card-header">Card Title</h4>
                  <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div class="card-footer">
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card h-100">
                  <h4 class="card-header">Card Title</h4>
                  <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                  </div>
                  <div class="card-footer">
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card h-100">
                  <h4 class="card-header">Card Title</h4>
                  <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div class="card-footer">
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            
        
            <h2>Portfolio Heading</h2>
        
            <div class="row">
              <div class="col-lg-4 col-sm-6 portfolio-item">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Project One</a>
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 portfolio-item">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Project Two</a>
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 portfolio-item">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Project Three</a>
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 portfolio-item">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Project Four</a>
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 portfolio-item">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Project Five</a>
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 portfolio-item">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Project Six</a>
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <h2>Modern Business Features</h2>
                <p>The Modern Business template by Start Bootstrap includes:</p>
                <ul>
                  <li>
                    <strong>Bootstrap v4</strong>
                  </li>
                  <li>jQuery</li>
                  <li>Font Awesome</li>
                  <li>Working contact form with validation</li>
                  <li>Unstyled page elements for easy customization</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid rounded" src="http://placehold.it/700x450" alt=""/>
              </div>
            </div>
            <hr></hr>
        
            <div class="row mb-4">
              <div class="col-md-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
              </div>
              <div class="col-md-4">
                <a class="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
              </div>
            </div>
        
          </div> */}
          </BrowserRouter>
          </div>
          
        )
    }
}

export default BodyComponent;