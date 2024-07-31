document.addEventListener("DOMContentLoaded", function () {
  htmx.ajax("GET", "home.html", "#content");
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3000);
}

function showPopup() {
  document.getElementById("order-confirm-popup").classList.remove("hidden");
}

function hidePopup() {
  document.getElementById("order-confirm-popup").classList.add("hidden");
}
