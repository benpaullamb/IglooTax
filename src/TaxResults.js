import React, { Component } from 'react';

export default class TaxResults extends Component {

    calculateTaxes(grossSalary) {
        let basicRate = 0, higherRate = 0, additionalRate = 0;
        
        // Basic rate
        if(grossSalary > 12500) {
            if(grossSalary <= 50000) {
                basicRate = (grossSalary - 12500) * 0.2;
            } else {
                basicRate = (50000 - 12500) * 0.2;
            }
        }

        // Higher rate
        if(grossSalary > 50000) {
            if(grossSalary <= 150000) {
                higherRate = (grossSalary - 50000) * 0.4;
            } else {
                higherRate = (150000 - 50000) * 0.4;
            }
        }

        // Additional rate
        if(grossSalary > 150000) {
            higherRate = (grossSalary - 150000) * 0.45;
        }

        const totalTax = basicRate + higherRate + additionalRate;
        const netSalary = grossSalary - totalTax;

        return {
            basicRate: basicRate.toFixed(2),
            higherRate: higherRate.toFixed(2),
            additionalRate: additionalRate.toFixed(2),
            totalTax: totalTax.toFixed(2),
            netSalary: netSalary.toFixed(2)
        };
    }

    render() {
        const taxes = this.calculateTaxes(this.props.grossSalary);

        return (
            <div className="results page">
                <div className="page__container">
                    <table className="results__table">
                        <thead>
                            <tr>
                                <th className="results__band">Band</th>
                                <th>Amount Taxed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="results__band">Personal Allowance</td>
                                <td>£0.00</td>
                            </tr>
                            <tr>
                                <td className="results__band">Basic Rate</td>
                                <td>£{taxes.basicRate}</td>
                            </tr>
                            <tr>
                                <td className="results__band">Higher Rate</td>
                                <td>£{taxes.higherRate}</td>
                            </tr>
                            <tr>
                                <td className="results__band">Additional Rate</td>
                                <td>£{taxes.additionalRate}</td>
                            </tr>
                            <tr>
                                <td className="results__total">Total Tax</td>
                                <td>£{taxes.totalTax}</td>
                            </tr>
                        </tbody>
                    </table>

                    <span className="results__net">Net Salary: £{taxes.netSalary}</span>
                </div>
            </div>
        );
    }
}