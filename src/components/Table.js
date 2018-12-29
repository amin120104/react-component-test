import React, { Component } from 'react';
import Modal from './Modal';

class Table extends Component {

    editIcon = () => {
        return <span className="edit"><i className="material-icons">edit</i></span>
    }

    deleteIcon = () => {
        return <span className="delete"><i className="material-icons">delete</i></span>
    }

    viewIcon = () => {
        return <span className="view" data-toggle="modal" data-target="#myId">
            <i className="material-icons">visibility</i>
        </span>
    }

    clickableData = () => {
        return <span className="special">Body 2</span>
    }

    render() {
        return (
            <div className="table-modal-wrapper">
                <div className="table-responsive">
                    <table className="table table-sm table-dark table-striped data-table">
                        <thead>
                            <tr>
                                <th>Head 1</th>
                                <th>Special</th>
                                <th>Head 3</th>
                                <th>Head 4</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Body 1</td>
                                <td>{this.clickableData()}</td>
                                <td>Body 3</td>
                                <td>Body 4</td>
                                <td>{this.editIcon()} {this.deleteIcon()} {this.viewIcon()}</td>

                            </tr>
                            <tr>
                                <td>Body 1</td>
                                <td>{this.clickableData()}</td>
                                <td>Body 3</td>
                                <td>Body 4</td>
                                <td>{this.editIcon()} {this.deleteIcon()}</td>

                            </tr>
                            <tr>
                                <td>Body 1</td>
                                <td>{this.clickableData()}</td>
                                <td>Body 3</td>
                                <td>Body 4</td>
                                <td>{this.editIcon()} {this.deleteIcon()}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                {<Modal />}
            </div>
        );
    }
}

export default Table;