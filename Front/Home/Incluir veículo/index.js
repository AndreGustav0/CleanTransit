const url = "http://localhost:3000/contas"

 function addVeiculo(){
    
    let marcaCad = document.getElementById("marcaCad");
    let modeloCad = document.getElementById("modeloCad");
    let placaCad = document.getElementById("placaCad");
    let corCad = document.getElementById("corCad");
    let anoCad = document.getElementById("anoCad");

    tipoCad = {
        marca: marca,
        modelo: modelo,
        placa: placa,
        cor: cor,
        ano: ano
    }

    fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: tipoCad
    })
    .then(response => response.json)
    .then(data => alert("Veículo cadastrado!"))
    .catch(err => alert("Erro ao cadastrar"))
 }