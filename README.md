THIS IS A PROJECT LED BY THEODINPROJECT.
ETCH-A-SKETCH:
1. This project includes creating child <div> elements inside a container parent <div> in an N x N grid.
2. after getting the number of grid value(N), loops create <div>'s and adds classList using an addEventListener.
3. I also created a color palette using 'type: color'.and used a GetElementById to get the color input from the user.
4. After choosing the color you should be able to select each grid and it changes the color you picked.

 CHALLENGES:
1. Grid Creation

*Set `parent <div>` to 400px x 400px for easy `child <div>` size calculation.
*Used nested loops to create a dynamic grid where the number of items is the same horizontally and vertically.
*Avoided borders on `child <div>` as they affected size calculations.
*Cleared previous grid with `parentDiv.innerHTML = ""` before adding new items.

2. Color Change

*Added event listener to color input to change the background color of the clicked `child <div>` using event.target.
*Both grid creation and color change logic are within the same function/block.

3. Hover Effect

* Used `:hover` and `transition` properties to smoothly change the color of the grid item on hover.

4. Reset Function

*Reset button clears the grid (parentDiv.innerHTML = "") and sets the background color to black (#000000).
