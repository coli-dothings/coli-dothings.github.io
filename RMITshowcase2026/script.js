// Initializing & placing items
const grid = document.querySelector("#grid-container");
for (let i = 0; i < myData.MP.length; i++) {
	let item;
	switch (myData.MP[i].category) {
		// switch case also ignores non-rep data
		case "Interactive Installation":
			item = formatted("MPT", i, myData.MP[i].title, myData.MP[i].name, "interactive");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "App / Website Development":
			item = formatted("MPT", i, myData.MP[i].title, myData.MP[i].name, "app");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Audio Design":
			item = formatted("MPT", i, myData.MP[i].title, myData.MP[i].name, "audio");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Visual Design":
			item = formatted("MPT", i, myData.MP[i].title, myData.MP[i].name, "vis");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Audiovisual":
			item = formatted("MPT", i, myData.MP[i].title, myData.MP[i].name, "av");
			grid.insertAdjacentHTML("beforeend", item);
			break;
	}
}
for (let i = 0; i < myData.SP.length; i++) {
	let item;
	switch (myData.SP[i].category) {
		// switch case also ignores non-rep data
		case "Interactive Installation":
			item = formatted("SPT", i, myData.SP[i].title, myData.SP[i].name, "interactive");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "App / Website Development":
			item = formatted("SPT", i, myData.SP[i].title, myData.SP[i].name, "app");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Audio Design":
			item = formatted("SPT", i, myData.SP[i].title, myData.SP[i].name, "audio");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Visual Design":
			item = formatted("SPT", i, myData.SP[i].title, myData.SP[i].name, "vis");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Audiovisual":
			item = formatted("SPT", i, myData.SP[i].title, myData.SP[i].name, "av");
			grid.insertAdjacentHTML("beforeend", item);
			break;
	}
}
function formatted(type, i, title, name, category) {
	return `<div class="other item ${category}">
						<div class="circ"></div>
						<div
							class="img-container"
							style="background-image: url(img/${type}_Test1.jpg)"
						></div>
						<div class="name-plate">
							<p>${title}</p>
						</div>
					</div>`;
}

const item = document.querySelectorAll(".item");
console.log(`item count: ${item.length}`);

//================================================================================
// Item position shuffler
function shuffle(array) {
	for (let i = array.length; i > 0; ) {
		let rngIndex = Math.floor(Math.random() * i);
		i--;
		[array[i], array[rngIndex]] = [array[rngIndex], array[i]];
	}
}

function shuffleItem() {
	let order = Array.from({ length: item.length }, (e, x) => x);
	shuffle(order);

	for (let i = 0; i < item.length; i++) {
		item[i].style.order = order[i];
		if (item[i].classList.contains("pad")) {
			item[i].classList.remove("pad");
		}
		if (item[i].classList.contains("pad1")) {
			item[i].classList.remove("pad1");
		}
		if (item[i].classList.contains("pad2")) {
			item[i].classList.remove("pad2");
		}
		let padIndex = Math.floor(Math.random() * 9);
		switch (padIndex) {
			case 0:
			case 3:
			case 4:
				item[i].classList.add("pad");
				break;
			case 1:
			case 5:
				item[i].classList.add("pad1");
				break;
			case 2:
				item[i].classList.add("pad2");
				break;
			default:
				// Do nothing :3
				break;
		}
	}
}
shuffleItem(); // Shuffle once on intialization

const shuffleBtn = document.querySelector("#shuffle");
shuffleBtn.addEventListener("click", shuffleItem);

//================================================================================
// Item interaction
const branchContainer = document.querySelector("#branch-container");
// Get html component inside item
for (let i = 0; i < item.length; i++) {
	let imgDiv = item[i].querySelector(".img-container");
	let circ = item[i].querySelector(".circ");
	imgDiv.addEventListener("click", () => move(i, imgDiv, circ));
}

function move(i, imgDiv, circ) {
	if (!item[i].classList.contains("destroy")) {
    if (branchContainer.classList.contains("display")) {
      branchContainer.classList.remove("display");
    }
    item[i].classList.remove("other");
		item[i].classList.add("centering");
		item[i].style.transform = "none";
    circ.classList.add("big");

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
			// Wait for circ to hide screen below
			let destroy = document.querySelectorAll(".destroy");
			for (let x = 0; x < destroy.length; x++) {
				// Shuffle z-index to ensure nothing clips weird
				destroy[x].classList.add("other");
				destroy[x].classList.remove("destroy");
			}
			let other = document.querySelectorAll(".other");
			for (let y = 0; y < other.length; y++) {
				other[y].classList.add("invis");
			}

			item[i].classList.add("destroy");
			item[i].classList.remove("centering");
		}, 1000);
    setTimeout(() => {
      updateBgMapColor(i);
      circ.classList.add("invis");
      branchContainer.classList.add("display");
    }, 1800)
	}
}
function updateBgMapColor(i) {
  if (item[i].classList.contains("interactive")) {
    	document.documentElement.style.setProperty("--bg-map", "var(--interactive)");
  }
  if (item[i].classList.contains("app")) {
    	document.documentElement.style.setProperty("--bg-map", "var(--app)");
  }
  if (item[i].classList.contains("audio")) {
    	document.documentElement.style.setProperty("--bg-map", "var(--audio)");
  }
  if (item[i].classList.contains("vis")) {
    	document.documentElement.style.setProperty("--bg-map", "var(--vis)");
  }
  if (item[i].classList.contains("av")) {
    	document.documentElement.style.setProperty("--bg-map", "var(--av)");
  }
}
function updateBranch(itemCount, ) {

}
function updateInfo(i) {}

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetPage);
function resetPage() {
  if (branchContainer.classList.contains("display")) {
      branchContainer.classList.remove("display");
    }
	document.documentElement.style.setProperty("--bg-map", "var(--bg-info)");
	let destroy = document.querySelectorAll(".destroy");
	for (let i = 0; i < destroy.length; i++) {
		let circ = destroy[i].querySelector(".circ");
		destroy[i].classList.remove("destroy");
		destroy[i].style.transform = "none";
		circ.classList.remove("big");
		console.log(`reseted ${i}`);
	}

  for (let x = 0; x < item.length; x++) {
    let circ = item[x].querySelector(".circ");
    if (circ.classList.contains("invis")) {
      circ.classList.remove("invis");
    }
    if (item[x].classList.contains("invis")) {
      item[x].classList.remove("invis");
    }
  }
}
