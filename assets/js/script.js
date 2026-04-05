$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Quoc Huy";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web designing", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

// function showProjects(projects) {
//     let projectsContainer = document.querySelector("#work .box-container");
//     let projectHTML = "";
//     projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
//         projectHTML += `
//         <div class="box tilt">
//       <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
//       <div class="content">
//         <div class="tag">
//         <h3>${project.name}</h3>
//         </div>
//         <div class="desc">
//           <p>${project.desc}</p>
//           <div class="btns">
//             <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
//             <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
//           </div>
//         </div>
//       </div>
//     </div>`
//     });
//     projectsContainer.innerHTML = projectHTML;

//     // <!-- tilt js effect starts -->
//     VanillaTilt.init(document.querySelectorAll(".tilt"), {
//         max: 15,
//     });
//     // <!-- tilt js effect ends -->

//     /* ===== SCROLL REVEAL ANIMATION ===== */
//     const srtop = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 1000,
//         reset: true
//     });

//     /* SCROLL PROJECTS */
//     srtop.reveal('.work .box', { interval: 200 });

// }

fetchData().then(data => {
    showSkills(data);
});

// fetchData("projects").then(data => {
//     showProjects(data);
// });

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// // End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

// Custom Cursor Logic
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    outline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Theme Toggle Logic
const themeToggle = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

// Check for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.classList.replace('fa-moon', 'fa-sun');
    // Initialize hero particles in white for dark mode
    if (typeof initHeroParticles === 'function') {
        initHeroParticles("#ffffff");
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
        if (typeof initHeroParticles === 'function') {
            initHeroParticles("#ffffff");
        }
    } else {
        themeToggle.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
        if (typeof initHeroParticles === 'function') {
            initHeroParticles("#000000");
        }
    }
});

// Add hover effect to interactive elements for the cursor
document.querySelectorAll('a, button, .btn, .card').forEach(link => {
    link.addEventListener('mouseenter', () => {
        outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        outline.style.background = 'rgba(255, 255, 255, 0.1)';
        outline.style.border = 'none';
    });
    link.addEventListener('mouseleave', () => {
        outline.style.transform = 'translate(-50%, -50%) scale(1)';
        outline.style.background = 'transparent';
        outline.style.border = '2px solid var(--cursor-color)';
    });
});

// Dynamic Section Color Tracking
const colorMap = {
    'home': { cursor: '#6D30FB', accent: '#6D30FB' },
    'about': { cursor: '#AB33F5', accent: '#AB33F5' },
    'skills': { cursor: '#6D30FB', accent: '#6D30FB' },
    'education': { cursor: '#FF6914', accent: '#FF6914' },
    'work': { cursor: '#AB33F5', accent: '#AB33F5' },
    'experience': { cursor: '#FF6914', accent: '#FF6914' },
    'contact': { cursor: '#6D30FB', accent: '#6D30FB' }
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            const theme = colorMap[id];
            if (theme) {
                document.documentElement.style.setProperty('--cursor-color', theme.cursor);
                document.documentElement.style.setProperty('--section-accent', theme.accent);
            }
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Particle Network (Constellation Effect)
class ParticleNetwork {
    constructor(sectionId) {
        this.section = document.getElementById(sectionId);
        if (!this.section) return;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '0';
        this.canvas.style.pointerEvents = 'none';
        this.section.appendChild(this.canvas);

        this.particles = [];
        this.particleCount = 20;
        this.resize();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = this.section.offsetWidth;
        this.height = this.canvas.height = this.section.offsetHeight;
        this.initParticles();
    }

    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                size: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        const particleColor = getComputedStyle(document.body).getPropertyValue('--particle-color').trim() || 'rgba(0,0,0,0.3)';

        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > this.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.height) p.vy *= -1;

            this.ctx.fillStyle = particleColor;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            for (let j = i + 1; j < this.particles.length; j++) {
                let p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    this.ctx.strokeStyle = particleColor;
                    this.ctx.globalAlpha = 1 - (dist / 120);
                    this.ctx.lineWidth = 0.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                    this.ctx.globalAlpha = 1;
                }
            }
        }
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize for each section
const networkSections = ['skills', 'education', 'work', 'experience', 'contact'];
networkSections.forEach(id => new ParticleNetwork(id));
