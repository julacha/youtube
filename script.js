let resp_menu = document.querySelector(".responsive_menu");
let left =document.querySelector(".left_menu");


resp_menu.addEventListener("click", function () { 
  if (left.classList.contains("active")) {
    left.classList.remove("active");
  } else {
  left.classList.add("active");
  }
});

