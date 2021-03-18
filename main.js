

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){

    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');


    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));



const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });



sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {delay:400});
sr.reveal('.about__text', {delay:400});


sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', {interval:200});
sr.reveal('.about__img', {delay:600});


sr.reveal('.work__img', {interval:200});

sr.reveal('.contact__input', {interval:200});




$(document).ready(function()  {
    $('.btn').click(function(e){

        e.preventDefault();
        window.location.href = "faizan0116.docx";
    });
});


$(document).ready(function()  {
    $('.home__social-icon2').click(function(e){

        e.preventDefault();
        window.location.href = "https://www.instagram.com/im_faizan01/";
    });
});
$(document).ready(function()  {
    $('.home__social-icon1').click(function(e){

        e.preventDefault();
        window.location.href = "https://www.linkedin.com/in/mohd-faizan-26b395202";
    });
});








$(document).ready(function()  {
    $('.footer-icon1').click(function(e){

        e.preventDefault();
        window.location.href = "https://www.facebook.com/profile.php?id=100011350598024";
    });
});
$(document).ready(function()  {
    $('.footer-icon3').click(function(e){

        e.preventDefault();
        window.location.href = "https://www.linkedin.com/in/mohd-faizan-26b395202";
    });
});


function sendMail(params){
    var tempParams ={
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
    };
    emailjs.send('service_z1nepm7','template_hqsnzfv',tempParams)
    .then(function(res){
        console.log("success",res.status)
    })
}
