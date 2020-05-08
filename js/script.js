/* Код запуска */
$(function () {

	$(".fonch").css("display", "flex");
	$(".fonch").hide();

	// При клике на кнопку Гамбургер
	// запускается код внутри function
	$(".hamburger").on("click", function () {
		/*console.log ("Клик по кнопке гамбургер")*/

		/*$(".header-menu").show();

		console.log(
			"Видимость меню после клика по кнопке Гамбургер",
			$(".header-menu").is(":visible")
		);*/

		// Если меню отображается
		if ( $(".header-menu").is(":visible") ) {

			// Скрываем меню
			$(".header-menu")./*hide*/fadeOut(500);
			$(".hamburger").removeClass('is-active');
		}	

		// Иначе (если меню скрыто)
		else {

			// Показываем меню
			$(".header-menu")./*show*/slideDown(700, "easeInOutCubic");
		    $(".hamburger").addClass('is-active');
		}
	});

	// При наведении на товар
	$(".catalog-item").on("mouseenter", function () {
		
        // Показываем всплывающий элемент
		/*$(".fonch").show();*/

		$(this).find(".fonch").show(500, "easeOutExpo");
	});

	// При уходе с товара
	$(".catalog-item").on("mouseleave", function () {
		        
		// Скрываем всплывающий элемент
		/*$(".fonch").hide();*/
		$(this).find('.fonch').hide(500);
	});

	// Fotorama
	$(".fotorama").fotorama({
		"nav": "none",
		"width": "100%",
		"allowfullscreen": true,
		"loop": true
	});

	/*$('.yor-culass').slick({
	    prevArrow: '<button>Prev</button>',
	    nextArrow: '<button>Next</button>'
	});*/

	// Параллакс
	$(".parallaxpicture").parallax({
		"imageSrc": "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",

		"speed": 0.3
	});

    // Карусель в шапке
    $('#js-carousel-1').owlCarousel({
       "items": 1,
       "loop": true,
       "nav": true,
       "responsiveClass": true,
       "dots": true,
       "navText": ["<img src='images/arrowleft.png'>", "<img src='images/arrowright.png'>"
       
       ]

    /*   "responsive": {
       	// breakpoint from 0 up
       	0 : {
       	    "dots": true			    
       	},

       	// breakpoint from 555 up
       	555 : {
       	    "dots": false
       	}       
       }
*/
       /*"responsive": {*/
       	// breakpoint from 0 up
       	/*0 : {
       	    "owl-next": {
       	    	top: 250
       	    }

       	    "owl-prev": {
       	    	top: 250
       	    }			    
       	} */      
    });

    /*$('#js-carousel-1').each(function () {

      // Создаем карусель
      var owl = $(this).find('.owl-carousel').owlCarousel();

      // При клике по кнопке Влево
      $(this).find('.js-prev').on('click', function () {
        // Перематываем карусель назад
        owl.trigger('prev.owl.carousel');
      });

      // При клике по кнопке Вправо
      $(this).find('.js-next').on('click', function () {
        // Перематываем карусель вперед
        owl.trigger('next.owl.carousel');
      });
    });*/

    // Карусель Наш проект
    $('#js-carousel-2').owlCarousel({
       "items": 1,
       "loop": true,
       "nav": true,
       "responsiveClass": true,
       "dots": true, 
       "navText": ["<img src='images/arrowleft.png'>", "<img src='images/arrowright.png'>"
       
       ],

       responsive: {
       	465: {
       		items: 2
       	},

       	780: {
       		items: 3
       	},

       	1000: {
       		items: 4
       	} 
       } 

    });

	// Карусель
	$(".owl-carousel").owlCarousel({
		"items": 2,
		"loop": true,
		"autoplay": true,
    "dots": true,
    "nav": true,
	/*	"navContainer": ".carousel-buttons",
		"navText": [ "Назад", "Вперед" ],*/

		"responsive": {
			// breakpoint from 0 up
			0 : {
			    "items": 1,
			    "loop": false			    
			},

			// breakpoint from 480 up
			480 : {
			    "items": 2
			},

			// breakpoint from 768 up
			768 : {
			    "items": 3
			}    
		}

	});

	 // Отмена анимации на телефоне
	 // Если это телефон
	 if (window.innerWidth < 400) {

		$(".person-1,  .person-2, .person-3").css('left', 0);		
	 }
     
     $(window).on("scroll", function() {

       console.log("Прокрутка");

       // Положение человека сверху
       var personTop1 = $(".person-1").offset().top;
       var personTop2 = $(".person-2").offset().top;
       var personTop3 = $(".person-3").offset().top;

       // Положение прокрутки
       var scrollTop = $(window).scrollTop();

       console.log("personTop1", personTop1);
       console.log("personTop2", personTop2);
       console.log("personTop3", personTop3);
       console.log("scrollTop", scrollTop);

       // Если подошло место
       if (scrollTop >= personTop1 - 300) {

       	setTimeout(function () {

       		$(".person-1").animate({
       		       "left": "0px"
       		}, 450);

       	}, 300);

          
       }

       if (scrollTop >= personTop2 - 300) {

         setTimeout(function () {

           	$(".person-2").animate({
           	       "left": "0px"
           	}, 450);

         }, 600);
       }

       if (scrollTop >= personTop3 - 300) {

         setTimeout(function () {

             $(".person-3").animate({
             	       "left": "0px"
             }, 450);

         }, 900);
       }

     });

     // Плавная прокрутка до якоря
     /*jQuery(document).ready(function() {*/
       $("a.scrollto").click(function () {
       elementClick = $(this).attr("href")
       destination = $(elementClick).offset().top - 100; // - 100 - это до якоря с отступом, если перекрывает меню
       $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
       return false;
       });

   /*    $(window).on("scroll", function () {
           var scrolled = $(this).scrollTop();
           if( scrolled > 150 ) {
               $(".header-line-fixed").addClass("scrolled");
           }   
           if( scrolled <= 150 ) {     
               $(".header-line-fixed").removeClass("scrolled");
           }
       });

*/   // Как сделать скроллинг, плавную анимацию шапки
       $(window).scroll(function() {
          if ($(this).scrollTop() > 1) {
          $('.header-line-fixed').addClass('navScroll');
          }
          else{
          $('.header-line-fixed').removeClass('navScroll');
          }
       });

});

// Каталог товаров

// Конец каталога товаров