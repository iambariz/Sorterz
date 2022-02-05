const buttons = document.querySelectorAll(".project-btn");

const items = document.querySelectorAll(".sorterz-item");

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		dissAppear(this.dataset.id);
	});
});

function dissAppear(stays) {
	items.forEach(function (item) {
		console.log(item);
		if (!item.classList.contains(stays)) {
			item.style.display = "none";
		}
		if (item.classList.contains(stays)) {
			item.style.display = "flex";
		}
	});
}
