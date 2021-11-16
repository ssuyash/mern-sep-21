var str = "GeeksDoor"
console.log(str)

var str = "This is String class"
var arr = str.split("s")
console.log(arr)

var str = "this pen is a pen this is a good pen, this pen is made by penasonic"

var count = str.split("pen").length-1

var len = str.split(" ").filter(function(word){
    return word.includes("pen")
}).length




function generateOTP(numOfDigit){
 var rand = Math.random()+""
 var otp = rand.slice(2, 2+numOfDigit)
 return otp

}


function generateOTPStr(numOfDigit){
     var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //var str = "0123456789"
    var otp = ""
    for(var i=0; i<numOfDigit; i++){
        var rand = Math.round(Math.random()*10000000)%str.length
        otp += str[rand]
        // console.log(rand)
    }
    return otp

}

console.log(generateOTPStr(10))