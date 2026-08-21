const niveisFonte = [100, 110, 120, 130];
let nivelAtual = 0;

function carregarAcessibilidade() {
    const nivelSalvo = localStorage.getItem('tamanhoFonteIndex');
    if (nivelSalvo !== null) {
        nivelAtual = parseInt(nivelSalvo);
    }
    aplicarTamanhoFonte();
}

function alterarTamanhoFonte(passo) {
    nivelAtual += passo;
    
    if (nivelAtual < 0) nivelAtual = 0;
    if (nivelAtual >= niveisFonte.length) nivelAtual = niveisFonte.length - 1;
    
    aplicarTamanhoFonte();
    localStorage.setItem('tamanhoFonteIndex', nivelAtual);
}

function aplicarTamanhoFonte() {
    const porcentagem = niveisFonte[nivelAtual] + '%';
    document.documentElement.style.fontSize = porcentagem;
}

carregarAcessibilidade();