// function sum(num1, num2){
//     var res = num1 + num2
//     return res
// }


// var res = sum(50, 50 ) + sum(30, 40) + sum(sum(1,2), sum(30, 40))

// console.log(sum(50, 50 ))


//console.log(calc(10, 20, "-"))







// var arr = [1, 3, 5, 6, ]
// var sum = 0

// for(var i = 0; i<=3; i++){
//     sum+=arr[i]
// }
// console.log(sum)



// var ages = [21, 13, 25, 60, 65, 10, 52, 85]
// console.log(ages.length)
// var voters = 0
// var nonVoters = 0

// for(var i = 0; i<ages.length; i++){
   
//     if(ages[i]>=18){
//         voters++
//     }else{
//         nonVoters++
//     }

// }
// console.log(voters, nonVoters)


// var people = [
//     {name:"abc", age:12},
//     {name:"xyz", age:21},
//     {name:"abc", age:23},
//     {name:"abc", age:65},
//     {name:"abc", age:85},
//     {name:"abc", age:7},
// ]

// var voters = 0
// var nonVoters = 0

// var foundInd = -1

// for(var i = 0; i<people.length; i++){
//     // console.log(people[i].age)
//     if(people[i].age==65){
//         console.log(people[i], i)
//         foundInd = i
//         break
//         voters++
//     }else{
//         nonVoters++
//     }
// }

// console.log(voters, nonVoters, foundInd)



var stations = [
    {name:'A', dist:0},
    {name:"B", dist:5},
    {name:"C", dist:6},
    {name:"D", dist:11},
    {name:"E", dist:12},
    {name:"F", dist:13},
    
]

var src = "A"
var dst = "C"

var srcIndex = -1
var dstIndex = -1

for(var i = 0; i<stations.length; i++){
    if(stations[i].name==src){
        srcIndex = i
    }

    if(stations[i].name==dst){
        dstIndex = i
    }
}


console.log(srcIndex, dstIndex)
var srcDst = stations[srcIndex].dist
var dstDst = stations[dstIndex].dist

var isCont = srcIndex-dstIndex == -1 || srcIndex-dstIndex == 1
var fare = 5

if(!isCont){
    var travelDist = srcDst - dstDst
    travelDist = travelDist < 0 ? -1*travelDist : travelDist
    if(travelDist > 3){
        fare += (travelDist-3)*1.5
    }
}

console.log(fare)



// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics



function sum(a, b){
    return a+b
}

console.log(sum)