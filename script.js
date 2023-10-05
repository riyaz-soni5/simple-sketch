
// generating grid 16x16
const Grid = document.querySelector('#grid');
for (let i = 1; i <= 16; i++) {
    let row = document.createElement('div')
    Grid.appendChild(row).classList.add('row');
    for (let j = 1; j <= 16; j++) {
        let column = document.createElement('div');
        row.appendChild(column).classList.add('insideGrid', 'border', 'border-black', 'm0', 'col');
    }
}




let ColorGrid = document.querySelectorAll('.insideGrid');
let userColor = document.querySelector("#color");
let Color;

userColor.oninput = (e) => Color = e.target.value;


function colorPixels() {
    for (let i = 0; i < ColorGrid.length; i++) {
        ColorGrid[i].addEventListener('click', function (e) {
            e.target.style.backgroundColor = Color;
        })
    }

}


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

// userColor.addEventListener('click', function () {   
//     Color = userColor.value;
//     Color = userColor.value;
//     colorPixels();
// });

colorPixels();

// clears the pixles and making it all white 
document.querySelector('.clear').addEventListener('click', function () {
    for (let i = 0; i < ColorGrid.length; i++) {
        ColorGrid[i].style.backgroundColor = 'white';
    }

})









