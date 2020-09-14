import React, { Component } from 'react'
import axios from 'axios'

const Tanay = props => (
    <tr>
        <td>{props.product.name}</td>
        <td>{props.product.price}</td>
        <td>{props.product.color}</td>
        <td>{props.product.size}</td>
        <td>
            <button className="btn btn-sm btn-danger" onClick={() => {props.deleteProducts(props.product._id) }}>Delete</button>
        </td>
    </tr>
)

export class ProductsList extends Component {

    constructor(props) {
        super(props)
    
        this.deletetheseProducts = this.deletetheseProducts.bind(this); //these two have to match the line 41

        this.state = {
            products: []
        };
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/products/')
        .then(rs => {
               this.setState({
                products: rs.data
            })
                console.log(rs.data)
                })
        .catch(error => {
            console.log(error);
        })
    }

    deletetheseProducts(id) { //match this one with the above binding one
        axios.delete('http://localhost:3000/products/'+id)
        .then(res => console.log(res.data));

        this.setState({
            products: this.state.products.filter(el => el._id !== id)
        })
    }

    ShowingProductList(){
        return this.state.products.filter(currentProduct => currentProduct.discountPercentage===0).map(currentProduct => {
            return <Tanay product={currentProduct} deleteProducts={this.deletetheseProducts} key={currentProduct._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Here are the products</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.ShowingProductList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductsList
