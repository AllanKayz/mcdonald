import VanillaRouter from "./vanillarouter.js";

const navbar = document.getElementById("nav");

const router = new VanillaRouter({
  type: "history",
  routes: {
    "/": "pages/home",
    "/home": "pages/home",
    "/about": "pages/about",
    "/contact": "pages/contact",
    "/services": "pages/services",
    "/error": "pages/error404",
  },
})
  .listen()
  .on("route", async (e) => {
    //console.log(e.detail.route, e.detail.url);

    document.querySelector("section").innerHTML = await fetch(
      "/" + e.detail.route + ".html"
    ).then((x) => x.text());

    if (
      e.detail.route === "pages/home" ||
      e.detail.route === "pages/error404"
    ) {
      navbar.classList.remove("navbarChange");
    } else {
      navbar.classList.add("navbarChange");
    }
  });
