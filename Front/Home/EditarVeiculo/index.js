const url = "http://localhost:3000/contas";
const idConta = new URLSearchParams(window.location.search).get('id'); // para pegar o id da conta a partir da URL

// Função para buscar um veículo por placa
async function buscarVeiculoPorPlaca(placa) {
    try {
        // Primeiro, pegue a conta pelo ID
        let response = await fetch(`${url}/${idConta}`);
        let conta = await response.json();

        if (conta) {
            // Encontrar o veículo no array "veiculos" da conta utilizando a placa
            let veiculo = conta.veiculos.find(veiculo => veiculo.placa === placa);

            if (veiculo) {
                // Preencher os campos do formulário com os dados do veículo encontrado
                document.getElementById('marcaEdit').value = veiculo.marca;
                document.getElementById('modeloEdit').value = veiculo.modelo;
                document.getElementById('corEdit').value = veiculo.cor;
                document.getElementById('anoEdit').value = veiculo.ano;

                // Atualizar o valor do campo placa no formulário
                document.getElementById('placaEdit').value = veiculo.placa;
            } else {
                console.log("Veículo não encontrado!");
                // Limpar os campos do formulário
                limparCamposFormulario();
            }
        } else {
            console.log("Conta não encontrada!");
        }
    } catch (error) {
        console.error("Erro ao buscar veículo:", error);
    }
}

// Função para editar um veículo de uma conta específica utilizando a placa
async function editarVeiculoPorPlaca(idConta, placa, novosDados) {
    try {
        // Primeiro, pegue a conta pelo ID
        let response = await fetch(`${url}/${idConta}`);
        let conta = await response.json();

        if (conta) {
            // Encontrar o índice do veículo no array "veiculos" da conta utilizando a placa
            let index = conta.veiculos.findIndex(veiculo => veiculo.placa === placa);

            if (index !== -1) {
                // Atualizar os dados do veículo
                Object.assign(conta.veiculos[index], novosDados);

                // Atualizar a conta no servidor
                response = await fetch(`${url}/${idConta}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ veiculos: conta.veiculos })
                });

                if (response.ok) {
                    alert("Veículo editado com sucesso!");
                } else {
                    alert("Erro ao atualizar a conta!");
                }
            } else {
                alert("Veículo não encontrado!");
            }
        } else {
            alert("Conta não encontrada!");
        }
    } catch (error) {
        alert("Erro ao editar veículo:", error);
    }
}

// Função para limpar os campos do formulário
function limparCamposFormulario() {
    document.getElementById('marcaEdit').value = '';
    document.getElementById('modeloEdit').value = '';
    document.getElementById('corEdit').value = '';
    document.getElementById('anoEdit').value = '';
}

// Função para tratar a submissão do formulário para editar veículo
function editVeiculo(event) {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    // Capturar os novos dados do veículo
    let placa = document.getElementById('placaEdit').value;
    let novosDados = {
        marca: document.getElementById('marcaEdit').value,
        modelo: document.getElementById('modeloEdit').value,
        cor: document.getElementById('corEdit').value,
        ano: document.getElementById('anoEdit').value
    };

    // Editar o veículo da conta com o ID especificado e a placa do veículo
    editarVeiculoPorPlaca(idConta, placa, novosDados);
}

// Adicionar evento de alteração no campo placa para buscar o veículo automaticamente
document.getElementById('placaEdit').addEventListener('change', function(event) {
    let placa = event.target.value;
    if (placa) {
        buscarVeiculoPorPlaca(placa);
    } else {
        limparCamposFormulario();
    }
});