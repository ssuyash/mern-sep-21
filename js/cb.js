function highOrderFunction(fnBody){
    fnBody("hi")
}


var faltuFunction = 
console.log(faltuFunction)

 highOrderFunction(function(msg){
    console.log(msg)
}
)

var arr = [1, 5, 15]



function iterate(arr, fn){
    for(var i = 0; i<arr.length; i++){
        fn(arr[i])
    }
}

iterate([1, 5, 9], function(el){
    console.log(el*el)
})



function myMap(arr, fun){
    var interArr = []
    
    for(var i = 0; i<arr.length; i++){
        var ret = fun(arr[i])
        interArr.push(ret)
    }

    return interArr
}


