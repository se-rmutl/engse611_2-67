
  const navLinks = document.querySelectorAll("nav ul li a");
  for (let i = 0; i < navLinks.length; i++) {
    //navLinks[i].onclick = function(){ alert( this.innerHTML) };
    navLinks[i].addEventListener("click", function () {
      alert(this.innerHTML);
    });
  }
