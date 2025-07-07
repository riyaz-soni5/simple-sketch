
// // generating grid 16x16
// const Grid = document.querySelector('#grid');
// for (let i = 1; i <= 16; i++) {
//     let row = document.createElement('div')
//     Grid.appendChild(row).classList.add('row');
//     for (let j = 1; j <= 16; j++) {
//         let column = document.createElement('div');
//         row.appendChild(column).classList.add('insideGrid', 'border', 'border-black', 'm0', 'col', 'container-fluid');
//     }
// }




// let colorGrid = document.querySelectorAll('.insideGrid');
// let userColor = document.querySelector("#color");
// let Color;

// userColor.oninput = (e) => Color = e.target.value;


// function colorPixels() {
//     let mouseDownStatus = false;
//     for (let i = 0; i < colorGrid.length; i++) {
//         colorGrid[i].addEventListener('mousedown', function (e) {
//             e.target.style.backgroundColor = Color;
//             mouseDownStatus = true;
//         });
//         colorGrid[i].addEventListener('mouseup', function () {
//             mouseDownStatus = false;
//         })
//         colorGrid[i].addEventListener('mouseover', function (e) {
//             if (mouseDownStatus == true) {
//                 e.target.style.backgroundColor = Color;
//             }
//             else {

//                 return
//             }
//         });
//     }
// };


// // black color 
// document.querySelector('.co-black').addEventListener('click', function () {
//     Color = 'Black';
//     colorPixels();

// });

// // eraser for erasing the pixles color
// document.querySelector('.co-white').addEventListener('click', function () {
//     Color = 'White';
//     colorPixels();
// });

// colorPixels();

// // clears the pixles and making it all white 
// document.querySelector('.clear').addEventListener('click', function () {
//     for (let i = 0; i < colorGrid.length; i++) {
//         colorGrid[i].style.backgroundColor = 'white';
//     }

// })




const pixelContainer = document.querySelector('.pixel-container');
const pixelChangeBtn = document.querySelector(".change-pixel");
const clearBtn = document.querySelector('.clear');
const rainbowBtn = document.querySelector('.rainbow');
const userColor = document.querySelector('#color');
const EaserBtn = document.querySelector('.eraser');
const colorModeBtn = document.querySelector(".colorMode");

let userPixel;
let pixel;
let mode;
let colors = ["red", "orange", "yellow", "green", "blue", "indigo","violet"]

function userCanvas(num = 16){
    pixelContainer.innerHTML = '';

    if(num>100){
        pixelContainer.style.color = "red"
        pixelContainer.textContent = "Sorry The Max Limit For the Canvas is 100, Please try again with the value less than 100!"
    }
    else if(typeof num != 'number'){
        pixelContainer.style.color = "red"
        pixelContainer.textContent = "Please try again with the valid value!";

    }
    else{


        let mouseDownStatus = false;

        for (let i = 0; i < num; i++) {
            
            let flexContainer = document.createElement('div');
            for (let j = 0; j < num; j++) {
                
                let pixel = document.createElement('div')
                
                
                pixel.classList.add('pixel')
                flexContainer.appendChild(pixel);
            }
            
            flexContainer.classList.add('flex-container')
            
            pixelContainer.appendChild(flexContainer);
            pixel = document.querySelectorAll('.pixel');
            
            pixel.forEach(item => {
                item.onmousedown = (e)=>{
                    mouseDownStatus =true;
                    e.target.style.backgroundColor = colorUse(mode);
                }

                item.onmouseover = (e) =>{
                    if(mouseDownStatus == true){
                        e.target.style.backgroundColor = colorUse(mode);
                    }
                }

                item.onmouseup = () => {
                    mouseDownStatus = false;
                }



                
            });

            
        }
    }
}

pixelChangeBtn.onclick = ()=> {
    
    userPixel = parseInt(prompt("Enter the number"));
    userCanvas(userPixel);
}

clearBtn.onclick = ()=>{
    pixel.forEach(item => {
        item.style.backgroundColor = "white";
        
    });

};

colorModeBtn.onclick = ()=>{
    mode = "colorMode";
    toggleClicked(mode)
}


rainbowBtn.onclick = ()=>{
    mode = "rainbowMode";
    toggleClicked(mode);
}

EaserBtn.onclick = ()=>{
    mode = "eraseMode";
    toggleClicked(mode)
}

userCanvas();

function colorUse(value){
    let color;
    if(value == "colorMode"){
        color = userColor.value;
    }
    else if(value== "eraseMode"){
        color = "white";
    }
    else if(value=="rainbowMode"){
        color = colors[Math.floor(Math.random()*colors.length)];
    }
    
    return color;
}

function toggleClicked(value){
    if (value=="colorMode"){
        colorModeBtn.classList.add('clicked');
        rainbowBtn.classList.remove('clicked');
        EaserBtn.classList.remove('clicked')
    }
    else if(value == 'rainbowMode'){
        colorModeBtn.classList.remove('clicked');
        rainbowBtn.classList.add('clicked');
        EaserBtn.classList.remove('clicked')
    }
    else if(value == 'eraseMode'){
        colorModeBtn.classList.remove('clicked');
        rainbowBtn.classList.remove('clicked');
        EaserBtn.classList.add('clicked')
    }
}







