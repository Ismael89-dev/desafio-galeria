const btnCidade = document.getElementById('js-btn-cidade');
const btnNatureza = document.getElementById('js-btn-natureza');

btnCidade.addEventListener("click", () =>{
    const imgsNatureza = document.querySelectorAll(".natureza");
    const imgsCidade = document.querySelectorAll(".cidade");
    
    imgsNatureza.forEach((img,index) =>{
        img.style.display = 'none'
        imgsCidade[index].style.display = 'block'
    })
})

btnNatureza.addEventListener("click", () =>{
    const imgsCidade = document.querySelectorAll(".cidade");
    const imgsNatureza = document.querySelectorAll(".natureza");

    imgsCidade.forEach((img, index) =>{
        img.style.display = 'none'
        imgsNatureza[index].style.display = 'block'
    })
})