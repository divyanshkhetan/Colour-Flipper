let colours = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var element = document.getElementById("currentColor");
var btn = document.getElementById("btn");

// console.log(colours.length);
btn.addEventListener("click", function(){
    let temp = '#';
    for(let i = 0; i < 6; ++i){
        var randomNumber = Math.round(15 * Math.random());
        temp += colours[randomNumber];
    }
    // document.getElementById("section1").style.transition = all 0.5s ease-in-out;
    document.getElementById("section1").style.backgroundColor = temp;
    document.getElementById("currentColor").textContent = temp;
});