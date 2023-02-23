const caixaPergunta = document.querySelector('#caixa-pergunta');
const botaoSim = document.querySelector('#botao-sim');
const botaoNao = document.querySelector('#botao-nao');

function reposicionarCaixa() {
  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;
  const larguraCaixa = caixaPergunta.offsetWidth;
  const alturaCaixa = caixaPergunta.offsetHeight;

  const novaPosicaoEsquerda = Math.random() * (larguraJanela - larguraCaixa);
  const novaPosicaoTopo = Math.random() * (alturaJanela - alturaCaixa);

  caixaPergunta.style.left = `${novaPosicaoEsquerda}px`;
  caixaPergunta.style.top = `${novaPosicaoTopo}px`;
}

botaoSim.addEventListener('click', () => {
  caixaPergunta.classList.add('oculto');
  alert("Também te amo!!<3")
});

botaoNao.addEventListener('click', () => {
  reposicionarCaixa();
});

reposicionarCaixa();
