// Initializing & placing items
// When using real data, replace "_Test1.jpg" with "_${name}.webp"
const grid = document.querySelector("#grid-container");
for (let i = 0; i < myData.MP.length; i++) {
	let item;
	switch (myData.MP[i].category) {
		// switch case also ignores non-rep data
		case "Interactive Installation":
			item = formatted("MPT", myData.MP[i].title, myData.MP[i].name, "interactive");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "App / Website Development":
			item = formatted("MPT", myData.MP[i].title, myData.MP[i].name, "app");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Audio Design":
			item = formatted("MPT", myData.MP[i].title, myData.MP[i].name, "audio");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Visual Design":
			item = formatted("MPT", myData.MP[i].title, myData.MP[i].name, "vis");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Audiovisual":
			item = formatted("MPT", myData.MP[i].title, myData.MP[i].name, "av");
			grid.insertAdjacentHTML("beforeend", item);
			break;
	}
}
for (let i = 0; i < myData.SP.length; i++) {
	let item;
	switch (myData.SP[i].category) {
		// switch case also ignores non-rep data
		case "Interactive Installation":
			item = formatted("SPT", myData.SP[i].title, myData.SP[i].name, "interactive");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "App / Website Development":
			item = formatted("SPT", myData.SP[i].title, myData.SP[i].name, "app");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Audio Design":
			item = formatted("SPT", myData.SP[i].title, myData.SP[i].name, "audio");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Visual Design":
			item = formatted("SPT", myData.SP[i].title, myData.SP[i].name, "vis");
			grid.insertAdjacentHTML("beforeend", item);
			break;
		case "Audiovisual":
			item = formatted("SPT", myData.SP[i].title, myData.SP[i].name, "av");
			grid.insertAdjacentHTML("beforeend", item);
			break;
	}
}
function formatted(type, title, name, category) {
	return `<div class="other item ${category}">
						<div class="circ"></div>
						<div
							class="img-container ${type}"
							style="background-image: url(img/${type}_${name}.webp)"
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
		let padIndex = Math.floor(Math.random() * 8);
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
      case 6:
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
const tempWrapper = document.querySelector("#temp-wrapper");
let currentBlockedBranch = 0;

// Initilialize new items with click event
function initItem(newItem) {
	for (let i = 0; i < newItem.length; i++) {
		let imgDiv = newItem[i].querySelector(".img-container");
		let circ = newItem[i].querySelector(".circ");
		let title = newItem[i].querySelector("#title").textContent;
		imgDiv.addEventListener("click", () => move(newItem[i], imgDiv, circ, title));
		// Easter Egg
		if (title == "Mai Anh Vo") {
			newItem[i].querySelector("#title").classList.add("rainbow");
      newItem[i].querySelector("#specialization").classList.add("rainbow")
		}
	}
}
initItem(item);

function move(newItem, imgDiv, circ, title) {
	if (!newItem.classList.contains("destroy")) {
    // if item is branch item
		let absoluteWrapper = newItem.parentElement;
		if (absoluteWrapper.classList.contains("branch-remove")) {
			absoluteWrapper.classList.remove("branch-remove");
			branchContainer.parentNode.appendChild(absoluteWrapper);
			tempWrapper.style.zIndex = 2;
      let str = absoluteWrapper.classList.toString();
      currentBlockedBranch = parseInt(str[str.length - 1]);
		}

		newItem.classList.remove("other");
		newItem.classList.add("centering");
		newItem.style.transform = "none";
		// Small delay so appendChild & fixed pos have abs time to execute first
		setTimeout(() => {
			circ.classList.add("big");
		}, 100);

		let rect = circ.getBoundingClientRect();
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
			// Wait for circ to hide screen below & remove PREV items, then add class
			removeItem();
			newItem.classList.add("destroy");
			newItem.classList.remove("centering");

			// Same to absolute-wrapper in branch
			removeBranch();
			if (absoluteWrapper.classList.contains("absolute-wrapper")) {
				absoluteWrapper.classList.add("branch-remove");
			}
			tempWrapper.removeAttribute("style");
		}, 1000);

		setTimeout(() => {
			// remove bg circ for branch visibility
			circ.classList.add("invis");
			updateBgMapColor(newItem);

			// set & get key data from data.js
			// Look throught data indexes. If a key match send the whole data
			if (!newItem.classList.contains("student")) {
				// is MP or SP
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
			}
			// Item is student
			else {
				for (let c = 0; c < myData.Person.length; c++) {
					if (myData.Person[c].display_name == title) {
						updateBranchProject(myData.Person[c]);
					}
				}
			}
			branchContainer.classList.add("display");
		}, 1200);
	} else {
    // Middle item
    console.log("mid");
  }
}

function updateBranchStudent(pData) {
	if (pData.representative == "Myself" || pData.is_group == "No") {
		let memCount = pData.member_count;
		let branchArr = [0, 1, 2, 3, 4, 5];
		console.log(`member count: ${memCount}`);
		// max mem count is 4 based on survey...
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
      default:
        console.error("student number error");
		}
	}
}
function populateStudent(arr, mem1, mem2, mem3, mem4) {
	for (let i = 0; i < myData.Person.length; i++) {
		let sID = myData.Person[i].sID;
		let sName = myData.Person[i].display_name;
		let sSpecial = myData.Person[i].specialization;
		let name = myData.Person[i].name;
		if (sID == mem1 || sID == mem2 || sID == mem3 || sID == mem4) {
			let branchStudent = `<div class="absolute-wrapper branch-remove">
          <div class="other item student">
						<div class="circ"></div>
						<div
							class="img-container PFP"
							style="background-image: url(img/PFP_${name}.webp)"
						></div>
						<div class="name-plate">
							<p id="title">${sName}</p>
              <p id="specialization">[${sSpecial}]</p>
						</div>
					</div></div>`;
			branchContainer.insertAdjacentHTML("beforeend", branchStudent);
		}
	}
	initBranch(arr);
}

function updateBranchProject(sData) {
	// Check for exactly 1 Mp & 1 SP per student
	let sID = sData.sID;
	if (sID != null) {
		for (let x = 0; x < myData.MP.length; x++) {
			if (
				sID == myData.MP[x].mem1 ||
				sID == myData.MP[x].mem2 ||
				sID == myData.MP[x].mem3 ||
				sID == myData.MP[x].mem4
			) {
				let title = myData.MP[x].title;
				let category = myData.MP[x].category;
				let branchProject = formatBranchProject("MPT", title, sData.name, category);
				branchContainer.insertAdjacentHTML("beforeend", branchProject);
			}
		}
		for (let x = 0; x < myData.SP.length; x++) {
			if (
				sID == myData.SP[x].mem1 ||
				sID == myData.SP[x].mem3 ||
				sID == myData.SP[x].mem3 ||
				sID == myData.SP[x].mem4
			) {
				let title = myData.SP[x].title;
				let category = myData.SP[x].category;
				let branchProject = formatBranchProject("SPT", title, sData.name, category);
				branchContainer.insertAdjacentHTML("beforeend", branchProject);
			}
		}
    let arr = [0, 1, 2, 3, 4, 5];
    initBranch(arr);
	} else {
		console.error("Null sID in updateBranchProject()");
	}
}
function formatBranchProject(type, title, name, category) {
  let categoryClass;
  switch (category) {
    case "Interactive Installation":
			categoryClass = "interactive";
			break;
		case "App / Website Development":
			categoryClass = "app";
			break;
		case "Audio Design":
			categoryClass = "audio";
			break;
		case "Visual Design":
			categoryClass = "vis";
			break;
		case "Audiovisual":
			categoryClass = "av";
			break;
	}

  return `<div class="absolute-wrapper branch-remove">
          <div class="other item ${categoryClass}">
						<div class="circ"></div>
						<div
							class="img-container ${type}"
							style="background-image: url(img/${type}_${name}.webp)"
						></div>
						<div class="name-plate">
							<p id="title">${title}</p>
						</div>
					</div></div>`;
}

function initBranch(arr) {
	let branchItem = branchContainer.querySelectorAll(".item");
	initItem(branchItem);
	console.log("init branch");

  // remove branchPos that was occupied by last clicked item from arr
  arr.splice(currentBlockedBranch, 1);

	for (let x = 0; x < branchItem.length; x++) {
		let wrapper = branchItem[x].parentElement;
		let rngIndex = Math.floor(Math.random() * arr.length);
		let rngBranch = arr.splice(rngIndex, 1)[0];

		let computedStyles = window.getComputedStyle(branchPos[rngBranch]);
		let topPos = computedStyles.getPropertyValue("top");
		let leftPos = computedStyles.getPropertyValue("left");
		wrapper.style.top = topPos;
		wrapper.style.left = leftPos;
    wrapper.classList.add(rngBranch);

		if (line[rngBranch].classList.contains("invis")) {
			line[rngBranch].classList.remove("invis");
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
	if (newItem.classList.contains("student")) {
		document.documentElement.style.setProperty("--bg-map", "var(--bg-info)");
	}
}

//==============================================================================
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetPage);

function removeBranch() {
	if (branchContainer.classList.contains("display")) {
		branchContainer.classList.remove("display");
	}
	let branchRemove = tempWrapper.querySelectorAll(".branch-remove");
	for (let y = 0; y < branchRemove.length; y++) {
		branchRemove[y].remove();
	}
	for (let x = 0; x < line.length; x++) {
		if (!line[x].classList.contains("invis")) {
			line[x].classList.add("invis");
		}
	}
}

function removeItem() {
	let destroy = document.querySelectorAll(".destroy");
	for (let i = 0; i < destroy.length; i++) {
		let circ = destroy[i].querySelector(".circ");
		destroy[i].classList.add("other");
		destroy[i].classList.remove("destroy");
		destroy[i].style.transform = "none";
		circ.classList.remove("big");
	}
	let other = document.querySelectorAll(".other");
	for (let y = 0; y < other.length; y++) {
		other[y].classList.add("invis");
	}
}

function resetPage() {
	removeBranch();
	document.documentElement.style.setProperty("--bg-map", "var(--bg-info)");
	let destroy = document.querySelectorAll(".destroy");
	for (let i = 0; i < destroy.length; i++) {
		let circ = destroy[i].querySelector(".circ");
		destroy[i].classList.add("other");
		destroy[i].classList.remove("destroy");
		circ.classList.remove("big");
		circ.classList.remove("invis");
	}
	tempWrapper.removeAttribute("style");
	for (let x = 0; x < item.length; x++) {
		item[x].style.transform = "none";
		if (item[x].classList.contains("invis")) {
			item[x].classList.remove("invis");
		}
		// catch for destroy error
		let circ = item[x].querySelector(".circ");
		if (circ.classList.contains("invis")) {
			circ.classList.remove("invis");
			console.log("spare circ invis");
		}
		if (circ.classList.contains("big")) {
			circ.classList.remove("big");
			console.log("spare big");
		}
	}
	console.log("reset");
}

//============================================================
const infoPage = document.querySelector("#info-page");
const pullTab = document.querySelector("#pull-tab");
function pull() {
	if (!infoPage.classList.contains("hide-info")) {
		infoPage.classList.add("hide-info");
		pullTab.classList.add("hide-info");
		pullTab.textContent = "[ ]";
	} else {
		infoPage.classList.remove("hide-info");
		pullTab.classList.remove("hide-info");
		pullTab.textContent = "[X]";
	}
}