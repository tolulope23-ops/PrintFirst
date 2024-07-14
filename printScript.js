window.addEventListener("scroll", function(){
    const navBar = this.document.querySelector("#navbar");
    navBar.classList.toggle("sticky", this.window.scrollY > 750);
})