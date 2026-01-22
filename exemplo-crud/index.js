function Cidade(id, nome, estado, sigla) {
    this.id = id;
    this.nome = nome;
    this.estado = estado;
    this.sigla = sigla;
}
var cidadesNaLista = [];
var idObjCidade = 1;

function novaCidade() {

    var nomeCidade = document.getElementById('nome').value;
    var estado = document.getElementById('estado').value;
    var sigla = document.getElementById('sigla').value;

    if (nomeCidade == "" || estado == "" || sigla == "") {
        alertMessage('danger', 'Atenção!', 'Todos os campos devem ser preenchidos!');
        return;
    }
    
    const cidadeAtual = new Cidade(idObjCidade, nomeCidade, estado, sigla);

    if (cidadesNaLista.find(cidade => cidade.nome == cidadeAtual.nome 
                                    && cidade.estado == cidadeAtual.estado 
                                    && cidade.sigla == cidadeAtual.sigla)) {
        alertMessage('danger', 'Atenção!', 'A cidade ja foi cadastrada!');
        return;
    }

    cidadesNaLista.push(cidadeAtual);
    adicionarCidadeTabela(cidadeAtual);
    idObjCidade++;

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

function adicionarCidadeTabela(cidadeAtual) {
    const tbody = document.querySelector("tbody");

    const novaLinha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    const colunaEstado = document.createElement("td");
    const colunaSigla = document.createElement("td");
    const colunaAcoes = document.createElement("td");

    colunaNome.textContent = cidadeAtual.nome;
    colunaEstado.textContent = cidadeAtual.estado;
    colunaSigla.textContent = cidadeAtual.sigla;

    colunaAcoes.innerHTML = `<i class="bi bi-trash-fill" id="${cidadeAtual.id}" data-bs-toggle="tooltip" title="Excluir"></i>
                             <i class="bi bi-pencil-fill" id="${cidadeAtual.id}" data-bs-toggle="tooltip" title="Editar"></i>`;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEstado);
    novaLinha.appendChild(colunaSigla);
    novaLinha.appendChild(colunaAcoes);

    tbody.appendChild(novaLinha);
}

addEventListener("click", function (event) {
    if (event.target.classList.contains("bi-trash-fill")) {
        deleteCidade(event);
    } else if (event.target.classList.contains("bi-pencil-fill")) {
        editCidade(event);
    }
});

function deleteCidade(event) {

    let id = Number(event.target.id);
    let cidade = cidadesNaLista.find(cidade => cidade.id == id);

    let confirmacao = confirm(`Tem certeza que deseja excluir a cidade '${cidade.nome}'? Esta ação não pode ser desfeita.`);

    if (confirmacao) {
        let index = cidadesNaLista.indexOf(cidade);
        cidadesNaLista.splice(index, 1);
        event.target.parentNode.parentNode.remove();
        alertMessage('success', 'Sucesso!', 'Cidade removida.');

    } else {
        alertMessage('info', 'Informação!', 'A exclusão foi cancelada.');
    }
}

function editCidade(event) {

    let id = event.target.id;
    let cidade = cidadesNaLista.find(cidade => cidade.id == id);
    
    document.getElementById('nome').value = cidade.nome;
    document.getElementById('estado').value = cidade.estado;
    document.getElementById('sigla').value = cidade.sigla;

    document.getElementById('btnSalvar').textContent = 'Editar';

    let index = cidadesNaLista.indexOf(cidade);
    cidadesNaLista.splice(index, 1);
    event.target.parentNode.parentNode.remove();

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