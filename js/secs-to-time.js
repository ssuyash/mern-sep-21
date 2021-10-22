// var secs = 1634802327

// var secsInOneYear = 365*24*60*60
// var secsInOneMonth = 30*24*60*60
// var secsInOneDay = 24*60*60

// var years = parseInt(secs/secsInOneYear)

// secs %= secsInOneYear
// var months = parseInt(secs/secsInOneMonth)

// secs %= secsInOneMonth
// var days = parseInt(secs/secsInOneDay)

// console.log(years, months, days)



// var cp = 10
// var sp = 15
// var isFrnd = false

// var shouldISell = isFrnd ? true : sp > cp

// isFrnd ? console.log("I should sell") : (cp < sp ? console.log("i shold sell") : console.log("I cant sell"))

// console.log(shouldISell)


// var age = 14

// if(age >= 18){
//     console.log("you can vote")
// }


var cp = 10000
var sp = 18000
var isFriend = false 

var diff = sp - cp

var amount = diff < 0 ? -1*diff : diff

if(isFriend){
    console.log("sell")
    if(diff < 0){
        console.log("loss of ", amount)
    }else{
        console.log("profit of : ", amount)
    }
}else{
    if(sp > cp){
        console.log("sell")
        console.log("profit of : ", amount)
    }else{
        console.log('cant sell')
    }
}



