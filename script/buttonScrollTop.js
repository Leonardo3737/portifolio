window.onscroll = function() {
  exibirOcultarBotao();
};

function exibirOcultarBotao() {
  var arrow = document.getElementById("arrow");
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrow.classList.add("mostrar");
  } else {
    arrow.classList.remove("mostrar");
  }
}

function voltarAoTopo() {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    document.body.scrollTop = 0; // Para navegadores mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
  }
}

