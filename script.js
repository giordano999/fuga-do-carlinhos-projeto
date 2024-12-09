//const somFundo = document.getElementById('som-fundo');
const somPerda = document.getElementById('som-perda');
const somVitoria = document.getElementById('som-vitoria');

function iniciarSomFundo() {
  somFundo.play().catch(console.error);
}

function tocarSomPerda() {
  somPerda.play().catch(console.error);
}

function tocarSomVitoria() {
  somVitoria.play().catch(console.error);
}

document.querySelectorAll('.btn-proximo').forEach(button => {
  button.addEventListener('click', function() {
    const proximoPasso = this.dataset.proximo;

    document.querySelectorAll('.passo').forEach(passo => {
      passo.classList.remove('ativo');
    });

    const proximoCenario = document.getElementById(`passo-${proximoPasso}`);
    if (proximoCenario) {
      proximoCenario.classList.add('ativo');
    }

    if (proximoPasso === '3') {
      tocarSomPerda();
      alert('Você perdeu!');
    }

    if (proximoPasso === '5') {
      tocarSomVitoria();
      alert('Você escapou com sucesso!');
    }
  });
});

window.onload = iniciarSomFundo;
