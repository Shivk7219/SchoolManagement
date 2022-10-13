import React from 'react'
import { Link } from "react-router-dom";
import logo from './images/schoolLogo.png';

function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        <img src={logo} className="school-logo" alt="..." />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/dashboard">Campus</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/gallery">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/contact">Contact</a>
                            </li>
             

                        </ul>
                        <div className="d-flex justify-content-end">
                           
                            <div className="btn1">
                                <Link to="/Register">
                                    <button className='btn btn-primary'>Register</button>
                                </Link>

                            </div>
                            <div className="btn12">
                                <Link to="/Login">
                                    <button className='btn btn-primary'>Login</button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>


            </nav>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={require('./images/img1.jpg')} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('./images/img4.jpg')} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('./images/img5.jpg')} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" >
                            <img src="https://cdn.pixabay.com/photo/2014/03/24/17/15/school-295210__340.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Library</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://getbootstrap.com/docs/5.0/components/card/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" >
                            <img src="https://cdn.pixabay.com/photo/2014/03/24/17/15/school-295210__340.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Canteen</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://getbootstrap.com/docs/5.0/components/card/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2014/03/24/17/15/school-295210__340.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sports</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://getbootstrap.com/docs/5.0/components/card/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home