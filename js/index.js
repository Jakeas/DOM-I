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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const aTags1 = document.querySelectorAll('a')[0].textContent = 'Services'
const aTags2 = document.querySelectorAll('a')[1].textContent = 'Product'
const aTags3 = document.querySelectorAll('a')[2].textContent = 'Vision'
const aTags4 = document.querySelectorAll('a')[3].textContent = 'Features'
const aTags5 = document.querySelectorAll('a')[4].textContent = 'About'
const aTags6 = document.querySelectorAll('a')[5].textContent = 'Contact'

const aTag = document.querySelectorAll('a')
aTag.forEach((link) =>{
  link.style.color = 'green'
})

const append = document.createElement('a')
append.textContent = 'Append'
append.href = '#'
document.querySelector('nav').appendChild(append)

const prepend = document.createElement('a')
prepend.textContent = 'Prepend'
prepend.href = '#'
document.querySelector('nav').prepend(prepend)


const title = document.querySelector('h1')
title.innerHTML = 'DOM <br> Is <br> Awesome'

const button = document.querySelector('button')
button.textContent = 'Get Started'

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', './img/header-img.png')

const mainFeatures = document.querySelectorAll('h4')[0]
mainFeatures.textContent = 'Features'
const paraFeatures = document.querySelectorAll('p')[0]
paraFeatures.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const mainAbout = document.querySelectorAll('h4')[1]
mainAbout.textContent = 'About'
const paraAbout = document.querySelectorAll('p')[1]
paraAbout.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', './img/mid-page-accent.jpg')

const mainServices = document.querySelectorAll('h4')[2]
mainServices.textContent = 'Services'
const paraServices = document.querySelectorAll('p')[2]
paraServices.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const mainProduct = document.querySelectorAll('h4')[3]
mainProduct.textContent = 'Product'
const paraProduct = document.querySelectorAll('p')[3]
paraProduct.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const mainVision = document.querySelectorAll('h4')[4]
mainVision.textContent = 'Vision'
const paraVision = document.querySelectorAll('p')[4]
paraVision.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const contact = document.querySelector('.contact h4')
contact.textContent = 'Contact'

const address = document.querySelectorAll('.contact p')[0]
address.innerHTML = '123 Way 456 Street <br> Somewhere, USA'

const phone = document.querySelectorAll('.contact p')[1]
phone.textContent = '1 (888) 888-8888'

const email = document.querySelectorAll('.contact p')[2]
email.textContent = 'sales@greatidea.io'

const footer = document.querySelector('footer p')
footer.textContent = 'Copyright Great Idea! 2018'



