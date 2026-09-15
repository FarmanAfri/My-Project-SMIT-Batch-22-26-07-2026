
function calculate(btnValue){
    let calInp = document.getElementById("input")
    if(btnValue == '='){
     calInp.value = eval(calInp.value)
        console.log(res)
    }
    else if(btnValue ==  'AC'){
        calInp.value = ""
    }
    else if(btnValue == 'Del'){
        calInp.value = calInp.value.slice(0,-1)
    }
    
    else{
        calInp.value += btnValue
    }
    
}