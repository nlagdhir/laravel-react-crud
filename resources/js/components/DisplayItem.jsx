import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import axios from "axios";
import TableRow from "./TableRow";

class DisplayItem extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "", item: "" };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios
            .get("http://localhost:8000/items")
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    handleDelete(productId) {
        event.preventDefault();
        let uri = `http://localhost:8000/items/${productId}`;
        axios
            .delete(uri)
            .then(response => {
                const products = this.state.items.filter(
                    p => p.id !== productId
                );
                this.setState({
                    items: products
                });
            })
            .catch(function(error) {
                console.log(error);
            });
        browserHistory.push("/display-item");
    }

    tabRow() {
        var handleProductDelete = this.handleDelete;
        if (this.state.items instanceof Array) {
            return this.state.items.map(function(object, i) {
                return (
                    <TableRow
                        onDelete={handleProductDelete}
                        obj={object}
                        key={i}
                    />
                );
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Items</h1>

                <div className="row">
                    <div className="col-md-10" />
                    <div className="col-md-2">
                        <Link to="/add-item">Create Item</Link>
                    </div>
                </div>
                <br />

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Item Name</td>
                            <td>Item Price</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>{this.tabRow()}</tbody>
                </table>
            </div>
        );
    }
}

export default DisplayItem;
