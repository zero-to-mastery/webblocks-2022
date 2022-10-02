$(".social-link").on("mouseover", function() {
    let data = $(this).attr("data-my-element");
    $(".social-text[data-my-element=" + data + "]").addClass("show");
  });
  
  $(".social-link").on("mouseout", function() {
    $(".social-text").removeClass("show");
  });
  