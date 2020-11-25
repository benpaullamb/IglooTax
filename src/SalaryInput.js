import React, { Component } from 'react';

export default class SalaryInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grossSalary: 0
        };
    }
    
    render() {
        return (
            <div className="input page">
                <div className="page__container">
                    <span className="input__prompt">Calulate your income tax</span>
                    <input
                        value={this.state.grossSalary} onChange={e => this.onSalaryChange(e.target.value)}
                        type="number" placeholder="Enter gross salary" className="input__input"/>
                    <button onClick={() => this.onCalculate()} className="input__button">Calculate</button>
                </div>
            </div>
        );
    }

    onSalaryChange(salary) {
        this.setState({
            grossSalary: salary
        });
    }

    onCalculate() {
        if(this.props.onCalculate) this.props.onCalculate(this.state.grossSalary);
    }
}