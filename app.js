const buttons = document.querySelectorAll(".project-btn");

const items = document.querySelectorAll(".sorterz-item");

let running = false;
let lastActive = 0;
let curActive = undefined;

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		if (running == false) {
			console.log("in");
			dissAppear(this.dataset.id);
		}
	});
});

function dissAppear(stays) {
	if (stays == "all") {
		items.forEach(function (item) {
			if (item.classList.contains("hidden")) {
				fadeIn(item);
			}
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

function fadeOut(item) {
	item.classList.add("hidden");
	running = true;
	changeClassList(add, buttons[0]);
	setTimeout(function () {
		item.style.display = "none";
		running = false;
	}, 800);
	item.style.transform = "scale(0)";
	item.style.opacity = "0";
}

function fadeIn(item) {
	item.classList.remove("hidden");
	item.style.display = "flex";
	setTimeout(function () {
		item.style.transform = "scale(1)";
		item.style.opacity = "100";
	}, 0);
}

function changeClassList() {
	curActive.classList.add("active");
	lastActive.classList.remove("active");
}
