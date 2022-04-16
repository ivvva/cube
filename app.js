const object = document.getElementById("container");
let cubeRotation = false;

object.addEventListener("mousedown", e => {
  cubeRotation = true;
});

object.addEventListener("mousemove", e => {
  if (cubeRotation === true) {
    rotateCube(e);
  }
});
object.addEventListener("mouseup", e => {
  cubeRotation = false;
});

function rotateCube(e) {
    object.style.transform = `rotateX(${e.clientX}deg)rotateY(${e.clientY}deg)`;
}





 