var activePlayer = 'X'
var actions = Array(9).fill(null)



function run(e, btnIndex){
    var btnText =  e.target.innerText
    if(btnText != "X" && btnText != "O"){
        e.target.innerText = activePlayer
        actions[btnIndex] = activePlayer
        activePlayer = activePlayer == "X" ? "O" : "X"
    }
    console.log(actions)
}