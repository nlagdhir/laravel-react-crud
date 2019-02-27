import React, { Component } from "react";
import { browserHistory } from "react-router";
import axios from "axios";

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = { productName: "", productPrice: "" };

        this.handleItemNameChange = this.handleItemNameChange.bind(this);
        this.handleItemPriceChange = this.handleItemPriceChange.bind(this);
        this.handleItemFormSubmit = this.handleItemFormSubmit.bind(this);
    }

    handleItemNameChange(e) {
        this.setState({
            productName: e.target.value
        });
    }

    handleItemPriceChange(e) {
        this.setState({
            productPrice: e.target.value
        });
    }

    handleItemFormSubmit(e) {
        e.preventDefault();
        const products = {
            name: this.state.productName,
            price: this.state.productPrice
        };

        let uri = "http://localhost:8000/items";
        axios.post(uri, products).then(response => {
            browserHistory.push("/display-item");
        });
    }

    render() {
        return (
            <div>
                <h1>Create An Item</h1>
                <form onSubmit={this.handleItemFormSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleItemNameChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Price:</label>
                                <input
                                    type="text"
                                    className="form-control col-md-6"
                                    onChange={this.handleItemPriceChange}
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-primary">Add Item</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateItem;
