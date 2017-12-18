import React from 'react';

// import {
//     // Import Actions
// } from '';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (


            <div className="col-sm">
                <div className="card">
                    <div className="card-header">
                        Search History
                        </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm text-left">
                                        <p>Sydney</p>
                                    </div>
                                    <div className="col-sm text-right">
                                        10-12-95
                                        </div>
                                </div>
                            </li>
                            <li className=" list-group-item list-group-item-secondary">
                                <div className="row">
                                    <div className="col-sm text-left">
                                        <p>Oceanside</p>
                                    </div>
                                    <div className="col-sm text-right">
                                        9-19-94
                                        </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm text-left">
                                        <p>Tampa</p>
                                    </div>
                                    <div className="col-sm text-right">
                                        7-02-94
                                        </div>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-secondary">
                                <div className="row">
                                    <div className="col-sm text-left">
                                        <p>Dublin</p>
                                    </div>
                                    <div className="col-sm text-right">
                                        3-15-94
                                        </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm text-left">
                                        <p>Houston</p>
                                    </div>
                                    <div className="col-sm text-right">
                                        01-11-94
                                        </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}