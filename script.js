var typed = new Typed(".auto-type",{
    strings: ["Fullstack Developer","Flutter Developer","Python Developer" , ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    cursorChar: ""
})

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0px";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyR1RQtiNQ87ogBPH9wNfjoGUTpq9QWY7fCoHRx34B4wtNpaaZ_K5paJKbiojHCsvqPsg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Thank you for your interest. We will get back to you soon."})
      .catch(error => console.error('Error!', error.message))
  })