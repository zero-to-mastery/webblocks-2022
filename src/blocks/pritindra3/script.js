$(document).ready(function() {
    var submitIcon = $('.searchbox-icon'),
      inputBox = $('.searchbox-input'),
      searchBox = $('.searchbox'),
      isOpen = false;
  
    submitIcon.click(function() {
      if (!isOpen) {
        searchBox.addClass('searchbox-open');
        inputBox.focus();
        isOpen = true;
      } else {
        searchBox.removeClass('searchbox-open');
        inputBox.focusout();
        isOpen = false;
      }
    });
  });
  
  function buttonUp() {
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
      $('.searchbox-icon').css('display', 'none');
    } else {
      $('.searchbox-input').val('');
      $('.searchbox-icon').css('display', 'block');
    }
  }