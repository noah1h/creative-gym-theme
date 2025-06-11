$(document).ready(function() {
  const $hamburgerMenu = $('.hamburger-menu');
  const $sidebar = $('.sidebar');

  $hamburgerMenu.on('click', function() {
    if ($sidebar.is(':visible')) {
      // If sidebar is open, slide up to hide
      $sidebar.stop(true, true).slideUp();
    } else {
      // If sidebar is hidden, slide down to show
      $sidebar.stop(true, true).slideDown();
    }
  });
});
