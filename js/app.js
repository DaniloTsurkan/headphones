import { useDynamicAdapt } from './src/dynamicAdapt.js'

document.addEventListener('DOMContentLoaded', function() {
  useDynamicAdapt();
});


const iconmenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconmenu){
  iconmenu.addEventListener("click", function (e) {
    iconmenu.classList.toggle("menu-open");
    document.body.classList.toggle("lock")
    menuBody.classList.toggle("menu-open");
  });
}

const header = document.querySelector('.header');
const headerHeight=header.offsetHeight
console.log(headerHeight)


window.addEventListener("scroll",()=>{
  let scrollDistance=window.scrollY;

  // console.log(scrollDistance)

  if (scrollDistance>=100) {
    header.classList.add("scroll")
  } else{
    header.classList.remove("scroll")
  }
})