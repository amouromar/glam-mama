document.addEventListener("DOMContentLoaded", function () {
  // Load initial content
  htmx.ajax("GET", "home.html", "#content");

  // Get elements
  const sidebar = document.getElementById("sidebar");
  const sidebarContent = document.getElementById("sidebarContent");
  const burgerMenu = document.getElementById("burger-menu");

  // Open sidebar
  burgerMenu.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
    sidebarContent.classList.add("sidebar-enter-active");
    sidebarContent.classList.remove("sidebar-leave-active");
  });

  // Close sidebar when clicking outside
  sidebar.addEventListener("click", (e) => {
    if (e.target === sidebar) {
      closeSidebar();
    }
  });

  // Close sidebar when clicking on links
  const links = sidebar.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeSidebar();
    });
  });

  function closeSidebar() {
    sidebarContent.classList.add("sidebar-leave-active");
    sidebarContent.classList.remove("sidebar-enter-active");
    setTimeout(() => {
      sidebar.classList.add("hidden");
    }, 300);
  }
});
