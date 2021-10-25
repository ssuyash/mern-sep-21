var a = 3
var b = 6
var c = 5

if(a>0 && b>0 && c>0){

    //sides are valid

    //check triangle theorem
    if(a+b>c && b+c>a && a+c>b){
        //validating triangle theorem
        console.log("valid triangle")
        if(a==b && a==c){
            console.log("Equilateral")
        }else if(a==b || a==c || b==c){
            console.log("Isoscelec")
        }else{
            console.log("scalen")
        }
    }else{
        //not validating triangle theorem
        console.log("invalid triangle")

    }

}else{
    console.log("invalid sides")
}

