const url = "http://localhost:3000/contas";
const idConta = new URLSearchParams(window.location.search).get('id'); // para pegar o id da conta a partir da URL

// Função para remover um veículo de uma conta específica utilizando a placa
async function removerVeiculoPorPlaca(idConta, placa) {
    try {
        // Primeiro, pegue a conta pelo ID
        let response = await fetch(`${url}/${idConta}`);
        let conta = await response.json();

        if (conta) {
            // Remover o veículo do array "veiculos" da conta utilizando a placa
            conta.veiculos = conta.veiculos.filter(veiculo => veiculo.placa !== placa);

            // Atualizar a conta no servidor
            response = await fetch(`${url}/${idConta}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ veiculos: conta.veiculos })
            });

            if (response.ok) {
                alert("Veículo removido com sucesso!");
            } else {
                console.log("Erro ao atualizar a conta!");
            }
        } else {
            alert("Conta não encontrada!");
        }
    } catch (error) {
        console.log("Erro ao remover veículo:", error);
    }
}

// Função para tratar a submissão do formulário para remover veículo
function removeVeiculo(event) {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    // Capturar a placa do veículo a ser removido
    let placa = document.getElementById('placaRemover').value;

    // Remover o veículo da conta com o ID especificado
    removerVeiculoPorPlaca(idConta, placa);
}
