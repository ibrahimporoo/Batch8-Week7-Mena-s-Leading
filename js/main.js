// Inifinite Slider
let allImgs = document.querySelectorAll(".auto-slider .imgs-holder img");
let normX = -190;
setInterval(function(){
	moveImgs();
}, 2500)

function moveImgs() {
	allImgs.forEach(img => img.style.transform = `translateX(${normX}px)`);
	normX -= 190;
	if(-(allImgs.length / 2 * 190) === normX) {
		normX = 190;
	}
}
// ----------------

let changedImg = document.getElementById("changedImg");

function changeImg(src) {
	changedImg.src = src;
	// console.log(src);
	// console.log(typeof src);
	// changedImg.src = src;
}