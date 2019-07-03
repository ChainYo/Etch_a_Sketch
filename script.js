// Variables declarations
const gridContainer = document.querySelector('#gridContainer');
const resetBtn = document.querySelector('#reset');
const blackColorBtn = document.querySelector('#black');
const randomColorBtn = document.querySelector('#random');
let row;
let column;
let actualColor = '#F3B700';
let e;
// init
createGrid(16);
// Function for creating a Grid - gSize defines the size of the grid
function createGrid (gSize) {
    for (let i = 0; i < gSize; i++) {
        createRow(gSize); // using the function createRow()
        for (let y = 0; y < gSize; y++) {
            createColumn(gSize); // using the function createColumn(gSize) - gSize is used in createGrid(gSize) and defines the size of the grid you want to create
        }
    }
}
// Function for creating a Row - used in createGrid(gSize)
function createRow (gSize) {
    row = document.createElement('div');
    row.classList.add('row');
    row.style.height = `${gridContainer.clientHeight / gSize}px`;
    gridContainer.appendChild(row);
}
// Function for creating a Column - used in createGrid(gSize)
function createColumn (gSize) {
    column = document.createElement('div');
    column.classList.add('column');
    column.style.width = `${gridContainer.clientWidth / gSize}px`;
    column.style.height = `${gridContainer.clientHeight / gSize}px`;
    column.addEventListener('mouseover', function(e) {
        draw (e.target);
    })
    row.appendChild(column);
}
// Draw function
function draw (target) {
    target.style.backgroundColor = actualColor;
    return;
}
// Function for clearing the Grid
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}
// Buttons setup
// Black button
blackColorBtn.addEventListener('click', function(e) {
    actualColor = '#000';
})
// Random/rainbow button
randomColorBtn.addEventListener('click', function(e) {
    actualColor = getRandomColor();
})
// Reset button
resetBtn.addEventListener('click', function(gridChoice) {
    gridChoice = prompt('Choose a size for the new grid (1 - 100)', 16);
    if (gridChoice >= 1 && gridChoice <= 100 && gridChoice % 1 == 0) {
        clearGrid();
        createGrid(gridChoice);
        actualColor = "#F3B700";
    } else {
        alert('ERROR: You should choose a size between 1 and 100 (integer only)');
    }
})
// Function to get a random color
function getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let randC = 0; randC < 6; randC++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}