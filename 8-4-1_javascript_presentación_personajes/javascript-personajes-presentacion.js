function cookies(){
    document.querySelector(".cookies").style.display = "block";
}

setTimeout(cookies, 2000);


function denegar(){
    document.querySelector(".cookies").style.display = "none";
}

function alice(){
    document.querySelector(".alice-sinopsis").style.display ="block";
    setInterval(salir1, 5000);
}

function onePiece(){
    clearInterval;
    document.querySelector(".one-piece-sinopsis").style.display ="block";
    setInterval(salir2, 5000);
}

function hakusho(){
    clearInterval;
    document.querySelector(".yu-yu-hakusho-sinopsis").style.display ="block";
    setInterval(salir3, 5000);
}

function salir1(){
    document.querySelector(".alice-sinopsis").style.display ="none";
}

function salir2(){
    document.querySelector(".one-piece-sinopsis").style.display ="none";
}

function salir3(){
    document.querySelector(".yu-yu-hakusho-sinopsis").style.display ="none";
}