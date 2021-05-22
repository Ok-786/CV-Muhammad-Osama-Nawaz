


document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

  
  $('.carousel-sync').on('slide.bs.carousel', function(ev) {
    // get the direction, based on the event which occurs
    var dir = ev.direction == 'right' ? 'prev' : 'next';
    // get synchronized non-sliding carousels, and make'em sliding
    $('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
});
$('.carousel-sync').on('slid.bs.carousel', function(ev) {
    // remove .sliding class, to allow the next move
    $('.carousel-sync').removeClass('sliding');
});



