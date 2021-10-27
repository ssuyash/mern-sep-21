// var n = 50
// for(var count=1; count<=10; count++){
//   console.log(n*count)
// }


var n = 17

var count = 0

for(var i=1; i<=n; i++){
    if(n % i == 0){
        console.log(i)
        count++
    }
}
console.log("total number : " , count)


//https://raw.githubusercontent.com/ssuyash/mern-march-21-backup-1/main/js/problem-statemets/loop.txt

if(count > 2){
    console.log("not prime")
}else{
    console.log("prime")
}