document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let isValid = true; 
    let fields = ["nome", "email", "senha", "tipo-usuario"];
  
    fields.forEach(function(field) {
      let input = document.getElementById(field);
      let errorMsg = input.nextElementSibling;
  
      if (input.value.trim() === "" || (field === "tipo-usuario" && input.value === "")) {
        input.classList.add("error-input"); 
        errorMsg.style.display = "block"; 
        isValid = false;
      } else {
        input.classList.remove("error-input"); 
        errorMsg.style.display = "none"; 
      }
    });
  
    if (isValid) {
      alert("Formulário enviado com sucesso!");
    }
  });
  