function fact(n){
    var f = 1
    for(var i = 2; i<= n; i++){
        f=f*i
    }

    return f
}


function calc(x, i){
   return  (x**i)/fact(i)
}



var x = 2
var n = 5
var sum = 0

for(var i = 1; i<=n; i++){
  sum += calc(x, i)
}


console.log(sum)