document.addEventListener(`DOMContentLoaded`, function () {
  let ww = window.innerWidth;
  let cursorEventAdded = false;

  function addCursorEvent() {
    if (cursorEventAdded) return; // 이미 이벤트가 추가되었으면 실행하지 않음
    cursorEventAdded = true;

    // 커스텀 커서 DOM 제어
    const prefix = (() => {
      const a = window.getComputedStyle(document.documentElement, "");
      const b = (Array.prototype.slice
        .call(a)
        .join("")
        .match(/-(moz|webkit|ms)-/) ||
        ("" === a.OLink && ["", "o"]))[1];
      return `-${b}-`;
    })();

    $(document).mousemove(function (e) {
      const mouseX = e.pageX + 15;
      const mouseY = e.pageY - $(window).scrollTop() + 15;
      $(".theBall-outer").attr(
        "style",
        `${prefix}transform:translate(${mouseX}px,${mouseY}px)`
      );
    });

    $(".bl")
      .mouseenter(function () {
        $(".theBall-outer").addClass("zoom");
      })
      .mouseleave(function () {
        $(".theBall-outer").removeClass("zoom");
      });

    $(".bl2").hover(
      function () {
        $(".theBall-outer").addClass("zoom2");
      },
      function () {
        $(".theBall-outer").removeClass("zoom2");
      }
    );

    $(".bl3").hover(
      function () {
        $(".theBall-outer").addClass("zoom3");
      },
      function () {
        $(".theBall-outer").removeClass("zoom3");
      }
    );
  }

  function removeCursorEvent() {
    if (!cursorEventAdded) return; // 이벤트가 추가되지 않았으면 실행하지 않음 return 그냥반환
    cursorEventAdded = false;

    // 커스텀 커서 이벤트 제거
    $(document).off("mousemove");
    $(".bl, .bl2, .bl3").off("mouseenter mouseleave hover");
    $(".theBall-outer").removeAttr("style").removeClass("zoom zoom2 zoom3");
  }

  function cursorEvent() {
    if (ww >= 600) {
      addCursorEvent();
    } else {
      removeCursorEvent();
    }
  }

  cursorEvent(); // 초기 실행

  window.addEventListener(`resize`, () => {
    ww = window.innerWidth;
    cursorEvent();
  });

  const subMenuBtn = document.querySelector(`.hambur_box`);
  const subMenu = document.querySelector(`.sub_menu`);
  const headerArea = document.querySelector(`.header_area`);

  subMenuBtn.addEventListener(`click`, function () {
    subMenu.classList.toggle(`on`);
    subMenuBtn.classList.toggle(`on`);
    headerArea.classList.toggle(`active`);
  });

  const tabBtns = document.querySelectorAll(`.sub_menu .sub_menu_left a`);

  for (const tabBtn of tabBtns) {
    tabBtn.addEventListener(`mouseenter`, function () {
      const tab = this.getAttribute(`data-tab`);
      const tabBox = document.querySelectorAll(
        `.sub_menu .sub_menu_right .tabbox div`
      );

      for (const tabContent of tabBox) {
        tabContent.classList.remove(`active`);
      }

      const changeTab = document.querySelector(`#${tab}`);
      changeTab.classList.add(`active`);
    });
  }

  //banner img
  const ani1 = gsap.timeline();
  ani1
    .to(".banner_area .banner_img img", { scale: 1.3, duration: 10 })
    .to(".banner_area .banner_img img", { autoAlpha: 0 });

  ScrollTrigger.create({
    animation: ani1,
    trigger: ".banner_area",
    start: "top top",
    end: "+=450",
    scrub: 0.5,
    abticipatePin: 1,
    // markers: true
  });

  // .section_2 sun
  const ani2 = gsap.timeline();
  ani2.to(".section_2 .centerbox .bottom > svg", {
    rotation: 360,
    duration: 2,
  });
  ScrollTrigger.create({
    animation: ani2,
    trigger: ".section_2",
    start: "-=250",
    end: "bottom",
    scrub: 0.7,
    abticipatePin: 1,
    // markers: true
  });

  // product
  const ani3 = gsap.timeline();
  ani3.from(".section_3 .product a", { xPercent: -20 });
  // .to(".section_5 .sec5_top a",{xPercent: -20})
  ScrollTrigger.create({
    animation: ani3,
    trigger: ".section_3",
    start: "-=1000",
    end: "100",
    scrub: 0.5,
    abticipatePin: 1,
    // markers: true
  });

  // chat
  const ani4 = gsap.timeline();
  ani4.from(".section_5 .sec5_top a", { xPercent: 20 });
  ScrollTrigger.create({
    animation: ani4,
    trigger: ".section_5",
    start: "-=1000",
    end: "100",
    scrub: 0.5,
    abticipatePin: 1,
    // markers: true
  });

  const ani5 = gsap.timeline();
  ani5.to(".banner_area .banner_bottom .banner_left .banner_subtext svg", {
    rotation: 360,
    duration: 2,
  });
  ScrollTrigger.create({
    animation: ani5,
    trigger: ".banner_left",
    start: "-=500",
    end: "bottom",
    scrub: 0.9,
    abticipatePin: 1,
    // markers: true
  });

  gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: { scrub: 0.3 },
  });
});
