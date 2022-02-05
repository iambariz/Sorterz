const buttons = document.querySelectorAll(".project-btn");

const items = document.querySelectorAll(".sorterz-item");

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		dissAppear(this.dataset.id);
	});
});

function dissAppear(stays) {
	items.forEach(function (item) {
		if (!item.classList.contains(stays)) {
			fadeOut(item);
		}
		if (item.classList.contains(stays) && item.classList.contains("hidden")) {
			fadeIn(item);
		}
	});
}

function fadeOut(item) {
	item.classList.add("hidden");
	setTimeout(function () {
		item.style.display = "none";
	}, 800);
	item.style.transform = "scale(0)";
	item.style.opacity = "0";
}

function fadeIn(item) {
	item.classList.remove("hidden");
	setTimeout(function () {
		item.style.display = "flex";
	}, 0);
	item.style.transform = "scale(1)";
	item.style.opacity = "100";
}
