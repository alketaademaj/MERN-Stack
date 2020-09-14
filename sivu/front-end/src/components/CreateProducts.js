import React, { Component } from 'react'
import axios from "axios";
import PopUp from './popUp';

export class CreateProducts extends Component {
    constructor(props) {
        super(props)

        //when ever we define a component / every component has a state that we define in the constructor 
        //the state is accesible in that component 

        //this.onProductnameChange = this.onProductnameChange.bind(this);
        //this.onPriceChange=this.onPriceChange.bind(this);
        //this.onDiscountChange=this.onDiscountChange(this);
        //this.onColorChange=this.onColorChange.bind(this);
        //this.onSizeChange=this.onSizeChange.bind(this);
        //this.onStockChange=this.onStockChange.bind(this);
        //this.onSubmit=this.onSubmit.bind(this);
        //no need for binding, if we turn our methods into error function 
        //you have to write everything down dont you!!!!
        
        this.state = {
             productname:"",
             price:0,
             discountPercentage: 0,
             color:"",
             stock:0,
             size:"",
             visible : false
        }
    }

    closeModal=()=> {
        this.setState({
            visible : false
        });
    }
    onProductnameChange=(e)=>{
        this.setState({
            productname:e.target.value,
        })
    }
    onPriceChange=(e)=>{
        this.setState({
            price:e.target.value,
        })
    }
    onColorChange=(e)=>{
        this.setState({
            color:e.target.value,
        })
    }
    onSizeChange=(e)=>{
        this.setState({
            size:e.target.value,
        })
    }
    onStockChange=(e)=>{
        this.setState({
            stock:e.target.value,
        })
    }
    onDiscountChange=(e)=> {
        this.setState({
            discountPercentage:e.target.value,
        })
        console.log(this.state)
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const product={
            name:this.state.productname,
            price:this.state.price,
            discountPercentage:this.state.discountPercentage,
            color:this.state.color,
            size:this.state.size,
            stock:this.state.stock
        }

        console.log(product);
        axios.post("http://localhost:3000/products/add",product)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(`Error :${err}`));
    }

    render() {
        return (
            <div>   
                <h3>Create New Product</h3>
                <form className="mt-4 text-left" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="productname">Product name:</label>
                        <input type="text" className="form-control" id="productname" placeholder="Product name" onChange={this.onProductnameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input type="number" className="form-control" id="price" placeholder="Price" onChange={this.onPriceChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Discount Percentage:</label>
                        <input type="number" className="form-control" id="discountPercentage" placeholder="DiscountPercentage" onChange={this.onDiscountChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Colour:</label>
                        <input type="text" className="form-control" id="color" placeholder="Color" onChange={this.onColorChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock:</label>
                        <input type="number" className="form-control" id="stock" placeholder="Stock" onChange={this.onStockChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">Size:</label>
                        <input type="text" className="form-control" id="size" placeholder="Size" onChange={this.onSizeChange}/>
                    </div>
                    <button type="submit" onClick = { () => {this.setState ({ visible:true }) 
                                                     console.log(this.state)}} className="btn btn-primary">Submit</button>
                </form>
                <PopUp show = {this.state.visible}
                       closeModal = { this.closeModal}
                >     
                </PopUp>
            </div>
        )
    }
}

export default CreateProducts