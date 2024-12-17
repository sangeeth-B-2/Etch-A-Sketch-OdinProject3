let parentDiv = document.getElementById('container');
let inputSumit = document.getElementById('sumit');
let inputBox = document.getElementById('inputBox');
let favColor = document.getElementById('favColor');
let resetBtn = document.getElementById('resetBtn');



let colorName = favColor.value || '#ff0000';
let n = inputBox.value || 4;

favColor.addEventListener('input', () => {
    colorName = favColor.value;
    console.log(colorName);

})

inputSumit.addEventListener('click', () => {

    n = inputBox.value || 4;
    colorName = favColor.value || '#ff0000';

    parentDiv.innerHTML = "";
    let childSize = (parentDiv.clientWidth / n);
    console.log(childSize);
    
    //looping for grid
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= n; i++) {
            let childDiv = document.createElement('div');
            parentDiv.appendChild(childDiv);
            childDiv.classList.add('grid');
            childDiv.style.width = childSize + 'px';
            childDiv.style.height = childSize + 'px';
            childDiv.addEventListener('click', (event) => {
                if (colorName) {
                    event.target.style.backgroundColor = colorName;
                }
            
            });
            
        }
    }
    

});



resetBtn.addEventListener('click', () => {
    parentDiv.innerHTML = '';
    inputBox.value = '';
});