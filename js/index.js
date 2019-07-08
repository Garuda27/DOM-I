const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const NavItems = document.querySelectorAll("nav a");
NavItems.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})


const logo = document.querySelector("#logo-img");
logo.src = siteContent["nav"]["img-src"];


const index = document.createElement("a");
index.href = "#";
index.textContent = "Home";
const mainNav = document.querySelector("header nav");
mainNav.prepend(index);

const blog = document.createElement("a");
blog.href = "#";
blog.textContent = "Blog";
mainNav.appendChild(blog);

const NewNavItems = document.querySelectorAll("nav a");
NewNavItems.forEach(link => link.style.color = "lightgreen");""

const ctaText = document.querySelector(".cta-text h1");
siteContent.cta["h1"] = "DOM<br> Is<br> Awesome!";
ctaText.innerHTML = siteContent.cta["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta["button"];
ctaButton.style.borderRadius = "10px";

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

const headings = document.querySelectorAll(".text-content h4");
headings[0].textContent = siteContent["main-content"]["features-h4"];
headings[1].textContent = siteContent["main-content"]["about-h4"];
headings[2].textContent = siteContent["main-content"]["services-h4"];
headings[3].textContent = siteContent["main-content"]["product-h4"];
headings[4].textContent = siteContent["main-content"]["vision-h4"];

const paragraphs = document.querySelectorAll(".text-content p")
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

ctaButton.addEventListener("click", event => {
  for (let i=0; i<paragraphs.length; i++) {
    paragraphs[i].style.color = "green";
  }
});

ctaButton.addEventListener("dblclick", event => {
  for (let i=0; i<paragraphs.length; i++) {
    paragraphs[i].style.color = "black";
  }
});