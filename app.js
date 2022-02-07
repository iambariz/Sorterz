//Variables
const buttons = document.querySelectorAll(".project-btn");
const items = document.querySelectorAll(".sorterz-item");
let running = false;
let lastActive = buttons[0];
let curActive = undefined;

//Event listener
buttons.forEach(function (button) {
	button.addEventListener("click", function (e) {
		if (running == false) {
			curActive = e.target;
			dissAppear(this.dataset.id);
		}
	});
});

//Dissappear function connecter
function dissAppear(stays) {
	if (stays == "all") {
		items.forEach(function (item) {
			if (item.classList.contains("hidden")) {
				fadeIn(item);
			}
			//For all, you have to include here as well
			changeClassList();
		});
	} else {
		items.forEach(function (item) {
			if (!item.classList.contains(stays)) {
				fadeOut(item);
			}
			if (item.classList.contains(stays) && item.classList.contains("hidden")) {
				fadeIn(item);
			}
		});
	}
}

//Fadeout func
function fadeOut(item) {
	item.classList.add("hidden");
	running = true;
	changeClassList();
	setTimeout(function () {
		item.style.display = "none";
		running = false;
	}, 800);
	item.style.transform = "scale(0)";
	item.style.opacity = "0";
}

//Fadein func
function fadeIn(item) {
	item.classList.remove("hidden");
	item.style.display = "flex";
	setTimeout(function () {
		item.style.transform = "scale(1)";
		item.style.opacity = "100";
	}, 0);
}

//Class toggler
function changeClassList() {
	if (lastActive != curActive) {
		curActive.classList.add("active");
		lastActive.classList.remove("active");
		setTimeout(function () {
			lastActive = curActive;
		}, 100);
	}
}
