// ============================================
// SISTEMA SIMPLES - SENHA: voa25
// ============================================

const SENHA_CORRETA = 'voa25';

// Elementos
const campo = document.getElementById('accessCode');
const btnBlaze = document.getElementById('btnBlaze');
const btnJonbet = document.getElementById('btnJonbet');
const loadingMsg = document.getElementById('loading-message');
const errorMsg = document.getElementById('error-message');
const iframeContainer = document.getElementById('iframe-container');
const iframe = document.getElementById('login-iframe');
const btnFechar = document.getElementById('close-iframe');
const vagasSpan = document.getElementById('vagas-restantes');

// Função de login
function fazerLogin(url) {
    const senha = campo.value.trim();
    
    if (!senha) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = '❌ Digite o código de acesso!';
        return;
    }
    
    if (senha === SENHA_CORRETA) {
        // Senha correta!
        loadingMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        
        setTimeout(() => {
            iframe.src = url;
            iframeContainer.style.display = 'block';
            loadingMsg.style.display = 'none';
            campo.value = '';
        }, 500);
        
    } else {
        // Senha incorreta
        errorMsg.style.display = 'block';
        errorMsg.textContent = '❌ Código incorreto! Tente novamente.';
        campo.value = '';
        campo.focus();
    }
}

// Event listeners
btnBlaze.addEventListener('click', (e) => {
    e.preventDefault();
    fazerLogin('https://blaze1.space/pt/games/double');
});

btnJonbet.addEventListener('click', (e) => {
    e.preventDefault();
    fazerLogin('https://jonbet.bet.br/pt/games/double');
});

// Tecla Enter
campo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        fazerLogin('https://blaze1.space/pt/games/double');
    }
});

// Fechar iframe
btnFechar.addEventListener('click', () => {
    iframeContainer.style.display = 'none';
    iframe.src = '';
});

// Tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && iframeContainer.style.display === 'block') {
        iframeContainer.style.display = 'none';
        iframe.src = '';
    }
});

// Limpar erro ao digitar
campo.addEventListener('input', () => {
    errorMsg.style.display = 'none';
});

// Contador de vagas
setInterval(() => {
    if (vagasSpan) {
        let vagas = parseInt(vagasSpan.textContent);
        vagas = vagas + Math.floor(Math.random() * 5) - 2;
        vagas = Math.max(50, Math.min(127, vagas));
        vagasSpan.textContent = vagas;
    }
}, 3000);

// Focar no campo
campo.focus();

// Bloquear clique direito
document.addEventListener('contextmenu', e => e.preventDefault());
