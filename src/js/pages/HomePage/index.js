
import React from 'react';
import { Link } from 'react-router-dom';
import image from './assets/avatar.jpg';

function HomePage(props) {
    return(
        <div className="app">
            Homepage wuhw
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={image} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={"/login"}>Login</Link>

        </div>
    )
}

export default HomePage;
