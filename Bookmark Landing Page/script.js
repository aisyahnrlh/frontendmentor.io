// Hamburger Menu
const navHamburger = document.querySelector('.nav__hamburger');
const navLogo = document.querySelector('.nav__logo');
const navMenuHamburger = document.querySelector('.nav__menu-hamburger');
const menuHamburger = document.querySelector('.nav__menu-phone-tablet');

// Features
const features = document.querySelectorAll('.features__feature li');
const featuresExp = document.querySelectorAll('.exp');

// Forms email
const form = document.getElementById('form');
const log = document.getElementById('log');
const regex = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const noError = document.querySelector('.email__form>div');
const noErrorImg = document.querySelector('.email__form img');
const input = document.querySelector('.email__form input');
const buttonSubmit = document.querySelector('.email__form>button');

// Initialisation
features[0].style.color = 'hsl(229, 31%, 21%)';

// Function for navbar hamburger
navHamburger.addEventListener('click', () => {
    if (navHamburger.classList.contains('hamburger-active')) {
        navHamburger.classList.remove('hamburger-active');
        navLogo.src = "images/logo-bookmark.svg";
        menuHamburger.style.animation = "fadeOut .5s forwards";
        window.setTimeout(() => {
            menuHamburger.classList.remove('nav__menu-hamburger');
        }, 500);

    } else {
        navHamburger.classList.add('hamburger-active');
        navLogo.src = "images/logo-bookmark-white.svg";
        menuHamburger.classList.add('nav__menu-hamburger');
        menuHamburger.style.animation = "fadeIn .5s forwards";
    }
})

// Functions for swapping features
const handleClick = (e) => {
    features.forEach(feature => {
        feature.classList.remove('change');
    });
    e.target.classList.add('change');
    for (let i = 0; i < features.length; i++) {
        if (features[i].classList.contains('change')) {
            featuresExp[i].style.display = 'flex';
            features[i].style.color = 'hsl(229, 31%, 21%)';
        } else {
            featuresExp[i].style.display = 'none';
            features[i].removeAttribute('style');
        }
    }
}

features.forEach(feature => {
    feature.addEventListener('click', handleClick);
});

// Functions for form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    console.log(email)
    if (regex.test(email)) {
        log.textContent = 'Your email has been submitted!';

        if (noError.classList.contains('error')) {
            noError.classList.remove('error');
            noError.classList.add('no-error');
            noErrorImg.classList.remove('error__img');
            noErrorImg.classList.add('no-error__img');
            input.style.border = '1px solid hsl(0, 94%, 66%)';

            if (window.innerWidth < 768) {
                buttonSubmit.style.transform = 'translateY(0)';
            }
        }

        form.reset();
    } else {
        noError.classList.remove('no-error');
        noError.classList.add('error');
        noErrorImg.classList.remove('no-error__img');
        noErrorImg.classList.add('error__img');
        input.style.border = '3px solid hsl(0, 94%, 66%)';

        if (window.innerWidth < 768) {
            buttonSubmit.style.transform = 'translateY(10px)';
        }
    }
});