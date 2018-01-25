// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// define variable elem to be the 3rd input or "submit" from input form sizePicker (first input is 0) -

var elem = document.getElementById('sizePicker')[2];

/* create 'click' event listener function on input variable 'elem' (or form "submit" input), that
  - defines variables for canvas rows and colums and assigns them input values using their ID's,
  - defines canvas variable 'grid' and clears it (if there's already old canvas) with while loop,
  - calls function makeGrid using input rows and colums */

elem.addEventListener('click', function (e) {
  e.preventDefault();
  var rows = document.getElementById('input_height').value;
  var columns = document.getElementById('input_width').value;
  var grid = document.getElementById('pixel_canvas');
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  };
  makeGrid(rows, columns);
}, false);


function makeGrid(height, width) {

  // define variables for table and table body
  var grid = document.getElementById('pixel_canvas');
  var tblBody = document.createElement('tbody');

  /* loop inside another loop that together create table based on input rows
  (tr) and columns (td)
  Please note that table creation is done 'backwards', i.e. cells are appended to
  rows, then rows are appended to table body, then table body is appended to
  table (grid)
  */
  for (r = 0; r < height; r++) {
    var row = document.createElement('tr');
    for (l = 0; l < width; l++) {
      var cell = document.createElement('td');
      // every 'td' element gets assigned class "listener"
      cell.setAttribute('class', 'listener');
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  grid.appendChild(tblBody);

  // create 'click' event listener on table 'td' elements that calls function changeColor
  var elements = document.getElementsByClassName('listener');
  var i;
  for (i = 0; i < elements.length; i++) {
   elements[i].addEventListener('click', changeColor);
  }

  // function that changes background color of the 'clicked' 'td' element
  function changeColor() {
      var gridColor = document.getElementById('colorPicker').value;
      this.style.backgroundColor = gridColor;
  }
};

/* Please note that event listener on 'td' elements and function changeColor
are inside function makeGrid */
