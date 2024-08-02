const barIcon = document.getElementById("bar-icon");
const smallMenu = document.getElementById("small-menu");

barIcon.addEventListener("click", () => {
  const isVisible = smallMenu.classList.contains("flex");
  if (isVisible) {
    smallMenu.classList.remove("flex");
    smallMenu.classList.add("hidden");
  } else {
    smallMenu.classList.remove("hidden");
    smallMenu.classList.add("flex");
  }
});

const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop)
  if (scrollTop > lastScroll) {
    navbar.style.top = "-80px";
    lastScroll = scrollTop
  } else {
    navbar.style.top = "0px";
    lastScroll = scrollTop
  }
});


const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener('click', () =>{
    isChecked = toggleBtn.checked
    if(isChecked){
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');

    }
})
console.log("connected");
