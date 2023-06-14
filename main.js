const form = document.getElementById('form-agenda');
const nomeContato = [];
const numeroContato = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
});

function adicionalinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomeContato.includes(inputNomeContato.value)) {
        alert(`O nome ${inputNomeContato.value} já foi inserido!`)
    } else {
        nomeContato.push(inputNomeContato.value);
        numeroContato.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function formatarTelefone() {
    var tel = document.getElementById("numero-contato").value;
    tel = tel.replace(/\D/g, '');
            
    tel = tel.slice(0, 11);
    
    if (tel.length <= 10) {
        tel = tel.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else {
        tel = tel.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    document.getElementById("numero-contato").value = tel;
}