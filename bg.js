const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad(){

}
function paintImage(imgNumber){
    const image = new Image();
    image.src = `img/${imgNumber +1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() *6);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}
init();