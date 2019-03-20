var string = "hello";
var number = 5;
var boolean = true;

var circle = $(".circle");
var text = $(".text");
console.log(text);
 $(document).on('mousemove', function(event){
  var pageX = event.pageX;
  var pageY = event.pageY;
 console.log(pageX + ":" + pageY);
  circle.css ({
    "opacity": (pageX/window.innerWidth),
    "left": pageX+"px",
    "top": pageY+"px"
   });
   text.css({
    "right": pageX+"px",
     "top": pageY+"px"
   });
});
