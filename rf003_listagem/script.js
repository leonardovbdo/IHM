document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const tableRows = document.querySelectorAll("tbody tr");

    function filterTable() {
        const searchText = searchInput.value.toLowerCase();
        
        tableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            row.style.display = rowText.includes(searchText) ? "" : "none";
        });
    }

    searchBtn.addEventListener("click", filterTable);

    searchInput.addEventListener("input", filterTable);

    document.querySelectorAll(".btn-cancel").forEach(button => {
        button.addEventListener("click", function () {
            const row = this.closest("tr");
            row.querySelector(".status").textContent = "Cancelado";
            row.querySelector(".status").classList.remove("pending", "completed");
            row.querySelector(".status").classList.add("canceled");
            row.querySelector(".status").style.color = "red";
            this.remove();
        });
    });
});
