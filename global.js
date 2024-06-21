console.log("Test");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

var navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)
currentLink?.classList.add("current");

let pages = [
    {url: "", title :"Home"},
    {url: "projects/", title: "Projects"},
    {url: "contact/", title: "Contact"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    
    let url = p.url;
    let title = p.title;
    nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );

}



