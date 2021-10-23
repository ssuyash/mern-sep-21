
// var cp = 10000
// var sp = 18000
// var isFriend = false 

// var diff = sp - cp

// var amount = diff < 0 ? -1*diff : diff

// if(isFriend){
//     console.log("sell")
//     if(diff < 0){
//         console.log("loss of ", amount)
//     }else{
//         console.log("profit of : ", amount)
//     }
// }else{
//     if(sp > cp){
//         console.log("sell")
//         console.log("profit of : ", amount)
//     }else{
//         console.log('cant sell')
//     }
// }



var cp = 10000
var sp = 14000
var isFrnd = false

var isProfit = sp > cp

if (isProfit) {
    var pp = ((sp - cp) / cp) * 100
    if (isFrnd) {
        if (pp > 10) {
            console.log("sell", pp)
        } else {
            console.log("don sell")
        }
    } else {
        if (pp > 25) {
            console.log("sell", pp)
        } else {
            console.log("dont sell")
        }
    }
} else {
    console.log("dont sell")
}