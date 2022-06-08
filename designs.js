// Select color input
// Select size input
colorPicker = document.getElementById('colorPicker');
rowsNumber = document.getElementById('inputHeight');
cellsNumber = document.getElementById('inputWidth');
pixelCanvas = document.getElementById('pixelCanvas');
form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(r) {
        pixelCanvas.innerHTML = '';
        r.preventDefault();
        makeGrid();
});
//choose color
pixelCanvas.addEventListener ('click', function(r){
    if (r.target.nodeName ==='TD') {
        r.target.style.backgroundColor = colorPicker.value;
    }
})
// Your code goes here!
function makeGrid() {
    //create cells
    for (let i = 0; i < rowsNumber.value; i++){
        const row = pixelCanvas.insertRow(0);
        for (let j = 0; j < cellsNumber.value; j++) {
            row.insertCell(0);

        }

    }

  
    }



