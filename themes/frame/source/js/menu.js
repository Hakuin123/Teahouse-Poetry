function toggleMenu() {
    var menuList = document.getElementsByClassName("menu-list")[0];
    var menuButton = document.getElementById("menu-btn");  
    if(menuList.classList.contains("active")){
      menuList.classList.remove("active");
      menuButton.innerHTML = "目录";
    }else{
      menuList.classList.add("active");
      menuButton.innerHTML = "<div class=\"icon arrow-up\"> </div>";
    }
}
