let tecnologias

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

document.addEventListener("DOMContentLoaded", () => {
  tecnologias = [
    document.getElementById('typescript'),
    document.getElementById('react'),
    document.getElementById('node'),
    document.getElementById('mysql')
  ]
  tecnologias.map((tec)=> {
    tec.style.display = 'none'
  })
});

function showTec(tec) {
  tecnologias.map((m, i)=> {
    if(i === tec) {
      m.style.display = 'block'
    } else {
      m.style.display = 'none'
    }
  })
}

