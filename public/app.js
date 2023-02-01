$(document).ready(() => {
   $('body > nav').addClass("nav-colored");

   $('ul.navItems > li > a').click(function (e) {
      $('ul.navItems > li > a').removeClass('active');
      $(this).addClass('active');
   });

   let scrollLink = $('.scroll');
   scrollLink.click((e) => {
      e.preventDefault();
      $('body,html').animate({
         scrollTop: $(this.hash).offset().top
      }, 2000);
   })

   $(window).scroll(() => {
      let scrollbarLocation = $(this).scrollTop();
      scrollLink.each(() => {
         let sectionOffset = $(this.hash).offset().top - 20;
         if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
         }
      })
   })

   $(document).scroll(function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < getPosition('.sec-about')) {
         $('body > nav').removeClass("nav-colored");
         $('body > nav').addClass("nav-transparent");
      } else {
         $('body > nav').addClass("nav-colored");
         $('body > nav').removeClass("nav-transparent");
      }

      if (parseInt(scrollTop) >=parseInt(getPosition('.sec-portfolio'))) {
         $('.navItems > li > .a-home').removeClass('active');
         $('.navItems > li > .a-about').removeClass('active');
         $('.navItems > li > .a-work').addClass('active');
      } else if (scrollTop >= getPosition('.sec-about')) {
         $('.navItems > li > .a-home').removeClass('active');
         $('.navItems > li > .a-work').removeClass('active');
         $('.navItems > li > .a-about').addClass('active');
      } else {
         $('.navItems > li > .a-about').removeClass('active');
         $('.navItems > li > .a-work').removeClass('active');
         $('.navItems > li > .a-home').addClass('active');
      }
   })
})

function getPosition(element) {
   let position = $(`${element}`).first()
   return position.position().top;
}

function onClick() {
   document.getElementById("active").checked = false;
}