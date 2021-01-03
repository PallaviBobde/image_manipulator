let grayscale = document.querySelector("#grayscale");
let blur = document.querySelector("#blur");
let brightness= document.querySelector("#brightness");
let contrast = document.querySelector("#contrast");
let hue = document.querySelector("#hue");
// let invert = document.querySelector("#invert");
// let opacity = document.querySelector("#opacity");
// let saturate = document.querySelector("#saturate");
// let sepia  = document.querySelector("#sepia");

grayscale.value=0;
blur.value=0;
brightness.value=0;
contrast.value=0;
hue.value=0;
// invert.value=0;
// opacity.value=0;
// saturate.value=0;
// sepia.value=0;

let image = document.querySelector("img");

let select_btn = document.querySelector("button");
let image_url = document.querySelector("#image_url");

select_btn.addEventListener("click",()=>{
    let imageurl = image_url.value;
    if(imageurl){
        image.setAttribute("src",imageurl);
        console.log(imageurl);
        // image_url.value = "";
    }
})

let input_range = document.querySelectorAll(".input_range");
for(let i=0; i<input_range.length;i++){
    input_range[i].addEventListener("input",edit_image);
}

function edit_image(){
    image.style.filter = "grayscale(" + grayscale.value + "%) blur(" + blur.value + "px) brightness(" + brightness.value + "%) contrast(" + contrast.value + "%) hue-rotate(" + hue.value + "deg)";
    // console.log(saturate.value) ;
    // blur(" + blur.value + "px) brightness(" + brightness.value + "%) contrast(" + contrast.value + "%) hue-rotate(" + hue.value + "deg) invert(" + invert.value + "%) opacity(" + opacity.value + "%) saturate(" + saturate.value + "%) sepia(" + sepia.value + "%)";

}





// grayscale.addEventListener("input",()=>{
    // image.style.filter = "grayscale(" + grayscale.value + "px) blur(" + blur.value + "px) brightness(" + brightness.value + "%) contrast(" + contrast.value + "%) hue-rotate(" + hue.value + "deg) invert(" + invert.value + "%) opacity(" + opacity.value + "%) saturate(" + saturate.value + "%) sepia(" + sepia.value + "%)";
    // image.style.filter = "grayscale(" + grayscale.value + "%)";
// })
// blur.addEventListener("input",()=>{
    // console.log(blur.value)
    // image.style.filter = "blur(" + blur.value + "px)";
// })




// console.log(grayscale.value)