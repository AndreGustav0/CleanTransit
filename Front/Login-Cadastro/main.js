const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/* --------------------  verificão da Conta (precisamos de ajuda) ---------------------- */

document.addEventListener("DOMContentLoaded", function() {
    const url = "http://localhost:3000/contas";

    const formEntrar = document.getElementById("formEntrar");
    const razaoSocialEntrarInput = document.getElementById("razaoSocialEntrar");
    const senhaEntrarInput = document.getElementById("senhaEntrar");

    formEntrar.addEventListener("submit", function(event) {
        event.preventDefault();

        const razaoSocial = razaoSocialEntrarInput.value;
        const senha = senhaEntrarInput.value;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro na resposta da rede");
                }
                return response.json();
            })
            .then(dados => {
                const conta = dados.find(conta => 
                    conta.razaoSocial === razaoSocial && conta.senha === senha
                );

                if (conta) {
                    window.location.href = "/Front/Home/home.html";
                } else {
                    alert("Razão Social ou Senha incorretos.");
                }
            })
            .catch(error => {
                console.error("Erro ao buscar os dados:", error);
                alert("Erro ao buscar os dados. Verifique o console para mais detalhes.");
            });
    });

    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
});

/* --------------------------  Nós mesmo criamos  ------------------------------- */

function criarConta(){
    const url = "http://localhost:3000/contas"

    let razaoSocial = document.getElementById("razaoSocialCadastro").value
    let cnpj = document.getElementById("cnpjCadastro").value
    let email = document.getElementById("emailCadastro").value
    let senha = document.getElementById("senhaCadastro").value

    tipoConta = {
        razaoSocial: razaoSocial,
        cnpj: cnpj,
        email: email,
        senha: senha,
        veiculos: [
            {
                placa: "",
                marca: "",
                modelo: "",
                ano: "",
                cor: ""
            }
        ]
    }

    fetch(url, {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tipoConta)
    })
    .then(response => response.json())
    .then(data => alert("Cadastro realizado com sucesso!"))
    .catch(err => console.log("Erro: ", err))
}