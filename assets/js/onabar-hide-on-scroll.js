var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("OnaNav_Bar").style.top = "0";
  } else {
    document.getElementById("OnaNav_Bar").style.top = "-73px";
  }
  prevScrollpos = currentScrollPos;
} 