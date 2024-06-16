const url = "http://localhost:3000/contas";
const idConta = new URLSearchParams(window.location.search).get('id'); // para pegar o id da conta a partir da URL

// Função para adicionar um novo veículo a uma conta específica
async function adicionarVeiculo(idConta, novoVeiculo) {
    try {
        // Primeiro, pegue a conta pelo ID
        let response = await fetch(`${url}/${idConta}`);
        let conta = await response.json();

        if (conta) {
            // Adicionar o novo veículo ao array "veiculos" da conta
            conta.veiculos.push(novoVeiculo);

            // Atualizar a conta no servidor
            response = await fetch(`${url}/${idConta}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ veiculos: conta.veiculos })
            });

            if (response.ok) {
                alert("Veículo cadastrado com sucesso!")
            } else {
                alert("Erro ao cadastrar!")
            }
        } else {
            alert("Conta não encontrada!")
        }
    } catch (error) {
        alert("Erro ao adicionar veículo:", error);
    }
}

// Função para tratar a submissão do formulário
function addVeiculo(event) {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    // Capturar os dados do formulário
    let novoVeiculo = {
        modelo: document.getElementById('modeloCad').value,
        ano: document.getElementById('anoCad').value,
        placa: document.getElementById('placaCad').value,
        cor: document.getElementById('corCad').value,
        marca: document.getElementById('marcaCad').value
    };

    // Adicionar o novo veículo à conta com o ID especificado
    adicionarVeiculo(idConta, novoVeiculo);
}