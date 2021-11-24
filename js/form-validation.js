var btn = document.getElementById("btn")
var inp = document.getElementById("inp")
var err = document.getElementById("errtxt")

btn.addEventListener("click", function(e){
   if(inp.value.length == "" ){
    err.innerText = "This field is required"
   }else{
    err.innerText = ""
   }
})

