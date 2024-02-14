import VanillaRouter from "./vanillarouter.js";

const router = new VanillaRouter({
    type: "history",
    routes: {
        "/": "pages/home",
        "/about": "pages/about",
        "/contact": "pages/contact",
        "/services": "pages/services",
        "/error": "pages/error404"
    }
}).listen().on("route", async e => {
    
    console.log(e.detail.route, e.detail.url);

    document.querySelector("section").innerHTML = await fetch("/" + e.detail.route + ".html").then(x=>x.text())

})
