import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>

                <div className="input page">
                    <div className="page__container">
                        <span className="input__prompt">Calulate your income tax</span>
                        <input type="number" placeholder="Enter gross salary" className="input__input"/>
                        <button className="input__button">Calculate</button>
                    </div>
                </div>

                <div className="results page">
                    <div className="page__container">
                        <table>
                            <thead>
                                <tr>
                                    <td>Band</td>
                                    <td>Amount Taxed</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Personal Allowance</td>
                                    <td>£0</td>
                                </tr>
                                <tr>
                                    <td>Basic Rate</td>
                                    <td>£0</td>
                                </tr>
                                <tr>
                                    <td>Higher Rate</td>
                                    <td>£0</td>
                                </tr>
                                <tr>
                                    <td>Additional Rate</td>
                                    <td>£0</td>
                                </tr>
                            </tbody>
                        </table>

                        <span className="results__net">Net Salary: </span>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));