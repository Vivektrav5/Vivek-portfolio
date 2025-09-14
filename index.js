$(document).ready(function() {
  // Smooth scroll for nav links and custom section links
  $(".navbar a, .prev-section, .next-section, .home-section").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 65
      }, 800);
    }
  });

  // Fade-in elements on scroll
  function checkFadeIn() {
    $('.fade-in').each(function() {
      const bottom_of_object = $(this).offset().top + $(this).outerHeight() / 2;
      const bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).css('opacity', '1');
      }
    });
  }

  $(window).scroll(checkFadeIn);
  checkFadeIn();

  // Animate progress bars on scroll
  function animateProgress() {
    $('.progress-bar').each(function() {
      const barPos = $(this).offset().top + $(this).outerHeight();
      const topOfWindow = $(window).scrollTop() + $(window).height();
      if (topOfWindow > barPos) {
        const width = $(this).attr('data-width') || $(this).css('width');
        $(this).css('width', width);
      }
    });
  }

  $(window).scroll(animateProgress);
  animateProgress();

  // Contact form submission
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    $(this).trigger("reset");
  });
});
