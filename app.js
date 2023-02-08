



ancien = 0;

window.addEventListener('scroll', function() {

    let test = document.querySelector(".remonter");
    test.addEventListener('click', function(){
        let header = document.querySelector("header");
        header.classList.remove("cacher");
    });
    a = window.scrollY;
    if(a > 70){
        if(a > ancien){
            let header = document.querySelector("header");
            header.classList.add("cacher");
        }
        else{
            let header = document.querySelector("header");
            header.classList.remove("cacher");
        }
    }
    ancien = a;
    
});