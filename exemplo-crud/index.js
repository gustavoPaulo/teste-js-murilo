function Cidade(nome, estado, sigla) {
    this.nome = nome;
    this.estado = estado;
    this.sigla = sigla;
}
var cidadesNaLista = [];
var idObj = 1;

function novaCidade() {
    var cidade = document.getElementById('nome').value;
    var estado = document.getElementById('estado').value;
    var sigla = document.getElementById('sigla').value;

    if (cidade == "" || estado == "" || sigla == "") {
        alertMessage('danger', 'Atenção!', 'Todos os campos devem ser preenchidos!');
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

    if (document.getElementById('btnSalvar').textContent == 'Editar') {
        alertMessage('success', 'Sucesso!', 'Cidade atualizada.');
        document.getElementById('btnSalvar').textContent = 'Salvar';

    } else {
        alertMessage('success', 'Sucesso!', 'Nova cidade cadastrada.');
    }
    
}

function confirmarCidade() {

    var cidadeSelected = document.getElementById('selectCidade');

    var sigla = cidadeSelected.value;
    var nome = cidadeSelected.options[cidadeSelected.selectedIndex].text;
    var estado = cidadeSelected.options[cidadeSelected.selectedIndex].title;

    if (sigla == "default") {
        alertMessage('info', 'Atenção!', 'É preciso selecionar uma cidade!');
        return;
    }

    let cidadeAtual = new Cidade(nome, estado, sigla);
    
    if (cidadesNaLista.length == 0) {
        cidadesNaLista.push(cidadeAtual);

    } else {
        for (let i = 0; i < cidadesNaLista.length; i++) {
            if (cidadesNaLista[i].nome == cidadeAtual.nome) {
                alertMessage('info', 'Atenção!', "'" + cidadesNaLista[i].nome + "'" + " já está cadastrada na lista!");
                document.getElementById('selectCidade').value = "default";
                return;
            }
        }
        cidadesNaLista.push(cidadeAtual);
    }

    adicionarCidadeTabela(cidadeAtual.nome, cidadeAtual.estado, cidadeAtual.sigla);
    document.getElementById('selectCidade').value = "default";

    alertMessage('success', 'Sucesso!', 'Cidade adicionada na lista.');
}

function adicionarCidadeTabela(cidade, estado, sigla) {
    const tbody = document.querySelector("tbody");

    const novaLinha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    const colunaEstado = document.createElement("td");
    const colunaSigla = document.createElement("td");
    const colunaAcoes = document.createElement("td");

    colunaNome.textContent = cidade;
    colunaEstado.textContent = estado;
    colunaSigla.textContent = sigla;

    colunaAcoes.innerHTML = `<i class="bi bi-trash-fill" id="${idObj}" data-bs-toggle="tooltip" title="Excluir"></i>
                             <i class="bi bi-pencil-fill" id="${idObj}" data-bs-toggle="tooltip" title="Editar"></i>`;
    idObj++;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEstado);
    novaLinha.appendChild(colunaSigla);
    novaLinha.appendChild(colunaAcoes);

    tbody.appendChild(novaLinha);
}

addEventListener("click", function (event) {
    if (event.target.classList.contains("bi-trash-fill")) {
        let id = event.target.id;
        let cidade = cidadesNaLista[(id == 1 ? 0 : id - 1)];

        let confirmacao = confirm(`Tem certeza que deseja excluir a cidade '${cidade.nome}'? Esta ação não pode ser desfeita.`);

        if (confirmacao) {
            deleteCidade(event, cidade);
        } else {
            alertMessage('info', 'Informação!', 'A exclusão foi cancelada.');
        }
    } else if (event.target.classList.contains("bi-pencil-fill")) {
        editCidade(event);
    }
});

function deleteCidade(event, cidade) {
    let index = cidadesNaLista.indexOf(cidade);
    cidadesNaLista.splice(index, 1);
    event.target.parentNode.parentNode.remove();
    alertMessage('success', 'Sucesso!', 'Cidade removida da lista');
}

function editCidade(event) {

    let id = event.target.id;
    let cidade = cidadesNaLista[(id == 1 ? 0 : id - 1)];
    
    document.getElementById('nome').value = cidade.nome;
    document.getElementById('estado').value = cidade.estado;
    document.getElementById('sigla').value = cidade.sigla;

    document.getElementById('btnSalvar').textContent = 'Editar';

    let index = cidadesNaLista.indexOf(cidade);
    cidadesNaLista.splice(index, 1);
    event.target.parentNode.parentNode.remove();
    
    const optionParaRemover = document.querySelector(`option[value="${cidade.sigla}"]`);
    optionParaRemover.remove();

    idObj--;

    alertMessage('info', 'Aviso!', `Editando a cidade ${cidade.nome}`);
}

function alertMessage(alertClass, tipo, mensagem) {
    const alertMessageHtml = `
    <div class="alert alert-${alertClass} alert-dismissible fade show" role="alert" id="div-alert-message">
        <strong>${tipo}</strong> ${mensagem}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    document.getElementById('campo-mensagem').innerHTML = alertMessageHtml;

    setTimeout(function() {
        document.getElementById("div-alert-message").style.display = "none";
    }, 5000);
}