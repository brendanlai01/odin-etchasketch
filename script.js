const container = document.querySelector('#container');

function createGrid(numRow){
    for(i = 0; i < numRow * numRow; i++){
        let gridDiv = document.createElement('div');
        gridDiv.style.width = "calc(100%/" + numRow + ")";
        gridDiv.style.height =  "calc(100%/" + numRow + ")";
        addListener(gridDiv);
        container.appendChild(gridDiv);
    }
}

function addListener(div){
    div.addEventListener('mouseover', () =>{
        div.style.backgroundColor = 'black';
    })
}

createGrid(16);