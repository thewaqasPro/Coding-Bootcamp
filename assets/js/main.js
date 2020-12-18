/*
  target -> the object to be animated
  targetZone -> the zone in which to activate the animation
*/
function FloatingCard(target, targetZone) {
    var card = $(target);
    
    $(targetZone).on("mousemove",function(e) {
      
      card.removeClass('straight');
      /* If you want to customize the angle effects, 
         just divide by less o more then 10
      */
      var ax = -($(targetZone).offset().left - e.pageX + $(targetZone).innerWidth()/2)/10;
      var ay = (($(targetZone).offset().top - e.pageY + $(targetZone).innerHeight()/2)/10);
      
      card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    });
  
    $(targetZone).on("mouseenter",function(e) {
      setTimeout(function () {
        card.removeClass('easing');
      }, 900);
    });
  
    $(targetZone).on("mouseleave",function(e) {
      card.addClass('easing straight');
    });
  }
  
  $(document).ready(function() {
    FloatingCard('.card', '.card-container');
  })