const container = document.querySelector('#container');
const gridButton = document.querySelector('#changeGrid');
const resetButton = document.querySelector('#reset');

function createGrid(numRow){
    for(i = 0; i < numRow * numRow; i++){
        let gridDiv = document.createElement('div');
        gridDiv.style.width = "calc(100%/" + numRow + ")";
        gridDiv.style.height =  "calc(100%/" + numRow + ")";
        gridDiv.setAttribute('id', 'gridSquare');
        addListener(gridDiv);
        container.appendChild(gridDiv);
    }
}

function addListener(div){
    div.addEventListener('mouseover', () =>{
        div.style.backgroundColor = 'black';
    })
}

function resetCanvas(){
    let square = document.querySelectorAll('#container, #gridSquare');
    
    square.forEach((item) => {
        item.style.backgroundColor = 'white';
    });
}

resetButton.addEventListener('click', () =>{
    resetCanvas();
});

createGrid(16);