const abas = document.querySelectorAll(".aba");
 abas.forEach(aba => {
        aba.addEventListener("click", function() {

            if(aba.classList.contains("selecionado")){
                return;
            }

           selecionarAba(aba)
           mostrarIformacoesDaAba(aba)

        });
 });

function selecionarAba(aba) {

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado"); 
    
 }


function mostrarIformacoesDaAba(aba) {
    
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeinformacoesDaAba =`informacao-${aba.id}`;
   

    const informacaoASerMostrada = document.getElementById(idDoElementoDeinformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");

}
