document.addEventListener(`DOMContentLoaded`,function(){

  //cursor 가져오기
  $(function() {
    var prefix = function() {
      var a = window.getComputedStyle(document.documentElement, ""),
        b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
      return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
    }();
    //마우스커서 따라다니게끔 설정하기
    $(document).mousemove(function(e) {
        mouseX = e.pageX + 15;
        mouseY = e.pageY - $(window).scrollTop() + 15;
        $('.theBall-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');
    });
      
  })

  //cursor change
  $('.bl').mouseenter(function(){
    $('.theBall-outer').addClass('zoom');
  });
  $('.bl').mouseleave(function(){
      $('.theBall-outer').removeClass('zoom');
  });

  $('.bl2').hover(function(){
      $('.theBall-outer').addClass('zoom2');
  },function(){
      $('.theBall-outer').removeClass('zoom2');
  });

  $('.bl3').hover(function(){
      $('.theBall-outer').addClass('zoom3');
  },function(){
      $('.theBall-outer').removeClass('zoom3');
  });



    const subMenuBtn = document.querySelector(`.hambur_box`);
    const subMenu = document.querySelector(`.sub_menu`);
    const headerArea = document.querySelector(`.header_area`);

    subMenuBtn.addEventListener(`click`,function(){
        subMenu.classList.toggle(`on`);
        subMenuBtn.classList.toggle(`on`);
        headerArea.classList.toggle(`active`);
    });


    const tabBtns = document.querySelectorAll(`.sub_menu .sub_menu_left a`);

    for(const tabBtn of tabBtns){
      tabBtn.addEventListener(`mouseenter`,function(){
        const tab = this.getAttribute(`data-tab`);
        const tabBox = document.querySelectorAll(`.sub_menu .sub_menu_right .tabbox div`);
  
        for(const tabContent of tabBox){
          tabContent.classList.remove(`active`);
        }
  
        const changeTab = document.querySelector(`#${tab}`);
        changeTab.classList.add(`active`);
      });
    }

    //banner img
    const ani1 = gsap.timeline();
    ani1.to(".banner_area .banner_img img",{scale: 1.3, duration: 10,})
        .to(".banner_area .banner_img img",{autoAlpha: 0})

    ScrollTrigger.create({
        animation: ani1,
        trigger: ".banner_area",
        start:"top top",
        end: "+=450",
        scrub: 0.5,
        abticipatePin: 1,
        // markers: true
    });

    // .section_2 sun
    const ani2 = gsap.timeline();
    ani2.to(".section_2 .centerbox .bottom > svg", {rotation: 360, duration: 2})
    ScrollTrigger.create({
      animation: ani2,
      trigger: ".section_2",
      start:"-=250",
      end: "bottom",
      scrub: 0.7,
      abticipatePin: 1,
      // markers: true
  });

  // product
    const ani3 = gsap.timeline();
    ani3.from(".section_3 .product a",{xPercent: -20})
        // .to(".section_5 .sec5_top a",{xPercent: -20})
    ScrollTrigger.create({
        animation: ani3,
        trigger: ".section_3",
        start:"-=1000",
        end: "100",
        scrub: 0.5,
        abticipatePin: 1,
        // markers: true
    });

  // chat
  const ani4 = gsap.timeline();
    ani4.from(".section_5 .sec5_top a",{xPercent: 20})
    ScrollTrigger.create({
        animation: ani4,
        trigger: ".section_5",
        start:"-=1000",
        end: "100",
        scrub: 0.5,
        abticipatePin: 1,
        // markers: true
    });

    const ani5 = gsap.timeline();
    ani5.to(".banner_area .banner_bottom .banner_left .banner_subtext svg", {rotation: 360, duration: 2})
    ScrollTrigger.create({
      animation: ani5,
      trigger: ".banner_left",
      start:"-=500",
      end: "bottom",
      scrub: 0.9,
      abticipatePin: 1,
      // markers: true
  });

  gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: { scrub: 0.3 }
  });

});
