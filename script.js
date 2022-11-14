/**/function mostrar(id){
    if(document.getElementById(id).style.display == 'block'){
        document.getElementById(id).style.display = 'none'
    } else {
        document.getElementById(id).style.display = 'block'
        document.getElementById(id).style.transform = 'translateX(0)'
        document.getElementById(id).style.transition = '.5s ease-in'
    }
}

/*Efeito de aparecer com a rolagem do SCROLL*/
function ativaNoScrool(){
    document.querySelectorAll('#hiddenScroll').forEach((hiddenScroll, index) => {
    if(hiddenScroll.getBoundingClientRect().top < 450){
            hiddenScroll.style.opacity= 1;
            hiddenScroll.style.animation=" appear-left 1.4s";
    };
})
}
window.addEventListener('scroll', ativaNoScrool) //ativando a função na página