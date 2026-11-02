// Test code - functional on first item only
// Todo: query selectot all - item. Find children img & circ
// All event listener to img - then the following move func
const imgDiv = document.querySelector(".img-container");
const item = document.querySelector(".item");
const circ = document.querySelector(".circ");
let isCentered = false;

imgDiv.addEventListener("click", move);

function move() {
	if (!isCentered) {
		isCentered = true;
        circ.classList.add("big");
		item.classList.add("centering");
		// Get current bounding rectangle of the item relative to the viewport
		const rect = imgDiv.getBoundingClientRect();

		// Find the element's current center point
		let elementCenterX = rect.left + rect.width / 2;
		let elementCenterY = rect.top + rect.height / 2;

		let viewportCenterX = 0;
		let viewportCenterY = 0;

		if (window.innerWidth > 787) {
			console.log("PC");
			viewportCenterX = window.innerWidth / 3.3;
			viewportCenterY = window.innerHeight / 2;
		} else {
			console.log("mobile");
			viewportCenterX = window.innerWidth / 2;
			viewportCenterY = window.innerHeight / 3.3;
		}

		// Calc the required travel distance
		const translateX = viewportCenterX - elementCenterX;
		const translateY = viewportCenterY - elementCenterY;

		// Translation work as follow: The box is not actually moved from its position in doc
		// When transform translate: XY > 0 => The box will move to new pos
		// When traslate = 0 it effectively reset & move back to its original pos
		item.style.transform = `translate(${translateX}px, ${translateY}px)`;
		console.log("translate " + translateX, translateY);
	} else {
		circ.classList.remove("big");
		isCentered = false;
		item.style.transform = "none";
	}
}
