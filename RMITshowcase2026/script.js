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
							class="img-container ${type}"
							style="background-image: url(img/${type}_Test1.jpg)"
						></div>
						<div class="name-plate">
							<p id="title">${title}</p>
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
const branchPos = document.querySelectorAll(".branch");
const line = document.querySelectorAll(".b-line");

// Initilialize new items with click event
function initItem(newItem) {
	for (let i = 0; i < newItem.length; i++) {
		let imgDiv = newItem[i].querySelector(".img-container");
		let circ = newItem[i].querySelector(".circ");
		let title = newItem[i].querySelector("#title").textContent;
		imgDiv.addEventListener("click", () => move(newItem[i], imgDiv, circ, title));
	}
}
initItem(item);

function move(newItem, imgDiv, circ, title) {
	if (!newItem.classList.contains("destroy")) {
		if (branchContainer.classList.contains("display")) {
			branchContainer.classList.remove("display");
		}
		newItem.classList.remove("other");
		newItem.classList.add("centering");
		newItem.style.transform = "none";
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
		newItem.style.transform = `translate(${translateX}px, ${translateY}px)`;

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
			newItem.classList.add("destroy");
			newItem.classList.remove("centering");
		}, 1000);

		setTimeout(() => {
			updateBgMapColor(newItem);
			circ.classList.add("invis");
			branchContainer.classList.add("display");
		}, 1200);

		//=============================================================
		// set & get key data from data.js
		// Look throught data indexes. If a key match send the whole data
		if (imgDiv.classList.contains("MPT")) {
			for (let a = 0; a < myData.MP.length; a++) {
				if (myData.MP[a].title == title) {
					updateBranchStudent(myData.MP[a]);
				}
			}
		} else if (imgDiv.classList.contains("SPT")) {
			for (let b = 0; b < myData.SP.length; b++) {
				if (myData.SP[b].title == title) {
					updateBranchStudent(myData.SP[b]);
				}
			}
		}
		//
	}
}

function updateBranchStudent(pData) {
	if (pData.representative == "Myself") {
		let memCount = pData.member_count;
		let branchArr = [1, 2, 3, 4, 5, 6];
		console.log(`member count: ${memCount}`);
		switch (memCount) {
			case 1:
				populateStudent(branchArr, pData.mem1);
				break;
			case 2:
				populateStudent(branchArr, pData.mem1, pData.mem2);
				break;
			case 3:
				populateStudent(branchArr, pData.mem1, pData.mem2, pData.mem3);
				break;
			case 4:
				populateStudent(branchArr, pData.mem1, pData.mem2, pData.mem3, pData.mem4);
				break;
		}
	}
}
function populateStudent(arr, mem1, mem2, mem3, mem4) {
  console.log(arr);
	for (let i = 0; i < myData.Person.length; i++) {
		let sID = myData.Person[i].sID;
		if (sID == mem1 || sID == mem2 || sID == mem3 || sID == mem4) {
			console.log(myData.Person[i].sID);
			console.log(myData.Person[i].name);
			let rngIndex = Math.floor(Math.random() * arr.length);
			let rngBranch = arr.splice(rngIndex, 1)[0];
			console.log(rngBranch);
			console.log(arr);
		}
	}
}

function updateBgMapColor(newItem) {
	if (newItem.classList.contains("interactive")) {
		document.documentElement.style.setProperty("--bg-map", "var(--interactive)");
	}
	if (newItem.classList.contains("app")) {
		document.documentElement.style.setProperty("--bg-map", "var(--app)");
	}
	if (newItem.classList.contains("audio")) {
		document.documentElement.style.setProperty("--bg-map", "var(--audio)");
	}
	if (newItem.classList.contains("vis")) {
		document.documentElement.style.setProperty("--bg-map", "var(--vis)");
	}
	if (newItem.classList.contains("av")) {
		document.documentElement.style.setProperty("--bg-map", "var(--av)");
	}
}

//==============================================================================
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
		destroy[i].classList.add("other");
		destroy[i].classList.remove("destroy");
		destroy[i].style.transform = "none";
		circ.classList.remove("big");
		console.log("reset");
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
