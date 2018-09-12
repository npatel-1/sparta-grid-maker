document.addEventListener('DOMContentLoaded', function(){
  // Add code here
  const board = document.getElementById('board');
  const rows = Number (prompt('How many rows?'));
  const columns = Number (prompt('how many columns?'));

  for (i = 0; i < rows; i++) {
    const body = document.createElement("div");
    body.setAttribute('class', 'row');
    board.appendChild(body);
    body.addEventListener('click', () => {
      body.style.backgroundColor = '#657';
    });
    for (k = 0; k < columns; k++) {
      const body = document.createElement('div');
      body.setAttribute('class', 'col');
      board.appendChild(body);
      body.addEventListener('click', () => {
        body.style.backgroundColor = getRandomColor();
      })

    }
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }




});
