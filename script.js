const button = document.getElementById("button");
const backgroundColor = document.getElementById("color_fliper");
const rgbColor = document.getElementById("rbg");


button.addEventListener("click", function () {
   let red = Math.floor(Math.random() * 256);
   let green = Math.floor(Math.random() * 256);
   let blue = Math.floor(Math.random() * 256);
   let color = "rgb(" + red + "," + green + "," + blue + ")";
   backgroundColor.style.backgroundColor = color;
   rgbColor.textContent = color = "rgb(" + red + "," + green + "," + blue + ")";
   console.log(result)
});