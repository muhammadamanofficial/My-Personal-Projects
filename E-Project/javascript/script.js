function show(){
    var x = document.getElementById("password")
    var y = document.getElementById("unshow")
    var z = document.getElementById("show")
    if(x.type == "password"){
        x.type = "text";
        y.style.display = "none"
        z.style.display = "block"
        z.style.color = "red"
    }
    else{
        x.type = "password"
        y.style.display = "block"
        z.style.display = "none"
    }
}
function popup(){
    var x = document.getElementById("displaynone")
    var y = document.getElementById("signinpopup")
    x.style.display = "none"
    y.style.display = "block"
}