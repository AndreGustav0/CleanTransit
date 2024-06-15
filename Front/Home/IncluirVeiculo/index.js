const url = "http://localhost:3000/contas"
const id = new URLSearchParams(window.location.search) // para pegar o id da conta 

function addVeiculo(event) {
    event.preventDefault();

    let marcaCad = document.getElementById("marcaCad").value;
    let modeloCad = document.getElementById("modeloCad").value;
    let placaCad = document.getElementById("placaCad").value;
    let corCad = document.getElementById("corCad").value;
    let anoCad = document.getElementById("anoCad").value;

    const novoVeiculo = {
        marca: marcaCad,
        modelo: modeloCad,
        placa: placaCad,
        cor: corCad,
        ano: anoCad
    };

    fetch(`${url}/${id.get("id")}`, {
            method: "PUT", // ou "PUT", dependendo da sua implementação no JSON Server
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ veiculos: contas.veiculos })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar a conta');
        }
        return response.json();
    })
    .then(data => {
        alert("Veículo cadastrado com sucesso!");
    })
    .catch(err => {
        console.error("Erro ao cadastrar veículo:", err);
        alert("Erro! Veículo não foi cadastrado.");
    });
}

//  fazer um get da conta -> criar o veículo -> adicionar na conta -> fazer o put
