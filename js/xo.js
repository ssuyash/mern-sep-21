

function validateEntries(arr){
    var xCount = arr.filter(function(el){
        return el =="X"
    }).length

    var oCount = arr.filter(function(el){
        return el =="O"
    }).length

    // console.log(arr, xCount, oCount)

    var diff = Math.abs(xCount-oCount)

     if(diff == 1 || diff==0){
         return {"X":xCount, "O":oCount, isValid:true}
     }else{
        return {"X":xCount, "O":oCount, isValid:false}
     }
}


var winningPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkIsWinner(checkFor){
    var isWinner = false

    winningPos.forEach(function(pos){
        var i1 = pos[0]
        var i2 = pos[1]
        var i3 = pos[2]
        if(arr[i1] == checkFor && arr[i2] == checkFor && arr[i3] == checkFor){
            isWinner = true
        }
    })

    return isWinner
    
}


var arr = ['O', 'O', 'O', 'X', '', 'O', 'X', 'X', '']
var validationData = validateEntries(arr)
console.log(validationData)

if(validationData.isValid){
    var isXWinner = checkIsWinner("X")
    var isOWinner = checkIsWinner("O")

    if(isXWinner){
        console.log("X Won")
    }else if(isOWinner){
        console.log("O won")
    }else{
        console.log("Tie till now")
    }
}else{
    console.log("invalid inputs")
}
