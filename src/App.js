import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import SalaryInput from './SalaryInput';
import TaxResults from './TaxResults';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grossSalary: 0
        };
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <SalaryInput onCalculate={salary => this.onCalculate(salary)}/>
                <TaxResults grossSalary={this.state.grossSalary}/>
            </div>
        );
    }

    onCalculate(salary) {
        this.setState({
            grossSalary: salary
        });
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));