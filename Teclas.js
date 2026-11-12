// teclas.js - arquivo separado só das teclas executáveis do San Craft
// Pra mudar a tecla, edita aqui ou clica no botão de configurar no jogo.
// Se esse arquivo falhar, o jogo ignora a tecla e solta com clique no botão SOLTAR.

window.TECLAS = {
  soltar: "f",       // tecla pra soltar o item na lousa (padrão F)
  cancelar: "Escape", // tecla pra cancelar o carregado
  copiar: "c",
  duplicar: "d"
};

window.TECLAS_CONFIG = {
  // Troca a tecla de soltar e salva
  setSoltar: function(novaTecla){
    if(!novaTecla) return window.TECLAS.soltar;
    window.TECLAS.soltar = novaTecla;
    try{ localStorage.setItem("san-drop-key", novaTecla); }catch(e){}
    return window.TECLAS.soltar;
  },
  getSoltar: function(){
    // Se já salvou antes, usa a salva
    try{
      let salva = localStorage.getItem("san-drop-key");
      if(salva) window.TECLAS.soltar = salva;
    }catch(e){}
    return window.TECLAS.soltar;
  },
  labelSoltar: function(){
    let k = window.TECLAS_CONFIG.getSoltar();
    if(k === " ") return "Espaço";
    if(k === "Enter") return "Enter";
    return String(k).toUpperCase();
  }
};

// Carrega a tecla salva assim que o arquivo carrega
window.TECLAS_CONFIG.getSoltar();
