//call method 
const productinfo = {
    productdetails: function (rating,price) {
        return this.pid + " " + this.pname + " " + rating + " " + price;
    }
}
const product = {
    pid: 1001,
    pname:"Realme"
}
console.log(productinfo.productdetails.call(product,4,30000));
