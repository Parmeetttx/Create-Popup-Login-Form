var pop_up = document.querySelector('.pop');
// console.log(pop_up)

var show = document.querySelector('.btn-open');
    show.addEventListener("click" , () => {
        pop_up.classList.add("show")
    })

var hide = document.querySelector('.btn-close');
    hide.addEventListener("click" , () => {
    pop_up.classList.remove("show")
})