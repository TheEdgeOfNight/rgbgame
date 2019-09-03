var h1 = document.querySelector('h1');

var reset = document.querySelector("#refresh");

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var difficulty = 'hard';

easy.addEventListener('click', function(){
    difficulty = 'easy';
    easy.classList.add('selected');
    hard.classList.remove('selected');
    fill(3);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    //change display color
    colorDis.textContent = pickedColor;
    //change square color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

    }
    h1.style.background = 'steelblue';
    messageDisplay.textContent = '';
    reset.textContent = 'new colors';

    squares[3].style.display = 'none';
    squares[4].style.display = 'none';
    squares[5].style.display = 'none';

})

hard.addEventListener('click', function(){
    difficulty = 'easy';
    squares[3].style.display = 'unset';
    squares[4].style.display = 'unset';
    squares[5].style.display = 'unset';

    easy.classList.remove('selected');
    hard.classList.add('selected');
    fill(6);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    //change display color
    colorDis.textContent = pickedColor;
    //change square color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

    }
    h1.style.background = 'steelblue';
    messageDisplay.textContent = '';
    reset.textContent = 'new colors';

})

var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 255)",
    "rgb(0, 255, 255",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var messageDisplay = document.querySelector('#message');

function randomRGB(){
    var r = Math.round(Math.random() * 256).toString();
    var b = Math.round(Math.random() * 256).toString();
    var g = Math.round(Math.random() * 256).toString();
    return "rgb(" + r +", " + b + ", " + g + ")";
}


function fill(num){
    var arr = []
        for(var i = 0; i < num; i++){
            arr.push(randomRGB());
        }

    colors = arr;
}

fill(6);
    

var pickedColor = colors[Math.floor(Math.random() * colors.length)];

var colorDis = document.getElementById('colordisplay');

colorDis.textContent = pickedColor;

var squares = document.querySelectorAll(".square");

function wincolor(wincol){
    //loop through all squares, change each color to given color
    //change title bar to same color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = wincol;
    }
    h1.style.background = wincol;
}

for(var i = 0; i < squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    //add click listeners
    squares[i].addEventListener('click', function(){
        //grab color of picked square
        if(this.style.backgroundColor == pickedColor){
            messageDisplay.textContent = "got it!";
            reset.textContent = 'play again?';
            wincolor(pickedColor);
        }else{
            this.style.backgroundColor = 'rgb(35,35,35)';
            messageDisplay.textContent = 'try again';
        }
    })
}

reset.addEventListener('click', function(){
    //generate new colors
    if(difficulty == 'hard'){
        fill(6);
    }else{
        fill(3);
    }
    
    //pick new random color
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    //change display color
    colorDis.textContent = pickedColor;
    //change square color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

    }
    h1.style.background = 'steelblue';
    messageDisplay.textContent = '';
    reset.textContent = 'new colors';
})

