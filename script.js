const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
    timeList = document.querySelector('.time-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.board');

let time = 0,
    score = 0;



startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
})


timeList.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        let elAttr = e.target.getAttribute('data-time');
        time = parseInt(elAttr)
        startGame()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createCircle()
    timeEl.innerHTML = `00:${time}`
}

function decreaseTime() {
    if (time === 0) {
        timeEl.parentNode.classList.add('hide')
        board.innerHTML = `<h1>Ваш счет: ${score}</h1>
        <a href=''>Играть снова!</a>
        `
     
    } else {
        let currentTime = --time;

        if (currentTime < 10) {
            currentTime = `0${currentTime}`
        }

        timeEl.innerHTML = `00:${currentTime}`;
    }
}

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max + 1 - min) + min)
 }
 
function createCircle() {
    const circle = document.createElement('div');

    circle.classList.add('circle');
    let size = randomNumber(10, 60);

    // console.log(board.clientWidth);
    // console.log(board.clientHeight);

    let height = board.clientHeight;
    let width = board.clientWidth;

    let x = randomNumber(0, width - size);
    let y = randomNumber(0, height - size);

    circle.style = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
    `
    board.appendChild(circle)
    
       let r = randomNumber(0, 255)
        let g = randomNumber(0, 255)
        let b = randomNumber(0, 255)
        
        
        circle.style.background = `rgb(${r},${g},${b})`
}


 
        
        
board.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')) {
        score++
        e.target.remove();
        createCircle() 
        
        
        
        
        /* circle.style.background = `rgb(${r},${g},${b})`; */
    }
})

