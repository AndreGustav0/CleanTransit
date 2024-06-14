async function carregarUsuario() {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');
    const url = "http://localhost:3000/contas";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro na resposta da rede");
        }

        const usuarios = await response.json();
        const usuario = usuarios.find(u => u.id == userId);

        if (usuario) {
            document.getElementById('user-info').innerHTML = `
                <h1>Bem-vindo, ${usuario.razaoSocial}</h1>
                <p>CNPJ: ${usuario.cnpj}</p>
                <p>Email: ${usuario.email}</p>
            `;
        } else {
            document.getElementById('user-info').innerHTML = '<p>Usuário não encontrado.</p>';
        }
    } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        alert("Erro ao carregar os dados do usuário. Verifique o console para mais detalhes.");
    }
}

window.onload = carregarUsuario;
