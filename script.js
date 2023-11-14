const container = document.querySelector('#container');

function createGrid(numRow){
    for(i = 0; i < numRow * numRow; i++){
        let gridDiv = document.createElement('div');
        gridDiv.style.cssText = 'width: calc(100%/16); height: calc(100/16)%;';
        container.appendChild(gridDiv);
    }
}

createGrid(16);