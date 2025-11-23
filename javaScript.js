// scroll section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// sticky nsavbar
window.onscroll = () => {
sections.forEach(sec => {
let top = window.scrollY;
let offset = sec.offsetTop -150;
let height=sec.offsetHeight;
let id = sec.getAttribute('id');

if(top >= offset && top < offset + height) {
    navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
}
});

let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 20);
}

let darkIcon = document.querySelector("#darkmood-icon i");

darkIcon.onclick = () => {

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        darkIcon.classList.replace("bx-moon", "bx-sun");
    } 
    else {
        darkIcon.classList.replace("bx-sun", "bx-moon");
    }
};


document.querySelectorAll('.social-media a').forEach(link => {
    link.addEventListener('click', function() {
        this.classList.add('clicked');
    });
});

// scroll reveal 

ScrollReveal({  
    // reset: true,
    distance: '60px',
    duration: 1500,
    delay: 400
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });




