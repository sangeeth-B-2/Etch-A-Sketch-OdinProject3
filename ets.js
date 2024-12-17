let parentDiv = document.getElementById('container');
let inputSumit = document.getElementById('sumit');
let inputBox = (document.getElementById('inputBox'));
let favColor = document.getElementById('favColor');

let colorName;

favColor.addEventListener('input', () => {
    colorName = favColor.value;
    console.log(colorName);

})


inputSumit.addEventListener('click', () => {
    let n = inputBox.value;

    parentDiv.innerHTML = "";
    let childSize = (parentDiv.clientWidth) / n;
    console.log(childSize);
    //looping for grid
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= n; i++) {

            let childDiv = document.createElement('div');
            childDiv.classList.add('grid');
            childDiv.style.width = childSize + 'px';
            childDiv.style.height = childSize + 'px';
            parentDiv.appendChild(childDiv);
        

        }
    }
});


let childGrid = parentDiv.children;

Array.from(childGrid).forEach(child => {
    child.addEventListener('click', (event) => {
        if (colorName) {

            event.target.style.backgroundColor = colorName;
        }
    });
});