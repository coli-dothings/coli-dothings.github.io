// Initializing & placing items

// Item interaction
const item = document.querySelectorAll(".item");

for (let i = 0; i < item.length; i++) {
	let imgDiv = item[i].querySelector(".img-container");
	let circ = item[i].querySelector(".circ");
	imgDiv.addEventListener("click", () => move(i, imgDiv, circ));
}

function move(i, imgDiv, circ) {
	if (!item[i].classList.contains("centering")) {
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
		setTimeout(() => {
			item[i].classList.add ("destroy");
			item[i].classList.remove("centering")
		}, 1000)
	} else {
		// TEMP RESET ONLY
		circ.classList.remove("big");
		item[i].classList.remove("centering");
		item[i].style.transform = "none";
	}
}


		// set & get key data from data.js
		// Look throught data indexes. If a key match send the whole data
		if (imgDiv.classList.contains("MPT")) {
			for (let a = 0; a < myData.MP.length; a++) {
				if (myData.MP[a].title == title) {
					console.log("data update MP!");
					updateBranchStudent(myData.MP[a], "MPT");
				}
			}
		} else if (imgDiv.classList.contains("SPT")) {
			for (let b = 0; b < myData.SP.length; b++) {
				if (myData.SP[b].title == title) {
					console.log("data update SP!");
					updateBranchStudent(myData.SP[b], "SPT");
				}
			}
		}

const branchArr = [1, 2, 3, 4, 5, 6];
function updateBranchProject(pData, type) {
	if (pData.representative == "Myself") {
    let branchItem = `<div class="absolute-wrapper">
          <div class="other item ${pData.category}">
						<div class="circ"></div>
						<div
							class="img-container ${type}"
							style="background-image: url(img/${type}_${pData.name}.jpg)"
						></div>
						<div class="name-plate">
							<p id="title">${pData}</p>
						</div>
					</div></div>`;

		let rngIndex = Math.floor(Math.random() * branchArr.length);
		let rngBranch = branchArr.splice(rngIndex, 1)[0];
		console.log(rngBranch);
		console.log(branchArr);
	}
}

// sData = myData.Person[i]
let branchStudent = `<div class="absolute-wrapper">
          <div class="other item student">
						<div class="circ"></div>
						<div
							class="img-container PFP"
							style="background-image: url(img/PFP_${sData.name}.jpg)"
						></div>
						<div class="name-plate">
							<p id="title">${sData.display_name}</p>
						</div>
					</div></div>`;