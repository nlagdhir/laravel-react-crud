import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import Axios from "axios";

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", price: "" };

        this.handleItemNameChange = this.handleItemNameChange.bind(this);
        this.handleItemPriceChange = this.handleItemPriceChange.bind(this);
        this.handleItemFormSubmit = this.handleItemFormSubmit.bind(this);
    }

    componentDidMount() {
        Axios.get(`http://localhost:8000/items/${this.props.params.id}/edit`)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    price: response.data.price
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    handleItemNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleItemPriceChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleItemFormSubmit(e) {
        e.preventDefault();
        const products = {
            name: this.state.name,
            price: this.state.price
        };

        let uri = "http://localhost:8000/items/" + this.props.params.id;
        Axios.patch(uri, products).then(response => {
            console.log(this.props);
            browserHistory.push("/display-item");
            //this.props.history.push("/display-item");
        });
    }

    render() {
        return (
            <div>
                <h1>Update Item</h1>
                <div className="row">
                    <div className="col-md-10" />
                    <div className="col-md-2">
                        <Link to="/display-item" className="btn btn-success">
                            Return to Items
                        </Link>
                    </div>
                </div>
                <form onSubmit={this.handleItemFormSubmit}>
                    <div className="form-group">
                        <label>Item Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleItemNameChange}
                        />
                    </div>

                    <div className="form-group">
                        <label name="product_price">Item Price</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.handleItemPriceChange}
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditItem;
