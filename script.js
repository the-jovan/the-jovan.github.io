window.onresize = function(){ location.reload(); }



if(screen.width > 501) {
// CLASS that shows divs on click
class ShowDiv {
    constructor(div, page) {
        this.div = div;
        this.page = page
        this.toBeDeleted = document.querySelectorAll(".visibleAtFirst")
        div.onclick = () => {
            this.showDiv(this.div, this.toBeDeleted, this.page)
        }
    }
    // div = each div, toBeDeleted = first divs names
    
    showDiv = (div, toBeDeleted, page) => {
        
        div.style.clipPath = "polygon(15% 0%, 125% 0, 100% 100%, -15% 100%)";
        div.style.zIndex = "3"
        setTimeout(function() {
            toBeDeleted.forEach( e => {
            e.style.display = "none"
            page.style.display = "flex";
        })
        }, 600)
        
    }
}

new ShowDiv(document.getElementById("about-me"), document.getElementById("about-me-page"))
new ShowDiv(document.getElementById("projects"), document.getElementById("projects-page"))
new ShowDiv(document.getElementById("skills"), document.getElementById("skills-page"))


// needs to be compressed somehow
document.getElementById("img-logo").onclick = function() {
    if (document.getElementById("about-me").style.clipPath = "polygon(15% 0%, 125% 0, 100% 100%, -15% 100%)") {
        document.getElementById("about-me").style.clipPath = "polygon(25% 0, 50% 0, 25% 100%, 0% 100%)"
        document.getElementById("about-me").style.zIndex = "0"
        document.getElementById("about-me-page").style.display = "none";
        document.querySelectorAll(".visibleAtFirst").forEach( e => {
            e.style.display = "block"
        })
    }
    if (document.getElementById("projects").style.clipPath = "polygon(15% 0%, 125% 0, 100% 100%, -15% 100%)") {
        document.getElementById("projects").style.clipPath = "polygon(50% 0, 75% 0, 50% 100%, 25% 100%)";
        document.getElementById("projects").style.zIndex = "0"
        document.getElementById("projects-page").style.display = "none";
        document.querySelectorAll(".visibleAtFirst").forEach( e => {
            e.style.display = "block"
        })
//        setTimeout(function() { document.getElementById("projectsPage").style.display = "none"}, 1400);
    }
    if (document.getElementById("skills").style.clipPath = "polygon(15% 0%, 125% 0, 100% 100%, -15% 100%)") {
        document.getElementById("skills").style.clipPath = "polygon(75% 0, 100% 0, 75% 100%, 50% 100%)";
        document.getElementById("skills").style.zIndex = "0"
        document.getElementById("skills-page").style.display = "none";
        document.querySelectorAll(".visibleAtFirst").forEach( e => {
            e.style.display = "block"
        })
//        setTimeout(function() { document.getElementById("skillsPage").style.display = "none"}, 1400);
    }
}
} else {
    null
//    alert("Better experience in horizontal view.")
}






// PROJECTS FROM HERE ON
// _________________________________
let whereToAddDiv = document.getElementById("projects-project");

function addDiv(image, headline, subhead, text, github, live, lp) {
    if (github !== "#") {
    newDiv = `
        <div class="proj">
            <div class="projImg">
                <h2>${headline}</h2>
                <img src=${image}>
            </div>
            <div class="projText">
                <h3>${subhead}</h3>
                <p>${text}</p>
                <div class="projLinks">
                <a href=${github} target="_blank">Github</a><br/>
                    <a href=${live} target="_blank">Live preview ${lp}</a>
                </div>
            </div>
        </div><hr/>
    `} else {
        newDiv = `
        <div class="proj">
            <div class="projImg">
                <h2>${headline}</h2>
                <img src=${image}>
            </div>
            <div class="projText">
                <h3>${subhead}</h3>
                <p>${text}</p>
                <div class="projLinks">
                    <a href=${live} target="_blank">Live preview ${lp}</a>
                </div>
            </div>
        </div><hr/>
    `
    };
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
      "WAITING FOR DUSAN",
      "Mini Google-images like app that displays fixed amount (currently ten), of images in grid style. Styled with Semantic UI. Needs some tweaking but functionality is there",
      "https://github.com/the-jovan/google_images_sorta",
      "#", "coming soon")
addDiv("https://i.ibb.co/fpsRJwx/utube.png",
      "YouTube API",
      "waiting for dusan",
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
