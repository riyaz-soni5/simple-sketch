
// generating grid 16x16
const Grid = document.querySelector('#grid');
for (let i = 1; i <= 16; i++) {
    let row = document.createElement('div')
    Grid.appendChild(row).classList.add('row');
    for (let j = 1; j <= 16; j++) {
        let column = document.createElement('div');
        row.appendChild(column).classList.add('insideGrid', 'border', 'border-black', 'm0', 'col', 'container-fluid');
    }
}




let colorGrid = document.querySelectorAll('.insideGrid');
let userColor = document.querySelector("#color");
let Color;

userColor.oninput = (e) => Color = e.target.value;


function colorPixels() {
    let mouseDownStatus = false;
    for (let i = 0; i < colorGrid.length; i++) {
        colorGrid[i].addEventListener('mousedown', function (e) {
            e.target.style.backgroundColor = Color;
            mouseDownStatus = true;
            console.log("mouse is pressed!")
        });
        colorGrid[i].addEventListener('mouseup', function () {
            mouseDownStatus = false;
            console.log("mouse is released!")
        })
        colorGrid[i].addEventListener('mouseover', function (e) {
            if (mouseDownStatus == true) {
                e.target.style.backgroundColor = Color;
            }
            else {

                return
            }
        });
    }
};


// black color 
document.querySelector('.co-black').addEventListener('click', function () {
    Color = 'Black';
    colorPixels();

});

// eraser for erasing the pixles color
document.querySelector('.co-white').addEventListener('click', function () {
    Color = 'White';
    colorPixels();
});

colorPixels();

// clears the pixles and making it all white 
document.querySelector('.clear').addEventListener('click', function () {
    for (let i = 0; i < colorGrid.length; i++) {
        colorGrid[i].style.backgroundColor = 'white';
    }

})

