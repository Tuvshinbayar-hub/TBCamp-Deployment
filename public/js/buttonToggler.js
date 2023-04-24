var button = document.querySelector('.custom-navbar-toggler');
console.log(button)
button.addEventListener("click", function(){
    if(button.classList.contains('unfolded')){
        button.classList.remove('unfolded')
    }else{
        button.classList.add('unfolded')
    }
})

