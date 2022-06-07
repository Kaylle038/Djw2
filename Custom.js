// Botão C - clear
document.querySelector(#clear).addEventListener("click", ()=>{
    document.querySelector("#display").value = " ";
    // no #display (ou visor) limpando o número informado
})

// Botão -> backSpace

const backSpace = () =>{
    const backSpace = document.querySelector("#display").value.slice(0, -1);
    // declarando constante 1 e tirando -1 da direita pra esquerda em #display

    document.querySelector("#display").value = num;
    // igualando e atualizando Num no #display (visor)
}
