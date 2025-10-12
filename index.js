function Cidade(nome, estado, sigla) {
    this.nome = nome;
    this.estado = estado;
    this.sigla = sigla;
}
var cidadesNaLista = [];

function novaCidade() {
    var cidade = document.getElementById('nome').value;
    var estado = document.getElementById('estado').value;
    var sigla = document.getElementById('sigla').value;

    if (cidade == "" || estado == "" || sigla == "") {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    const selectedElement = document.getElementById('selectCidade');
    const option = document.createElement('option');
    option.value = sigla;
    option.text = cidade;
    option.title = estado;

    selectedElement.add(option);

    document.getElementById('nome').value = "";
    document.getElementById('estado').value = "";
    document.getElementById('sigla').value = "";

    alert("Cidade cadastrada com sucesso!");
    console.log("Nova cidade cadastrada");
    console.log("Cidade: " + cidade);
    console.log("Estado: " + estado);
    console.log("Sigla: " + sigla);
}

function confirmarCidade() {

    var cidadeSelected = document.getElementById('selectCidade');

    var sigla = cidadeSelected.value;
    var nome = cidadeSelected.options[cidadeSelected.selectedIndex].text;
    var estado = cidadeSelected.options[cidadeSelected.selectedIndex].title;

    if (sigla == "default") {
        alert("É preciso selecionar uma cidade!");
        return;
    }

    let cidadeAtual = new Cidade(nome, estado, sigla);
    
    if (cidadesNaLista.length == 0) {
        cidadesNaLista.push(cidadeAtual);

    } else {
        for (let i = 0; i < cidadesNaLista.length; i++) {
            if (cidadesNaLista[i].nome == cidadeAtual.nome) {
                alert("'" + cidadesNaLista[i].nome + "'" + " já está cadastrada na lista!");
                document.getElementById('selectCidade').value = "default";
                return;
            }
        }
        cidadesNaLista.push(cidadeAtual);
    }

    adicionarCidadeTabela(cidadeAtual.nome, cidadeAtual.estado, cidadeAtual.sigla);
    document.getElementById('selectCidade').value = "default";

    alert("Cidade adicionada na lista com sucesso!");
}

function adicionarCidadeTabela(cidade, estado, sigla) {
    const tbody = document.querySelector("tbody");

    const novaLinha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    const colunaEstado = document.createElement("td");
    const colunaSigla = document.createElement("td");

    colunaNome.textContent = cidade;
    colunaEstado.textContent = estado;
    colunaSigla.textContent = sigla;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEstado);
    novaLinha.appendChild(colunaSigla);

    tbody.appendChild(novaLinha);
}