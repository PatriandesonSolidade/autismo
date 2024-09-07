function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let termoBusca = campoPesquisa.toLowerCase();

    document.body.querySelectorAll('.resultado').forEach(element => element.remove());

    let profissionaisFiltrados = profissionais.filter(profissional => {
        return profissional.nome.toLowerCase().includes(termoBusca) ||
               profissional.especialidade.toLowerCase().includes(termoBusca) ||
               profissional.cidade.toLowerCase().includes(termoBusca);
    });

    if (profissionaisFiltrados.length > 0) {
        profissionaisFiltrados.forEach(profissional => {
            let divResultado = document.createElement('div');
            divResultado.classList.add('resultado');
            divResultado.innerHTML = `
                <h2>${profissional.nome}</h2>
                <p>Especialidade: ${profissional.especialidade}</p>
                <p>Cidade: ${profissional.cidade}</p>
                <p>Contato: ${profissional.contato}</p>
            `;
            document.body.appendChild(divResultado); // Aqui está a alteração
        });
    } else {
        // Exibir mensagem de erro diretamente no corpo
        let msgErro = document.createElement('p');
        msgErro.textContent = "Nenhum profissional encontrado.";
        document.body.appendChild(msgErro);
    }
}