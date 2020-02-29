$(document).ready(function(){

     var owl = $("#owl-demo");
 
  owl.owlCarousel({
      autoplay:true,
        loop:true,
        items:5,
        center:true,
        ltr: true,
        nav:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:30,
            },
            481:{
                items:1,
                margin:30,
            },
            768:{
                items:3,
                margin:20,
            },
            992:{
                items:5,
                margin:20,
                width: 240,
            }
        }
      // itemsMobile disabled - inherit from itemsTablet option
  });

     var owl2 = $("#owl2");
 
  owl2.owlCarousel({
      autoplay:true,
        loop:true,
        items:6,
        ltr: true,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:20,
            },
            481:{
                items:1,
                margin:20,
            },
            768:{
                items:1,
                margin:20,
            },
            992:{
                items:2,
                margin:50,
                width: 240,
            }
        }
      // itemsMobile disabled - inherit from itemsTablet option
  });



   flag=1;
    $(".next").click(function(){
       if(flag==0)
        {
            $(".side1").css("z-index","5");
            $(".side2").css("z-index","4");
            $(".side3").css("z-index","5");
            $(".side1").css("transform","translateX(0px) scale(1.2)");
            $(".side2").css("transform","translateX(-220px) scale(1)");
            $(".side3").css("transform","translateX(220px)");
            $(".side1").css("opacity","1");
            $(".side3").css("opacity","0.8");
            flag=1;
        }
        else if(flag==1)
        {
            $(".side3").css("z-index","4");
            $(".side2").css("z-index","5");
            $(".side1").css("z-index","5");
            $(".side3").css("transform","translateX(-220px) ");
            $(".side1").css("transform","translateX(220px) scale(1)");
            $(".side2").css("transform","translateX(0px) scale(1.2)");
            $(".side2").css("opacity","1");
            $(".side1").css("opacity","0.8");

            flag=2;
        }
        else if(flag==2)
        {
            $(".side2").css("z-index","5");
            $(".side3").css("z-index","5");
            $(".side1").css("z-index","4");
            $(".side2").css("transform","translateX(220px)");
            $(".side3").css("transform","translateX(0px) scale(1.2)");
            $(".side3").css("opacity","1");
            $(".side2").css("opacity","0.8");
            $(".side1").css("transform","translateX(-220px) scale(1)");
            flag=0;
        }
    });
        $(".prev").click(function(){
       if(flag==0)
        {
            $(".side1").css("z-index","5");
            $(".side2").css("z-index","4");
            $(".side3").css("z-index","5");
            $(".side1").css("transform","translateX(0px) scale(1.2)");
            $(".side2").css("transform","translateX(-220px) scale(1)");
            $(".side3").css("transform","translateX(220px) " );
            $(".side1").css("opacity","1");
            $(".side2").css("opacity","0.8");
            flag=1;
        }
        else if(flag==1)
        {
            $(".side3").css("z-index","4");
            $(".side2").css("z-index","5");
            $(".side1").css("z-index","5");
            $(".side3").css("transform","translateX(0px) scale(1.2)");
            $(".side1").css("transform","translateX(-220px) scale(1)");
            $(".side2").css("transform","translateX(220px)");
            $(".side3").css("opacity","1");
            $(".side1").css("opacity","0.8");

            flag=2;
        }
        else if(flag==2)
        {
            $(".side2").css("z-index","5");
            $(".side3").css("z-index","5");
            $(".side1").css("z-index","4");
            $(".side2").css("transform","translateX(0px) scale(1.2)");
            $(".side3").css("transform","translateX(-220px) scale(1)");
            $(".side3").css("opacity","0.8");
            $(".side2").css("opacity","1");
            $(".side1").css("transform","translateX(220px)");
            flag=0;
        }
    });
$(".timer").countTo();
    
});