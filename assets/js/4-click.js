const part1 = document.getElementById("part1");
const part2 = document.getElementById("part2");
const part3 = document.getElementById("part3");
const part4 = document.getElementById("part4");

part1.style.height = "200px";
part1.style.width = "200px";
part1.style.backgroundColor = "red";

part2.style.height = "200px";
part2.style.width = "200px";
part2.style.backgroundColor = "purple";

part3.style.height = "200px";
part3.style.width = "200px";
part3.style.backgroundColor = "navy";

part4.style.height = "200px";
part4.style.width = "200px";
part4.style.backgroundColor = "aquamarine";


document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
  } else if (event.key === "s") {
    color = "salmon";
  } else if (event.key === "d") {
    color = "peru";
  }
});

part1.addEventListener("click", function () {
    part1.style.backgroundColor = color;
  });
  
  part2.addEventListener("click", function () {
    part2.style.backgroundColor = color;
  });
  
  part3.addEventListener("click", function (r) {
    part3.style.backgroundColor = color;
  });
  
  part4.addEventListener("click", function () {
    part4.style.backgroundColor = color;
  });
