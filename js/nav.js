const navArr = [
    ["/","Home"],
    ["/vueintro.html","Intro and Setup"],
    ["/vuecomponents.html","Components"],
    ["/vuecomponentprops.html","Component Props"]
];    

const navEl = document.createElement("nav");
const ulEl  = document.createElement("ul");

let navlist = "";

navArr.forEach((item)=>{
    navlist+= `<li><a href="${item[0]}">${item[1]}</a></li>`;
});

ulEl.innerHTML = navlist;
navEl.append(ulEl);

const bodyEl = document.querySelector("body");
bodyEl.prepend(navEl);
