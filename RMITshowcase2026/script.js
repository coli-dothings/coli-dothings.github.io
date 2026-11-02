// Initializing & placing items

// Item interaction
const item = document.querySelectorAll(".item");

for (let i = 0; i < item.length; i++) {
	// data queries here(?)

	// visual
	let imgDiv = item[i].querySelector(".img-container");
	let circ = item[i].querySelector(".circ");
	imgDiv.addEventListener("click", () => move(i, imgDiv, circ));
}

function move(i, imgDiv, circ) {
	if (!item[i].classList.contains("centering")) {
		circ.classList.add("big");
		item[i].classList.add("centering");

		let rect = imgDiv.getBoundingClientRect();
		// Find imgDiv's current center point
		let elementCenterX = rect.left + rect.width / 2;
		let elementCenterY = rect.top + rect.height / 2;

		let viewportCenterX = 0;
		let viewportCenterY = 0;

		if (window.innerWidth > 787) {
			//console.log("PC");
			viewportCenterX = window.innerWidth / 3.3;
			viewportCenterY = window.innerHeight / 2;
		} else {
			//console.log("mobile");
			viewportCenterX = window.innerWidth / 2;
			viewportCenterY = window.innerHeight / 3.3;
		}

		// Calc the required travel distance
		const translateX = viewportCenterX - elementCenterX;
		const translateY = viewportCenterY - elementCenterY;

		// Translation work as follow: The box is not actually moved from its position in doc
		// When transform translate: XY > 0 => The box will move to new pos
		// When traslate = 0 it effectively reset & move back to its original pos
		item[i].style.transform = `translate(${translateX}px, ${translateY}px)`;
	} else {
		// TEMP RESET ONLY
		circ.classList.remove("big");
		item[i].classList.remove("centering");
		item[i].style.transform = "none";
	}
}