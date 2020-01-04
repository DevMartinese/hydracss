$(document).ready(function(){
  $('.modal-open').on('click', function(ev){
    ev.preventDefault();
    modalId = $(this).data('modal-id');
    modal = document.getElementById(modalId);

    $(modal).attr('aria-hidden', 'false');
    modal.classList.add('is-open');
  });

  $('.modal-close').on('click', function(ev){
    ev.preventDefault();
    modalId = $(this).closest('.modal').attr('id');
    modal = document.getElementById(modalId);

    $(modal).attr('aria-hidden', 'true');
    // Remove with await time for run css animation
    setTimeout(function(){
      modal.classList.remove('is-open');
    }, 300)
  });


  $('.sidemenu-trigger').on('click', function(ev){
    ev.preventDefault();
    sidemenuId = $(this).data('sidemenu-id');
    sidemenu = document.getElementById(sidemenuId);

    $(sidemenu).toggleClass('open');
  });

  $('#switch').on('click', function(ev){
    ev.preventDefault();

    current_theme = $('html').hasClass('theme-dark') ? 'theme-dark' : 'theme-light';
    new_theme = current_theme == 'theme-dark' ? 'theme-light' : 'theme-dark'

    $('html').removeClass(current_theme).addClass(new_theme);
  });
});