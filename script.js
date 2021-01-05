let resp_menu = document.querySelector(".responsive_menu");
let left =document.querySelector(".left_menu");

resp_menu.addEventListener("click", function () { 
  left.classList.add("active");
});

if (left.classList.contains("active")) {
  resp_menu.addEventListener("click", function () { 
  left.classList.remove("active");
});
}
