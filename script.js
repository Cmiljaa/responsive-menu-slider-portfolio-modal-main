//This is responsive menu
let menubtn = document.querySelector('.header button');

menubtn.addEventListener('click', () => mobileMenu);

const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
    let button = document.querySelector('.header button');

    if(button.innerText === "MENU"){
        menu.style.display = 'block';
        button.innerText = 'CLOSE';
    }
    else
    {
        menu.style.display = 'none';
        button.innerText = 'MENU';
    }
}

//This is gallery


let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNumber = 0;



rightBtn.addEventListener('click', () => {
    pictures[imgNumber].style.display = 'none';
    imgNumber++; if(imgNumber > 2) imgNumber = 0;
    pictures[imgNumber].style.display = 'block';
})

leftBtn.addEventListener('click', () =>{
    pictures[imgNumber].style.display = 'none';
    imgNumber--; if(imgNumber < 0) imgNumber = pictures.length-1;
    pictures[imgNumber].style.display = 'block';
})

const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item')
    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    })

    if(category === 'sve')
    {
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        })
    }

    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category))
            item.style.display = 'block';
    })
}

let selectbuttons = document.querySelectorAll('.portfolio-categories button');

selectbuttons.forEach( (item) => {
    item.addEventListener('click', () => portfolioSort(item));
});

//We are opening model

let openbtn = document.querySelector('.modal-section button');
let closebtn = document.querySelector('.popup-modal button');

openbtn.addEventListener('click', () => openModal());
closebtn.addEventListener('click', () => closeModal());

const openModal = () => {
    document.querySelector('.popup-modal').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

const closeModal = () => {
    document.querySelector('.popup-modal').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}