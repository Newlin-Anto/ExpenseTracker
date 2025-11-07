// Simple client-side enhancements

document.addEventListener("DOMContentLoaded", () => {
  const deleteLinks = document.querySelectorAll("a.delete-link");

  deleteLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      if (!confirm("Are you sure you want to delete this expense?")) {
        event.preventDefault();
      }
    });
  });

  // Optional: Simple category filter
  const filterInput = document.getElementById("filterInput");
  if (filterInput) {
    filterInput.addEventListener("keyup", () => {
      const filter = filterInput.value.toLowerCase();
      const rows = document.querySelectorAll("table tbody tr");
      rows.forEach(row => {
        const category = row.children[1].textContent.toLowerCase();
        row.style.display = category.includes(filter) ? "" : "none";
      });
    });
  }
});
