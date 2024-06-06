const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/* --------------------------------- Validação ------------------------------- */

/*  Validação Cadastrar  
const formCadastrar = document.getElementById("formCadastrar");
const razaoSocialCadastroInput = document.getElementById("razaoSocialCadastrar");
const cnpjInput = document.getElementById("cnpj");
const emailCadastroInput = document.getElementById("emailCadastro");
const senhaCadastroInput = document.getElementById("senhaCadastro");

/*  Validação entrar  
const formEntrar = document.getElementById("formEntrar");
const razaoSocialEntrarInput = document.getElementById("razaoSocialEntrar");
const emailEntrarInput = document.getElementById("emailEntrar");
const senhaEntrarInput = document.getElementById("senhaEntrar");

formCadastrar.addEventListener("submit",(event) => {
    event.preventDefault();

    if(razaoSocialCadastroInput.value === ""){
        alert("Por favor, preencha o campo Razão Social.");
        return;
    }
    if(cnpjInput.value === ""){
        alert("Por favor, preencha o campo CNPJ.");
        return;
    }
    if(emailCadastroInput.value === ""){
        alert("Por favor, preencha o campo Email.");
        return;
    }
    if(senhaCadastroInput.value === ""){
        alert("Por favor, preencha o campo Senha para gerar o seu cadastro.");
        return;
    }
});

formEntrar.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    if(razaoSocialEntrarInput.value === ""){
        alert("Por favor, preencha o campo Razão Social.");
        return;
    }
    if(emailEntrarInput.value === ""){
        alert("Por favor, preencha o campo Email.");
        return;
    }
    if(senhaEntrarInput.value === ""){
        alert("Por favor, preencha o campo Senha.");
        return;
    }
});

*/