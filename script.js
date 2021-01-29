const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handlekeyup(event){
    if (event.keyCode === 32) {
        if(!isJumping){
            jump();
        }
    }
}

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
        if(position >=150){
            clearInterval(upInterval);

            //Descendo
            let downinterval = setInterval(() =>{
                if (position <= 0){
                    clearInterval(downinterval);
                    isJumping=false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },20);
        
        } else{
        //Subindo
        position += 20;
        dino.style.bottom = position + 'px';
        }
    },20); 
}

function CreateCactus() {
    const cactus = document.createElement('div');
    let ramdomTime = Math.random() * 6000;
    let cactusPosition = 1000;

    cactus.classList.add ('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let LeftInterval = setInterval(() =>{
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';

        if (CaretPosition < -60){
            clearInterval(LeftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position <60) {
            //Game over
            clearInterval(LeftInterval);
            document.body.innerHTML = '<h1 class= "game-over">Game Over</h1>';
          }  else{
            cactus.position -= 10;
            cactus.style.left = cactusPosition + 'px';            
        }
    },20);
    
    setTimeout(CreateCactus, ramdomTime);
}


CreateCactus();
document.addEventListener('keyup', handlekeyup);