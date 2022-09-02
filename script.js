let btn = document.querySelector("#btn");
    let conteudo = [document.querySelector("#first"), document.querySelector("#second")]
    let i = 0
    let video = document.querySelector(".main")
    let musica = document.querySelector("#musica")

    btn.addEventListener("click", ligar);

    function ligar(){
 
        const audio = document.querySelector("#audio1")
        const audio2 = document.querySelector("#audio2")

        if(conteudo[0].style.color == "chartreuse" && conteudo[1].style.color == "chartreuse") {
            video.style.display = "block"
            musica.play()
        } else if (conteudo[0].style.color == "chartreuse") {
            audio2.play()
            conteudo[1].style.color = "chartreuse"
        } else {
            audio.play()
            conteudo[0].style.color = "chartreuse"
        }
    };