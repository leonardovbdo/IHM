document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const tableRows = document.querySelectorAll("tbody tr");

    // Função para filtrar a tabela com base no input de busca
    function filterTable() {
        const searchText = searchInput.value.toLowerCase();
        
        tableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            row.style.display = rowText.includes(searchText) ? "" : "none";
        });
    }

    // Evento de clique no botão de busca
    searchBtn.addEventListener("click", filterTable);

    // Permite filtrar enquanto o usuário digita
    searchInput.addEventListener("input", filterTable);

    // Adicionando evento aos botões de cancelar
    document.querySelectorAll(".btn-cancel").forEach(button => {
        button.addEventListener("click", function () {
            const row = this.closest("tr");
            row.querySelector(".status").textContent = "Cancelado";
            row.querySelector(".status").classList.remove("pending", "completed");
            row.querySelector(".status").classList.add("canceled");
            row.querySelector(".status").style.color = "red";
            this.remove(); // Remove o botão de cancelar após a ação
        });
    });
});
