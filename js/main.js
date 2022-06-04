var imaging = document.getElementById("toggle-img");

    // var elements = document.getElementById("toggle-body");
    // console.log(element.class);
    function toggleMode() {
      var element = document.body;
      element.classList.toggle("dark-mode");
      console.log(element.classList.value);
      if (element.classList.value == "dark-mode") {
        document.getElementById("toggle-img").style.display="none";
        document.getElementById("toggle-img2").style.display="block";

      } else {
        document.getElementById("toggle-img2").style.display="none";
        document.getElementById("toggle-img").style.display="block";
      }
    }
    function toggleMenu() {
      if(document.getElementById("menu").style.display == "none"){
        document.getElementById("menu").style.display="block";
      }else {
        document.getElementById("menu").style.display= "none"
      }
    }