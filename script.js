window.onresize = function(){ location.reload(); }

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

class ShowDiv {
    constructor (div, page, path, fromTop) {
        this.div = div
        this.page = page
        this.path = path
        this.fromTop = fromTop
        this.toBeDeleted = document.querySelectorAll(".visibleAtFirst")
        div.onclick = () => {
            this.showDiv(this.div, this.toBeDeleted, this.page)
        }
        document.querySelector(".header__logo").onclick = () => {
            this.hideDiv(this.fromTop)
        }
    }

    // shows main page on click
    
    showDiv = (div, toBeDeleted, page) => {
        if (viewportWidth > 600) {
            div.style.clipPath = "polygon(15% 0%, 125% 0, 100% 100%, -15% 100%)" }
        else {
            div.style.clipPath = "none"
            div.style.height = "76vh"
            div.style.top = "15vh"
        }
        div.style.zIndex = "3"
        setTimeout(function() {
            toBeDeleted.forEach( e => {
                e.style.display = "none"
                page.style.display = "block"
                document.querySelector(".header__return").style.display = "block"
            })
        }, 600)
    }

    // hides main page when logo is clicked
    hideDiv = () => {
        pages.find( e => {
            if (viewportWidth > 600) {
                if (e[0].style.clipPath = "polygon(15% 0%, 125% 0, 100% 100%, -15% 100%)") {
                    e[0].style.clipPath = `${e[2]}`
                    e[0].style.zIndex = "0"
                    e[1].style.display = "none"
                    setTimeout(function() {
                        document.querySelector(".header__return").style.display = "none"
                        document.querySelectorAll(".visibleAtFirst").forEach( x => {
                        x.style.display = "block" })
                    }, 300)
                }
            } else {
                if (e[0].style.height = "76vh") {
                    e[0].style.height = `22vh`
                    e[0].style.top = e[3]
                    e[0].style.zIndex = "0"
                    e[1].style.display = "none"
                    setTimeout(function() {
                        document.querySelector(".header__return").style.display = "none"
                        document.querySelectorAll(".visibleAtFirst").forEach( x => {
                        x.style.display = "flex" })
                    }, 300)
            }
        } 
        }
        
        )
    }
}



const pages = [
    [document.querySelector(".section-about"), document.querySelector(".section-about__full"), "polygon(25% 0, 50% 0, 25% 100%, 0% 100%)", "15vh"],
    [document.querySelector(".section-projects"), document.querySelector(".section-projects__full"), "polygon(50% 0, 75% 0, 50% 100%, 25% 100%)", "37vh"],
    [document.querySelector(".section-skills"), document.querySelector(".section-skills__full"), "polygon(75% 0, 100% 0, 75% 100%, 50% 100%)", "59vh"]
]

pages.forEach( e => {
    new ShowDiv(e[0], e[1], e[2])
})



// PROJECTS FROM HERE ON
// _________________________________
let whereToAddDiv = document.querySelector(".section-projects__full-container");

function addDiv(image, headline, subhead, text, github, live, lp) {
    newDiv = `
        <div class="project">
            <div class="project__image">
                <h2>${headline}</h2>
                <img src=${image}>
            </div>
            <div class="project__text">
                <h3>${subhead}</h3>
                <p>${text}</p>
                <div class="project__text-links">
                <a href=${github} target="_blank">Github</a><br/>
                    <a href=${live} target="_blank">Live preview ${lp}</a>
                </div>
            </div>
        </div><hr/>
    `
    whereToAddDiv.insertAdjacentHTML("beforeend", newDiv)
}

// PROJECTS
// _______________________________________
addDiv("https://i.ibb.co/FbcgHyD/djo1.png", 
       "Restaurant Djem & Olive", 
       "Famous restaurant by famous cook Džemi Oliver", 
       "Single-page restaurant website. It has everything one restaurant needs. Reservations, downloadable menu, opening hours, specialities etc. TBC", 
       "https://github.com/the-jovan/restaurant-basic", 
       "https://codepen.io/witz/full/MxBdwx", "here")
addDiv("https://i.ibb.co/8xT6cMG/mtd1.png", 
       "Mercenary list", 
       "Sort of To-Do App", 
       "What if your task app wasn't simply: 1. add task; 2. delete task? Okay, what if it was that, but with extra steps. It's all about presentation. You get to be a mercenary now, and get your very own Mechanic to deal with those who fail you, should you want that.", 
       "https://github.com/the-jovan/to-do_mercs", 
       "https://codepen.io/witz/full/PLvmOV", "here")
addDiv("https://i.ibb.co/cCGCm4x/par1.png", 
       "Equilibrium", 
       "Helping you find your way since '2019", 
       "Simple parallax-scroll website for helping people figure out their purpose in life, and give them a push towards achieving it. It's pretty straight-forward with little to no effects, other than specific scroll type. On the bottom there's a button that opens contact form.", 
       "https://github.com/the-jovan/parallax", 
       "https://codepen.io/witz/full/gEwbVb", "here")
addDiv("https://i.ibb.co/VVVczz2/unsplash.png",
      "Unsplash API",
      "React Unsplash API app",
      "Mini Google-images like app that displays fixed amount (currently ten), of images in grid style. Styled with Semantic UI. Needs some tweaking but functionality is there",
      "https://github.com/the-jovan/google_images_sorta",
      "#", "coming soon")
addDiv("https://i.ibb.co/fpsRJwx/utube.png",
      "YouTube API",
      "React YouTube API app",
      "YouTube rip-off. Fetches data from YouTube and displays it.",
      "https://github.com/the-jovan/miniTube",
      "#", "coming soon")
addDiv("https://i.ibb.co/rdnJtwS/champ1.png", 
       "Champion", 
       "We are still looking", 
       'One of my first "projects". Utterly useless, but hey, at least it is responsive. What you see is what you get. Really no need to visit the page, but if you want...',
       "#", 
       "https://codepen.io/witz/full/OdNEZy", "here")
addDiv("https://i.ibb.co/7g8Vv6j/cla1.png", 
       "WordPress blog", 
       "Applied WP theme (it's something!)", 
       'Before I even began coding, I had to create this blog as a college project. Working in a group of four, I was "developer" while colleagues were content creators and sort of designers. The amount of colors and themes I had changed... Good times.', 
       "#",
       "https://snezanaicetiripatuljka.wordpress.com/", "here")
addDiv("https://i.ibb.co/XVJWQ5k/form.png",
      "Survey form",
      "",
      '"Help us improve" type of survey to help firm get better idea of what needs to be improved.',
      "#",
      "https://codepen.io/witz/full/pqWdKw", "here")

//________________________________________________________