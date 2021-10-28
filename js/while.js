var num = 654
var count = 0
var sum = 0
var revnum = 0
while(num!=0){
    count++
    var extra = num%10
    //console.log(extra)
    num = (num-extra)/10
    revnum = revnum*10 + extra
    sum += extra

}

console.log(count, sum, revnum)