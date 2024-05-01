const start = Date.now();
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();

console.log(start);
console.log(year + '年' + month + '月' + date + '日');

const calculateTotal = (price,shippingFee) => {
    console.log(price + shippingFee + '円');
}

calculateTotal(1200, 500);

const double = (num) => {
    return num * 2;
}

console.log(double(30));