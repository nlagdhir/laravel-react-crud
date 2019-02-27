import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import Axios from "axios";

class TableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.price}</td>
                <td>
                    <Link
                        to={"edit/" + this.props.obj.id}
                        className="btn btn-primary float-left mr-1"
                    >
                        Edit
                    </Link>
                    <form>
                        <input
                            onClick={this.props.onDelete.bind(
                                this,
                                this.props.obj.id
                            )}
                            type="submit"
                            value="Delete"
                            className="btn btn-danger"
                        />
                    </form>
                </td>
            </tr>
        );
    }
}

export default TableRow;
