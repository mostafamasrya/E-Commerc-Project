
// ================================ slider =============================================================
var sliderArr = ["./clothes imgs/clothes5.jpg", "./shoes/shoes11.jpg", "./pants/pants3.jpg","./shoes/shoes3.jpg"];
document.getElementById("myimg")
var i = 0;
function prevFun() {
    if(i<=0) {
        i=sliderArr.length-1;
        myimg.src = sliderArr[i];
    } else {
        i--;
        myimg.src = sliderArr[i];
    }
}

function nextFun() {
    if(i>=sliderArr.length-1){
        i=0;
        myimg.src = sliderArr[i];
    } else {
        i++;
        myimg.src = sliderArr[i];
    }
}


function goup(){
    document.documentElement.scrollTop= 0;
}

function showAll(){
document.getElementById("card1").style.display="block"
document.getElementById("card2").style.display="block"
document.getElementById("card3").style.display="block"
document.getElementById("card4").style.display="block"
document.getElementById("card5").style.display="block"
document.getElementById("card6").style.display="block"

document.getElementById("btn2").classList.remove("active")
document.getElementById("btn4").classList.remove("active")
document.getElementById("btn3").classList.remove("active")
document.getElementById("btn1").classList.add("active")


}

function showT(){
     document.getElementById("card1").style.display="block"
     document.getElementById("card2").style.display="none"
     document.getElementById("card3").style.display="none"
     document.getElementById("card4").style.display="block"
     document.getElementById("card5").style.display="none"
     document.getElementById("card6").style.display="none"

     document.getElementById("btn1").classList.remove("active")
     document.getElementById("btn4").classList.remove("active")
     document.getElementById("btn3").classList.remove("active")
     document.getElementById("btn2").classList.add("active")
     

}


function showP(){
    document.getElementById("card1").style.display="none"
    document.getElementById("card3").style.display="none"
    document.getElementById("card2").style.display="block"
    document.getElementById("card5").style.display="block"
    document.getElementById("card4").style.display="none"
    document.getElementById("card6").style.display="none"

    document.getElementById("btn1").classList.remove("active")
    document.getElementById("btn4").classList.remove("active")
    document.getElementById("btn2").classList.remove("active")
    document.getElementById("btn3").classList.add("active")
    

}


function showS(){
    document.getElementById("card6").style.display="block"
    document.getElementById("card1").style.display="none"
    document.getElementById("card2").style.display="none"
    document.getElementById("card3").style.display="block"
    document.getElementById("card5").style.display="none"
    document.getElementById("card4").style.display="none"

    document.getElementById("btn1").classList.remove("active")
    document.getElementById("btn2").classList.remove("active")
    document.getElementById("btn3").classList.remove("active")
    document.getElementById("btn4").classList.add("active")
    

}












