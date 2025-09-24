let price1=12.99;
let price2=9.99;
let price3=15.50;
let quantity1=2;
let quantity2=1;
let quantity3=3;
let subTotal=0;
let discount=0;
let finalTotal=0;
let shipping=4.99;
subTotal=(price1*quantity1)+(price2*quantity2)+(price3*quantity3);
if(subTotal>75){
    discount=subTotal*0.1;
}
else if(subTotal>100){
    discount=subTotal*0.15;
}
else{
    discount=0;
}
if(subTotal>50){
    shipping=0;
}
subTotal=subTotal-discount+shipping;
let couponCode="BOOKS10";
let couponDis=0;
if(couponCode=="BOOKS10"){
    couponDis=(subTotal-discount)*0.10;
}
let isMember=true;
let memberDis=0;
if(isMember){
    memberDis=(subTotal-discount-couponDis)*0.05;
}
finalTotal=subTotal-discount-couponDis-memberDis+shipping;
console.log("Subtotal: $"+subTotal.toFixed(2));
console.log("Discount: -$"+discount.toFixed(2));
console.log("Coupon Discount: -$"+couponDis.toFixed(2));
console.log("Member Discount: -$"+memberDis.toFixed(2));
console.log("Shipping: $"+shipping.toFixed(2));
console.log("Final total: $"+finalTotal.toFixed(2));
