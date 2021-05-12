let colours = ["Tomato","OrangeRed","Plum","SeaShell","Moccasin","LawnGreen", "Orange", "DodgerBlue", "MediumSeaGreen","Gray","SlateBlue","Aquamarine","Cornsilk","LightSalmon"];

// document.getElementsByTagName("button").addEventListener("click", change());
// console.log(colours.length);

document.getElementById("btn").addEventListener("click", function(){
    let randomNumber = Math.round(12 * Math.random());
    document.getElementById("currentColor").textContent = colours[randomNumber];
    // document.getElementById("section1").style.transition = all 0.5s ease-in-out;
    document.getElementById("section1").style.backgroundColor = colours[randomNumber];
});
