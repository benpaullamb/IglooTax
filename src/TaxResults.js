import React, { Component } from 'react';
import calculateNetSalary from './gross-to-net';

export default class TaxResults extends Component {

    render() {
        const taxes = calculateNetSalary(this.props.grossSalary);

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