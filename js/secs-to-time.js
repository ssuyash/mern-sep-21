var secs = 1634802327

var secsInOneYear = 365*24*60*60
var secsInOneMonth = 30*24*60*60
var secsInOneDay = 24*60*60

var years = parseInt(secs/secsInOneYear)

secs %= secsInOneYear
var months = parseInt(secs/secsInOneMonth)

secs %= secsInOneMonth
var days = parseInt(secs/secsInOneDay)

console.log(years, months, days)



var cp = 10
var sp = 15
var isFrnd = false

var shouldISell = isFrnd ? true : sp > cp

isFrnd ? console.log("I should sell") : (cp < sp ? console.log("i shold sell") : console.log("I cant sell"))

console.log(shouldISell)


var age = 14

if(age >= 18){
    console.log("you can vote")
}

