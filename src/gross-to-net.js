
module.exports = function calculateNetSalary(grossSalary) {
    if(typeof grossSalary !== 'number') {
        return {
            basicRate: "0.00",
            higherRate: "0.00",
            additionalRate: "0.00",
            nationalInsurance: "0.00",
            monthlyStudentLoan: "0.00",
            yearlyStudentLoan: "0.00",
            totalTax: "0.00",
            netSalary: "0.00"
        };
    }

    console.log('ok 22')

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

    const nationalInsurance = calculateNI(grossSalary);
    const monthlyStudentLoan = calculateStudentLoan(grossSalary);
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

function calculateNI(grossSalary) {
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
function calculateStudentLoan(grossSalary) {
    const monthlySalary = grossSalary / 12;
    const threshold = 1615;
    return monthlySalary > threshold ? (monthlySalary - threshold) * 0.09 : 0;
}