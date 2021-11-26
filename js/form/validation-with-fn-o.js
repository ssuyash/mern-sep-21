var registerValidations = [
    {
        fldId: "email",
        pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        errId: "emailErr",
        msg: "Invalid Email"
    },

    {
        fldId: "pwd",
        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
        errId: "pwdErr",
        msg: "Invalid Password"
    },
]

document.getElementById("frm").addEventListener("submit", function (e) {
    e.preventDefault()
 
    registerValidations.forEach(function(el){
        checkValidation(el)
    })
})


function checkValidation(el) {
    var eleVal = document.getElementById(el.fldId).value
    if (el.pattern.test(eleVal)) {
        //valid
        document.getElementById(el.fldId).style.borderColor = "#fff"
        document.getElementById(el.errId).innerText = ""

    } else {
        //invalid
        document.getElementById(el.fldId).style.borderColor = "red"
        document.getElementById(el.errId).innerText = el.msg



    }
}


//for single filed on key press
document.getElementById("pwd").addEventListener("keyup", function(e){
    var value = e.target.value
    checkValidation({
        fldId: "pwd",
        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
        errId: "pwdErr",
        msg: "Invalid Password"
    })
   
})