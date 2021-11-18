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



var str = "my name is suyash "
var delimeter = "s"
var num = 98
var  strArr = str.split(delimeter)
console.log(typeof(num))


// var array = [1, 5, 9, [9, 7, 1]]
// console.log(_.flatten)



var arr = [1,2 ,3, 4, 5, 6, 7, 8, 9]
var chunk = 4

var chunkSize = Math.ceil(arr.length/chunk)
var chunkedArr = []

var chunkIndex = 0

for(var i = 0; i<chunkSize; i++){
    var temp = []
    // temp.push(arr[chunkIndex++])
    // temp.push(arr[chunkIndex++])
    chunkedArr.push(arr.slice(chunkIndex, chunkIndex+2))
    chunkIndex+=2
   
}

console.log(chunkedArr)


chunkedArr = []

for(var i = 0; i<arr.length; i+=chunk){
    chunkedArr.push(arr.slice(i, i+chunk))
}

console.log("NEW : ", chunkedArr)


var arr1 = [1, 2, 3, 1, 4]
var arr2 = [1, 6, 9, 2, 9]



var intersection = []

arr1.forEach(function(el){
    if(arr2.includes(el) && !intersection.includes(el)){
        intersection.push(el)
    }
})
console.log(intersection)

var combined = arr1.concat(arr2)
// var union = combined.reduce(function(acc, el){
//     if(!acc.includes(el)){
//         acc.push(el)
//     }
//     return acc
// }, [])

var union = []
combined.forEach(function(el){
    if(!union.includes(el)){
        union.push(el)
    }
})

console.log(union)

var reduced = Array(10).fill(0).reduce(function(acc, el){
    return 5
})

console.log(reduced)

function myReudce(array, fn, acc){
    var loopStart = 0
    if(acc == undefined){
       acc = array[0]
       loopStart = 1
    }
    for(var i = loopStart; i<array.length; i++){
        acc = fn(acc, array[i], i, array)
    }
    return  acc
}

var ans = myReudce([1,3,5], function(acc, el){
    return acc+el
},10 )

console.log(ans)


var arr = [1,2,3,4,1,5,1,2,9]
var countObj = {}

arr.forEach(function(el){
    if(countObj[el] == undefined){
        countObj[el] = 1
    }else{
        countObj[el] = countObj[el]+1
    }
})

console.log(countObj)



var arr = [
    [1,2,3, 5],
    [4,5,6, 9],
    [7,8,9, 4]
]

var sumArr = Array(arr[0].length).fill(0)

arr.forEach(function(el){
    el.forEach(function(e, i){
        sumArr[i] =  sumArr[i]+ e

    })
})
console.log([sumArr]    )



var obj = {name:"suyash"}

obj["jd"] = "Full Stack Developer"
console.log(obj["jd"])

obj["jd"] = "Data Scientist"
console.log(obj["jd"])


var data = [["a", 5], ["b", 2], ["c", 9]]
var keys = ["name", "number"]
var objArr = []

data.forEach(function(el){
    var tmp = {}
    el.forEach(function(e, i){
       tmp[keys[i]] = e

    })
    objArr.push(tmp)
    
})

console.log(objArr)
