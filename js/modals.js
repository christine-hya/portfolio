//BUTTONS TO OPEN MODALS
const modalBtn1 = document.querySelector('.modal-btn-1');
// const modalBtn2 = document.querySelector('.modal-btn-2');
const modalBtn3 = document.querySelector('.modal-btn-3');
const modalBtn4 = document.querySelector('.modal-btn-4');
const modalBtn5 = document.querySelector('.modal-btn-5');

//MODAL SELECTORS
const modal1 = document.getElementById('modal-1');
// const modal2 = document.getElementById('modal-2');
const modal3 = document.getElementById('modal-3');
const modal4 = document.getElementById('modal-4');
const modal5 = document.getElementById('modal-5');

//CLOSE BUTTON SELECTORS
const closeBtn1 = document.querySelector('.close-btn-1');
// const closeBtn2 = document.querySelector('.close-btn-2');
const closeBtn3 = document.querySelector('.close-btn-3');
const closeBtn4 = document.querySelector('.close-btn-4');
const closeBtn5 = document.querySelector('.close-btn-5');

//OPEN MODALS

if(modalBtn1){
modalBtn1.addEventListener('click', function() {
    modal1.classList.add('open-modal');
    document.body.style.overflow = 'hidden';
    modal1.style.overflow = 'auto';
});
}

// modalBtn2.addEventListener('click', function() {
//     modal2.classList.add('open-modal');
//     document.body.style.overflow = 'hidden';
//     modal2.style.overflow = 'auto';
// });

if(modalBtn3){
modalBtn3.addEventListener('click', function() {
    modal3.classList.add('open-modal');
    document.body.style.overflow = 'hidden';
    modal3.style.overflow = 'auto';
});
}


if(modalBtn3){
modalBtn4.addEventListener('click', function() {
    modal4.classList.add('open-modal');
    document.body.style.overflow = 'hidden';
    modal4.style.overflow = 'auto';
});
}

if(modalBtn3){
modalBtn5.addEventListener('click', function() {
    modal5.classList.add('open-modal');
    document.body.style.overflow = 'hidden';
    modal5.style.overflow = 'auto';
});
}

//CLOSE BUTTONS
closeBtn1.addEventListener('click', function() {
    modal1.classList.remove('open-modal');
    document.body.style.overflow = 'auto';
});

// closeBtn2.addEventListener('click', function() {
//     modal2.classList.remove('open-modal');
//     document.body.style.overflow = 'auto';
// });

closeBtn3.addEventListener('click', function() {
    modal3.classList.remove('open-modal');
    document.body.style.overflow = 'auto';
});

closeBtn4.addEventListener('click', function() {
    modal4.classList.remove('open-modal');
    document.body.style.overflow = 'auto';
});

closeBtn5.addEventListener('click', function() {
    modal5.classList.remove('open-modal');
    document.body.style.overflow = 'auto';
});