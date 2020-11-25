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
            additionalRate = (grossSalary - 150000) * 0.45;
        }

        const nationalInsurance = this.calculateNI(grossSalary);
        const monthlyStudentLoan = this.calculateStudentLoan(grossSalary);
        const totalTax = basicRate + higherRate + additionalRate;
        const netSalary = grossSalary - nationalInsurance - totalTax - (monthlyStudentLoan * 12);

        return {
            basicRate: basicRate.toFixed(2),
            higherRate: higherRate.toFixed(2),
            additionalRate: additionalRate.toFixed(2),
            nationalInsurance: nationalInsurance.toFixed(2),
            monthlyStudentLoan: monthlyStudentLoan.toFixed(2),
            yearlyStudentLoan: (monthlyStudentLoan * 12).toFixed(2),
            totalTax: totalTax.toFixed(2),
            netSalary: netSalary.toFixed(2)
        };
    }

    calculateNI(grossSalary) {
        let nationalInsurance = 0;
        const monthlySalary = grossSalary / 12;
        const niPrimaryThreshold = 792; // per month
        const niUpperEarningsLimit = 4167; // per month

        if(monthlySalary > niPrimaryThreshold) {
            if(monthlySalary <= niUpperEarningsLimit) {
                nationalInsurance = (monthlySalary - niPrimaryThreshold) * 0.12 * 12;
            } else {
                nationalInsurance = (niUpperEarningsLimit - niPrimaryThreshold) * 0.12 * 12;
                nationalInsurance += (monthlySalary - niUpperEarningsLimit) * 0.02 * 12;
            }
        }

        return nationalInsurance;
    }

    // Plan 1
    calculateStudentLoan(grossSalary) {
        const monthlySalary = grossSalary / 12;
        const threshold = 1615;
        return monthlySalary > threshold ? (monthlySalary - threshold) * 0.09 : 0;
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
                                <th>Annual Amount</th>
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
                                <td className="results__special">National Insurance</td>
                                <td>£{taxes.nationalInsurance}</td>
                            </tr>
                            <tr>
                                <td className="results__special">Student Loan</td>
                                <td>£{taxes.yearlyStudentLoan}</td>
                            </tr>
                            <tr>
                                <td className="results__special">Total Tax</td>
                                <td>£{taxes.totalTax}</td>
                            </tr>
                        </tbody>
                    </table>

                    <span className="results__net">Net Salary: £{taxes.netSalary}</span>
                    <span className="results__student">Monthly Student Loan: £{taxes.monthlyStudentLoan}</span>
                </div>
            </div>
        );
    }
}