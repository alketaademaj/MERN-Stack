import React, { Component } from 'react'
import axios from 'axios'

const Alketa = props => (
    <tr>
        <td>{props.product.name}</td>
        <td>{props.product.price}</td>
        <td>{props.product.discountPercentage}</td>
        <td>{props.product.color}</td>
        <td>{props.product.size}</td>
    </tr>
)

export class SalesList extends Component {

    constructor(props) {
        super(props)

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

    ShowingSalesList(){
        return this.state.products.filter(currentProd=>currentProd.discountPercentage>0).map(currentProduct => {
            return <Alketa product={currentProduct} key={currentProduct._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Here are the products, that are on sales</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Discount price</th>
                            <th>Color</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.ShowingSalesList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SalesList
