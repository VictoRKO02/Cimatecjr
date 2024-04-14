function pularLinhas(n) {
    for (let i = 0; i < n; i++) {
        document.write('<br>');
    }
}

/*FAQ*/
document.addEventListener('DOMContentLoaded', function () {
    const perguntasFAQ = document.querySelectorAll('.questao-do-faq');

    perguntasFAQ.forEach(function (pergunta) {
        pergunta.addEventListener('click', function () {
            const resposta = this.nextElementSibling;
            this.parentNode.classList.toggle('active');
            if (resposta.style.display === 'block') {
                resposta.style.display = 'none';
                this.querySelector('.mais-menos-toggle').textContent = '+';
            } else {
                resposta.style.display = 'block';
                this.querySelector('.mais-menos-toggle').textContent = '-';
            }
        });
    });
});
/*Código para gerar o arquivo txt das informações geradas em cadastra empresa*/
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cadastroForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Coleta dados do formulário
        const nomeProprietario = document.getElementById("nomeesobrenome").value;
        const email = document.getElementById("email").value;
        const telefoneContato = document.getElementById("telefoneparacontato").value;
        const senha = document.getElementById("password").value;
        const confirmarSenha = document.getElementById("confirmpassword").value;
        const cep = document.getElementById("CEP").value;
        const estado = document.getElementById("estado").value;
        const cidade = document.getElementById("cidade").value;
        const cnpj = document.getElementById("cnpj").value;
        const novidadesEmail = document.getElementById("novidadesEmail").checked;

        // Cria uma string com os dados do formulário
        const dadosFormulario = `
            Nome e Sobrenome: ${nomeProprietario}
            Email: ${email}
            Telefone para Contato: ${telefoneContato}
            Senha: ${senha}
            Confirmar Senha: ${confirmarSenha}
            CEP: ${cep}
            Estado: ${estado}
            Cidade: ${cidade}
            CNPJ: ${cnpj}
            Novidades por Email: ${novidadesEmail ? 'Sim' : 'Não'}
        `;

        // Criando um Blob (objeto binário) para salvar os dados em um arquivo de texto (txt)
        const blob = new Blob([dadosFormulario], { type: "text/plain" });

        // Cria um elemento <a> para realizar o download
        const linkDownload = document.createElement("a");
        linkDownload.href = URL.createObjectURL(blob);
        linkDownload.download = "dados_cadastro.txt";

        // Simula o clique no link para iniciar o download
        linkDownload.click();
    });
});
