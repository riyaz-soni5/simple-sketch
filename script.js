
// generating grid 16x16
const Grid = document.querySelector('#grid');
for (let i = 1; i <= 16; i++) {
    let row = document.createElement('div')
    Grid.appendChild(row).classList.add('row');
    for (let j = 1; j <= 16; j++) {
        let column = document.createElement('div');
        row.appendChild(column).classList.add('insideGrid', 'border', 'border-black','m0','col');
    }
}
