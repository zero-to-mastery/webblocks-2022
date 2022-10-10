<script src="C:\Users\AYUSH KUMAR\OneDrive\Desktop\web d\HTML - First Site\jquery\jquery-3.6.0.min.js"></script>
$(function(){
  $(window).scroll(function(){
    var mar= $(".top").height;
    if $(this).scrollTop()>=mar{
      $(".top").addclass(".stop");
    }
  });

});
