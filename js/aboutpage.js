document.addEventListener("DOMContentLoaded", function(event){
    var aboutpage_image_width = $(".raja img").width();
    $(".raja img").css({'height': aboutpage_image_width.toString() + 'px',});
});

window.addEventListener('resize', function(event){
    var aboutpage_image_width = $(".raja img").width();
    $(".raja img").css({'height': aboutpage_image_width.toString() + 'px',});
});