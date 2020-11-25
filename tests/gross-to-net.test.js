const calculateNetSalary = require('../src/gross-to-net');

// Test 0
test('£0 gross salary', () => {
    const net = calculateNetSalary(0);
    expect(Number(net.basicRate)).toBe(0);
    expect(Number(net.higherRate)).toBe(0);
    expect(Number(net.additionalRate)).toBe(0);
    expect(Number(net.nationalInsurance)).toBe(0);
    expect(Number(net.monthlyStudentLoan)).toBe(0);
    expect(Number(net.yearlyStudentLoan)).toBe(0);
    expect(Number(net.totalTax)).toBe(0);
    expect(Number(net.netSalary)).toBe(0);
});

// Test negative
test('-£100000 gross salary', () => {
    const net = calculateNetSalary(-100000);
    expect(Number(net.basicRate)).toBe(0);
    expect(Number(net.higherRate)).toBe(0);
    expect(Number(net.additionalRate)).toBe(0);
    expect(Number(net.nationalInsurance)).toBe(0);
    expect(Number(net.monthlyStudentLoan)).toBe(0);
    expect(Number(net.yearlyStudentLoan)).toBe(0);
    expect(Number(net.totalTax)).toBe(0);
    expect(Number(net.netSalary)).toBe(-100000);
});

// Test string, boolean, null, undefined
test('string', () => {
    const net = calculateNetSalary('hello world');
    expect(Number(net.basicRate)).toBe(0);
    expect(Number(net.higherRate)).toBe(0);
    expect(Number(net.additionalRate)).toBe(0);
    expect(Number(net.nationalInsurance)).toBe(0);
    expect(Number(net.monthlyStudentLoan)).toBe(0);
    expect(Number(net.yearlyStudentLoan)).toBe(0);
    expect(Number(net.totalTax)).toBe(0);
    expect(Number(net.netSalary)).toBe(0);
});

test('boolean', () => {
    const net = calculateNetSalary(true);
    expect(Number(net.basicRate)).toBe(0);
    expect(Number(net.higherRate)).toBe(0);
    expect(Number(net.additionalRate)).toBe(0);
    expect(Number(net.nationalInsurance)).toBe(0);
    expect(Number(net.monthlyStudentLoan)).toBe(0);
    expect(Number(net.yearlyStudentLoan)).toBe(0);
    expect(Number(net.totalTax)).toBe(0);
    expect(Number(net.netSalary)).toBe(0);
});

test('null', () => {
    const net = calculateNetSalary(null);
    expect(Number(net.basicRate)).toBe(0);
    expect(Number(net.higherRate)).toBe(0);
    expect(Number(net.additionalRate)).toBe(0);
    expect(Number(net.nationalInsurance)).toBe(0);
    expect(Number(net.monthlyStudentLoan)).toBe(0);
    expect(Number(net.yearlyStudentLoan)).toBe(0);
    expect(Number(net.totalTax)).toBe(0);
    expect(Number(net.netSalary)).toBe(0);
});

test('undefined', () => {
    const net = calculateNetSalary(undefined);
    expect(Number(net.basicRate)).toBe(0);
    expect(Number(net.higherRate)).toBe(0);
    expect(Number(net.additionalRate)).toBe(0);
    expect(Number(net.nationalInsurance)).toBe(0);
    expect(Number(net.monthlyStudentLoan)).toBe(0);
    expect(Number(net.yearlyStudentLoan)).toBe(0);
    expect(Number(net.totalTax)).toBe(0);
    expect(Number(net.netSalary)).toBe(0);
});

// Test vs manual
test('£34000 gross salary', () => {
    const net = calculateNetSalary(34000);
    expect(Number(net.basicRate)).toBe(4300);
    expect(Number(net.higherRate)).toBe(0);
    expect(Number(net.additionalRate)).toBe(0);
    expect(Number(net.nationalInsurance)).toBe(2939.52);
    expect(Number(net.monthlyStudentLoan)).toBe(109.65);
    expect(Number(net.yearlyStudentLoan)).toBe(1315.80);
    expect(Number(net.totalTax)).toBe(4300);
    expect(Number(net.netSalary)).toBe(25444.68);
});

test('£63633 gross salary', () => {
    const net = calculateNetSalary(63633);
    expect(Number(net.basicRate)).toBe(7500);
    expect(Number(net.higherRate)).toBe(5453.2);
    expect(Number(net.additionalRate)).toBe(0);
    expect(Number(net.nationalInsurance)).toBe(5132.58);
    expect(Number(net.monthlyStudentLoan)).toBe(331.90);
    expect(Number(net.yearlyStudentLoan)).toBe(3982.77);
    expect(Number(net.totalTax)).toBe(12953.2);
    expect(Number(net.netSalary)).toBe(41564.45);
});

test('£45834 gross salary', () => {
    const net = calculateNetSalary(45834);
    expect(Number(net.basicRate)).toBe(6666.8);
    expect(Number(net.higherRate)).toBe(0);
    expect(Number(net.additionalRate)).toBe(0);
    expect(Number(net.nationalInsurance)).toBe(4359.6);
    expect(Number(net.monthlyStudentLoan)).toBe(198.41);
    expect(Number(net.yearlyStudentLoan)).toBe(2380.86);
    expect(Number(net.totalTax)).toBe(6666.8);
    expect(Number(net.netSalary)).toBe(32426.74);
});