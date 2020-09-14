import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class submitResponse extends Component {
    render() {
        return (
            <div>
                <h1>You have succesfully submitted the information to the database!</h1>
                <Link className="nav-link" to="/products">Create More Products</Link>
                <Link className="nav-link" to="/">Go to Home page</Link>
            </div> 
        )
    }
}

export default submitResponse
