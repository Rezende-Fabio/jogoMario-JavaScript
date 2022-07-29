
const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const nuven1 = document.querySelector(".nuvens")
const nuven2 = document.querySelector(".nuvens2")


const pulo = () =>{
    mario.classList.add("pulo")

    setTimeout(()=>{
        mario.classList.remove("pulo")
    }, 700)
}

const loop = setInterval(() =>{

    const pipePosicao = pipe.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');

    const nuven1Posicao = nuven1.offsetLeft;
    const nuven2Posicao = nuven2.offsetLeft;

    if (pipePosicao <= 83 && pipePosicao > 0 && marioPosicao < 62) {
      
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosicao}px`;
        
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosicao}px`;

        mario.src="./Img/game-over.png";
        mario.style.width = "45px";
        mario.style.marginLeft = "30px";

        nuven1.style.animation = "none";
        nuven1.style.left = `${nuven1Posicao}px`;

        nuven2.style.animation = "none";
        nuven1.style.left = `${nuven2Posicao}px`;

        clearInterval(loop);
    }

} , 10)


document.addEventListener("keydown", pulo);