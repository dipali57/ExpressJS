function funcDis(val){
    document.getElementById("result").value+=val
}
    
function solve(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
    
function clearSc(){
    document.getElementById("result").value = ""
}