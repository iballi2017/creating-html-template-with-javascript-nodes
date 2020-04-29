// alert("hello")

var docHead = document.querySelector("head")  //the document head

/* Creating a fontawesome cdn link */
var fontawesomeCDN = document.createElement("link")
fontawesomeCDN.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css")
fontawesomeCDN.setAttribute("rel", "stylesheet") //fontawesome cdn link
docHead.appendChild(fontawesomeCDN)
console.log(docHead)


/* navigation  */

var nav = document.querySelector("nav")
nav.setAttribute("class", "wrapper")
var navtab = document.createElement("ul")
navtab.setAttribute("class", "nav-tab")
//......brandLogo
var logoTag = document.createElement("h2")
logoTag.setAttribute("class", "brand-logo")
nav.appendChild(logoTag).appendChild(document.createTextNode("BrandLogo"))


//Creating a menu button for mobile toggle
var menubtn = document.createElement("buton");
nav.appendChild(menubtn).setAttribute("class", "menu-btn")
//adding a fontawesome icon to the button
var fontawesomeTag = document.createElement("i")
fontawesomeTag.setAttribute("class", "fas fa-ellipsis-v menu-btn-inner-icon")
menubtn.appendChild(fontawesomeTag)
nav.appendChild(menubtn).setAttribute("onclick", "toggleMenu()")

//.................toggling nav-tab
var menuTab = false
function toggleMenu() {
    if (menuTab === false) {
        document.querySelector(".nav-tab").style.display = "block";
        document.querySelector(".menu-btn-inner-icon").style.transform = "rotate(90deg)";
        document.querySelector(".menu-btn-inner-icon").style.transition = "transform 250ms ease-in-out";
        menuTab = true
    } else if (menuTab === true) {
        document.querySelector(".nav-tab").style.display = "none";
        document.querySelector(".menu-btn-inner-icon").style.transform = "rotate(0deg)";
        document.querySelector(".menu-btn-inner-icon").style.transition = "transform 250ms ease-in-out";
        menuTab = false
    }
}

// transform: rotate(40deg);
// object array of links and pages
var links = [{
    "link": "Home",
    "page": "homepage.html"
}, {
    "link": "About", "page": "about-us.html"
}, { "link": "Contact us", "page": "contact-us.html" }, { "link": "Blog", "page": "blog.html" }]
console.log(links)


// loop through the array of objects
links.forEach((link) => {
    // console.log(link)

    // setting up the nodes
    var navlist = document.createElement("li")
    navlist.setAttribute("class", "nav-list")
    var navLink = document.createElement("a")
    navLink.setAttribute("class", "nav-link")
    navLink.setAttribute("href", link.page)
    console.log(navLink)
    var homeLink = nav.appendChild(navtab).appendChild(navlist).appendChild(navLink)
    homeLink.appendChild(document.createTextNode(link.link))
})

/*...........Main...................*/

var main = document.querySelector("main")
main.setAttribute("class", "wrapper")
console.log(main)


var pageTitle = document.createElement("h1")
var title = document.createTextNode("This is a page title")

main.appendChild(pageTitle).appendChild(title)
pageTitle.setAttribute("class", "title")

//section One
var firtParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis quisquam assumenda fugiat esse distinctio enim harum, eligendi omnis officia necessitatibus facilis, iste itaque! Quis consequatur aspernatur impedit, ipsum esse quas nihil atque, asperiores ducimus rem, quo velit commodi adipisci rerum repudiandae amet fuga.Unde quasi iste vero! Possimus maxime quas eligendi omnis consequatur odio alias autem nisi odit! Hic nobis voluptas veritatis illum quisquam quis, aspernatur ad nulla corrupti repellendus, vel rerum modi sint.Quidem repudiandae iusto et rem beatae necessitatibus qui, laboriosam dolore id sequi voluptatibus reprehenderit, dicta tempore molestias tenetur dolores.Illo ad ut fugiat impedit.Magni, necessitatibus ?"

var section1 = document.createElement("section")
var article = document.createElement("article")
article.setAttribute("class", "article")
main.appendChild(section1)
var paragrah1 = document.createTextNode(firtParagraph)
section1.appendChild(article)
article.appendChild(paragrah1)


/* FOOTER */

var footerTag = document.querySelector("footer")
var footerInnerWrapper = document.createElement("div")
footerInnerWrapper.setAttribute("class", "wrapper footer-inner")
var copyrightTexts = document.createTextNode("Copyright 2020, Ibrahim Alli")

footerTag.appendChild(footerInnerWrapper).appendChild(copyrightTexts)
