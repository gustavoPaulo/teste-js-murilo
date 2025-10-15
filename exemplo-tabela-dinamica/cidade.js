function novaCidade() {
    // Recupera os valores cidade, estado e sigla do ID de cada input
    // que existe no HTML
    var cidade = document.getElementById('nome').value;
    var estado = document.getElementById('estado').value;
    var sigla = document.getElementById('sigla').value;

    // Verifica se os campos foram preenchidos
    if (cidade == "" || estado == "" || sigla == "") {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    // Pega o corpo da tabela
    const tbody = document.querySelector("tbody");

    // Cria uma nova linha na tabela
    const novaLinha = document.createElement("tr");

    // Cria as colunas
    const colunaNome = document.createElement("td");
    const colunaEstado = document.createElement("td");
    const colunaSigla = document.createElement("td");

    // Preenche as colunas com os valores digitados
    colunaNome.textContent = cidade;
    colunaEstado.textContent = estado;
    colunaSigla.textContent = sigla;

    // Adiciona as colunas na linha (novaLinha)
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEstado);
    novaLinha.appendChild(colunaSigla);

    // Adiciona a linha na tabela
    tbody.appendChild(novaLinha);

    alert("Cidade cadastrada com sucesso!");
}

function isVogal() {
  // A expressão regular verifica se o caractere é uma vogal
  // A flag 'i' torna a verificação insensível a maiúsculas e minúsculas
  // Expressão regular -> /[aeiou]/i.test(letra)

  // Recupera o valor do input
  var letra = document.getElementById('frase1').value;

  // Verifica se o caractere digitado é uma vogal e retorna true ou false
  return /[aeiou]/i.test(letra);
}