function isPrime(number){
    if(number <= 1){
        return false
    }

    var prime = true

    for(var i=2; i<=number/2; i++ ){
        if(number % i == 0){
            prime = false
            break
        }
    }

    return prime
}


var primeCount = 0
var i = 2

while(primeCount<10){
    if(isPrime(i)){
        primeCount++
        console.log(i)
    }
    i++     
}