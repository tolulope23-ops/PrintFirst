window.addEventListener("scroll", function(){
    var navBar = this.document.querySelector("#navbar");
    navBar.classList.toggle("sticky", this.window.scrollY > 0);
})