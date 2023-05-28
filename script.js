// Function to update the clock
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = timeString;
   
  }

  // Function to change the background color every 20 seconds
  function changeBackground() {
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    var randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  }

  // Initial call to update the clock
  updateClock();

  // Call updateClock function every second
  setInterval(updateClock, 1000);

  // Initial call to change the background
  changeBackground();

  // Call changeBackground function every 20 seconds
  setInterval(changeBackground, 20000);