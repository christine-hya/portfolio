//BUTTONS TO OPEN MODALS
const modalBtn1 = document.querySelector('.modal-btn-1');
const modalBtn2 = document.querySelector('.modal-btn-2');
const modalBtn3 = document.querySelector('.modal-btn-3');
const modalBtn4 = document.querySelector('.modal-btn-4');
const modalBtn5 = document.querySelector('.modal-btn-5');
// const modalBtn6 = document.querySelector('.modal-btn-6');
// const modalBtn7 = document.querySelector('.modal-btn-7');
// const modalBtn8 = document.querySelector('.modal-btn-8');

//MODAL SELECTORS
const modal1 = document.getElementById('modal-1');
const modal2 = document.getElementById('modal-2');
const modal3 = document.getElementById('modal-3');
const modal4 = document.getElementById('modal-4');
const modal5 = document.getElementById('modal-5');
// const modal6 = document.getElementById('modal-6');
// const modal7 = document.getElementById('modal-7');
// const modal8 = document.getElementById('modal-8');

//CLOSE BUTTON SELECTORS
const closeBtn1 = document.querySelector('.close-btn-1');
const closeBtn2 = document.querySelector('.close-btn-2');
const closeBtn3 = document.querySelector('.close-btn-3');
const closeBtn4 = document.querySelector('.close-btn-4');
const closeBtn5 = document.querySelector('.close-btn-5');
// const closeBtn6 = document.querySelector('.close-btn-6');
// const closeBtn7 = document.querySelector('.close-btn-7');
// const closeBtn8 = document.querySelector('.close-btn-8');

//HIDE BACK-TO-TOP BUTTON
// const backtotopBtn = document.getElementById('topButton');

//OPEN MODALS
if (modalBtn1) {
    modalBtn1.addEventListener('click', function () {
        modal1.classList.add('open-modal');
        document.body.style.overflow = 'hidden';
        modal1.style.overflow = 'auto';
    });
}

modalBtn2.addEventListener('click', function() {
    modal2.classList.add('open-modal');
    document.body.style.overflow = 'hidden';
    modal2.style.overflow = 'auto';
});


if (modalBtn3) {
    modalBtn3.addEventListener('click', function () {
        modal3.classList.add('open-modal');
        document.body.style.overflow = 'hidden';
        modal3.style.overflow = 'auto';
    });
}

if (modalBtn4) {
    modalBtn4.addEventListener('click', function () {
        modal4.classList.add('open-modal');
        document.body.style.overflow = 'hidden';
        modal4.style.overflow = 'auto';
    });
}

if (modalBtn5) {
    modalBtn5.addEventListener('click', function () {
        modal5.classList.add('open-modal');
        document.body.style.overflow = 'hidden';
        modal5.style.overflow = 'auto';
    });
}


// if (modalBtn6) {
//     modalBtn6.addEventListener('click', function () {
//         modal6.classList.add('open-modal');
//         document.body.style.overflow = 'hidden';
//         modal6.style.overflow = 'auto';
//     });
// }
// if (modalBtn7) {
//     modalBtn7.addEventListener('click', function () {
//         modal7.classList.add('open-modal');
//         document.body.style.overflow = 'hidden';
//         modal7.style.overflow = 'auto';
//     });
// }

// if (modalBtn8) {
//     modalBtn8.addEventListener('click', function () {
//         modal8.classList.add('open-modal');
//         document.body.style.overflow = 'hidden';
//         modal8.style.overflow = 'auto';
//     });
// }

//CLOSE BUTTONS
if (closeBtn1) {
    closeBtn1.addEventListener('click', function () {
        modal1.classList.remove('open-modal');
        document.body.style.overflow = 'auto';
    });
}

closeBtn2.addEventListener('click', function() {
    modal2.classList.remove('open-modal');
    document.body.style.overflow = 'auto';
});

if (closeBtn3) {
    closeBtn3.addEventListener('click', function () {
        modal3.classList.remove('open-modal');
        document.body.style.overflow = 'auto';
    });
}

if (closeBtn4) {
    closeBtn4.addEventListener('click', function () {
        modal4.classList.remove('open-modal');
        document.body.style.overflow = 'auto';
    });
}

if (closeBtn5) {
    closeBtn5.addEventListener('click', function () {
        modal5.classList.remove('open-modal');
        document.body.style.overflow = 'auto';
    });
}

// if (closeBtn6) {
//     closeBtn6.addEventListener('click', function () {
//         modal6.classList.remove('open-modal');
//         document.body.style.overflow = 'auto';
//     });
// }

// if (closeBtn7) {
//     closeBtn7.addEventListener('click', function () {
//         modal7.classList.remove('open-modal');
//         document.body.style.overflow = 'auto';
//     });
// }

// if (closeBtn8) {
//     closeBtn8.addEventListener('click', function () {
//         modal8.classList.remove('open-modal');
//         document.body.style.overflow = 'auto';
//     });
// }