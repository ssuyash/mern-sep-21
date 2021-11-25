var btnSave = document.getElementById("btnSave")

btnSave.addEventListener("click", function(){
    var emailValue = document.getElementById("email").value
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(!emailPattern.test(emailValue)){
        document.getElementById("emailErr").innerText = "invalid email format"
    }else{
        document.getElementById("emailErr").innerText = ""

    }

    
})







document.getElementById("showHidePwd").addEventListener("click", function(){
    console.log(this)
    var type = document.getElementById("pwd").type
    if(type=="password"){
        this.innerText = "Hide"
        document.getElementById("pwd").type = "text"

    }else{
        this.innerText = "Show"
        document.getElementById("pwd").type = "password"

    }
})


document.getElementById("check").addEventListener("change", function(e){
    console.log(e.target.checked)
   
   // alert(isChecked)
})


document.getElementById("select").addEventListener("change", function(e){
    console.log(e.target.value)
} )