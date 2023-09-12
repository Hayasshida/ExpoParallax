var instaBtn = document.getElementById('insta');
var btnClicar = document.getElementById('spa');
var btnFinal = document.getElementById('pp');

function clicar(){
    if(instaBtn.style.opacity == 0)
    {
        instaBtn.style.opacity = '1';
        instaBtn.style.display = 'unset'
    }
    else
    {
        instaBtn.style.opacity = '0';
        instaBtn.style.display = 'none'
    }
}

btnClicar.addEventListener("click", function(){
    btnFinal.onclick = clicar;
})
