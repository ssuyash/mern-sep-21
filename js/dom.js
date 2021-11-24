var para = document.getElementById("p")

var btn = document.getElementById("btn")
var inp = document.getElementById("inp")

btn.addEventListener("click", function(event){

    var inpVal = inp.value
    console.log(inpVal)
    // alert("hello")
    
    var oldText = para.innerText
    para.innerText = oldText+inpVal
    // if(oldText == "Hello"){
    //     para.innerText="Bye"
    // }else{
    //     para.innerText = "Hello"
    // }

    console.log(event)
})