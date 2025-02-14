document.getElementById("serviceRequestForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita envio se houver erro

    let isValid = true;
    let fields = ["nome", "email", "telefone", "tipo-servico", "descricao", "data"];

    fields.forEach(function(field) {
        let input = document.getElementById(field);
        let errorMsg = input.nextElementSibling;

        if (input.value.trim() === "" || (field === "tipo-servico" && input.value === "")) {
            input.classList.add("error-input");
            errorMsg.style.display = "block";
            isValid = false;
        } else {
            input.classList.remove("error-input");
            errorMsg.style.display = "none";
        }
    });

    if (isValid) {
        alert("Solicitação enviada com sucesso!");
    }
});
