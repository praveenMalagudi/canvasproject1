const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");
canvas.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.arc(x, y,  30, 0, 2 * Math.PI);
  c.stroke();
});
