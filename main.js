let navbar = document.querySelector('.navbar');
document.getElementById('menu').addEventListener('click',function(){
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartForm.classList.remove('active');
    
})

let searchForm = document.querySelector('.search-form');
document.getElementById('search').addEventListener('click',function(){
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartForm.classList.remove('active');

})

let cartForm = document.querySelector('.cart-form');
document.getElementById('cart').addEventListener('click',function(){
    cartForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
})

// figure
let navTabs = document.querySelectorAll('.figure');
navTabs.forEach(item => {
    item.addEventListener('click', (event) =>{
        if(event.target.classList.contains('nav-item')){
            let lastActive = item.querySelector('li.active');
            let newActive = event.target;

            lastActive.classList.remove('active');
            newActive.classList.add('active');

            let lastContentActive = item.querySelector('.tab.active');
            let newContentActive = document.getElementById(newActive.dataset.target)
            lastContentActive.classList.remove('active');
            newContentActive.classList.add('active');

        }
    })
})
