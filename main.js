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

// button of page movie
let btn = document.querySelector('.btn');
let checkLike = document.querySelector('.btn i');
if(btn){
    btn.addEventListener('click',function(){
        btn.classList.toggle('active');
    
        if(btn.classList.contains('active')){
            checkLike.classList.remove('fa-thumbs-up');
            checkLike.classList.add('fa-check');
            checkLike.innerHTML = ' Like 999';
        }else{
            checkLike.classList.remove('fa-check');
            checkLike.classList.add('fa-thumbs-up');
            checkLike.innerHTML = ' Like 998';
    
        }
    })
    
}
// card page
let btnNext = document.getElementById('next');
if(btnNext){
    btnNext.addEventListener('click',function(){
        const widthItem = document.querySelector('.card-list_item').offsetWidth;
        let scroll = document.getElementById('card');
        scroll.scrollLeft = scroll.scrollLeft + widthItem;
    })
}

let btnPrev = document.getElementById('prev');
if(btnPrev){
    btnPrev.addEventListener('click',function(){
        const widthItem = document.querySelector('.card-list_item').offsetWidth;
        let scroll = document.getElementById('card');
        scroll.scrollLeft = scroll.scrollLeft - widthItem;
    })
}

// Product page
let thisPage = 1;
let limit = 3;
let list = document.querySelectorAll('.product-list .product-item');
function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach( (item, key) => {
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();

function listPage(){
    let count = Math.ceil(list.length / limit) ;
    
    document.querySelector('.listPage').innerHTML = "";
    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'Prev';
        prev.setAttribute('onclick', "changePage("+(thisPage - 1)+")");
        document.querySelector('.listPage').appendChild(prev);

    }
    
    for(var i = 1; i <= count ; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage("+i+")")
        document.querySelector('.listPage').appendChild(newPage);
    }
    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = 'Next';
        next.setAttribute('onclick', "changePage("+(thisPage + 1)+")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i){
    thisPage = i;
    loadItem()
}