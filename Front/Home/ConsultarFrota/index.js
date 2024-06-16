const url = "http://localhost:3000/contas";
const idConta = new URLSearchParams(window.location.search).get('id'); // para pegar o id da conta a partir da URL

async function consultarTodos() {
    let bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = "";
    let listVeiculos = [];

    try {
        let response = await fetch(`${url}/${idConta}`);
        if (!response.ok) {
            throw new Error("Erro na resposta da rede");
        }
        let conta = await response.json();
        listVeiculos = conta.veiculos;
    } catch (err) {
        console.log(err);
    }

    listVeiculos.forEach(veiculo => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${veiculo.placa}</td>
            <td>${veiculo.marca}</td>
            <td>${veiculo.modelo}</td>
            <td>${veiculo.cor}</td>
            <td>${veiculo.ano}</td>
        `;
        bodyTable.appendChild(linha);
    });
}

document.addEventListener('DOMContentLoaded', consultarTodos); // Chama a função ao carregar a página