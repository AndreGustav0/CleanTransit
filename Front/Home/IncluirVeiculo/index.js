const url = "http://localhost:3000/contas"
const id = new URLSearchParams(window.location.search) // para pegar o id da conta 
const userId = params.get('id');

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

    fetch(`${url}${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoVeiculo)
    })
    .then(response => response.json())
    .then(data => alert("Veículo cadastrado com Sucesso!"))
    .catch(err => alert("Erro! Veículo não foi cadastrado."))

}
