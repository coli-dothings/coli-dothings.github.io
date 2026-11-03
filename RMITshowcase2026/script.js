// Initializing & placing items

// Item interaction
const item = document.querySelectorAll(".item");

for (let i = 0; i < item.length; i++) {
	let imgDiv = item[i].querySelector(".img-container");
	let circ = item[i].querySelector(".circ");
	imgDiv.addEventListener("click", () => move(i, imgDiv, circ));
}

function move(i, imgDiv, circ) {
	if (!item[i].classList.contains("destroy")) {
		circ.classList.add("big");
		item[i].classList.add("centering");

		let rect = imgDiv.getBoundingClientRect();
		// Find imgDiv's center point
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
		// When traslate = 0 it effectively reset & move back to its original pos
		item[i].style.transform = `translate(${translateX}px, ${translateY}px)`;

		// Set destroy class to be removed when next item move
		setTimeout(() => {
			item[i].classList.add("destroy");
			item[i].classList.remove("centering");
		}, 1000)
	} 
}
