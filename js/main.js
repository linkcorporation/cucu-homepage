$(function () {
  "use strict";

  // =====================================================
  // FORM VALIDATION
  // =====================================================
  $("#form").parsley();

  // Clear parsley empty elements
  if ($("#form").length > 0) {
    $("#form")
      .parsley()
      .on("field:success", function () {
        $("ul.parsley-errors-list").not(":has(li)").remove();
      });
  }

  // =====================================================
  // PRELOADER
  // =====================================================
  function anim1() {
    $("html").removeClass("is-preload");
  }

  function anim2() {
    $(".cucu-photo-frame").addClass("cucu-active");
    $(".cucu-big-menu .cucu-photo-frame").removeClass("cucu-active");
  }

  function anim3() {
    $(".cucu-big-menu .cucu-photo-frame").toggleClass("cucu-active");
  }
  $(document).ready(function () {
    setTimeout(anim1, 1500);
    $(".cucu-loader").addClass("cucu-active");
    setTimeout(anim2, 2000);
  });

  
  // =====================================================
  // LINK SCROLL
  // =====================================================
  $('#page-link a[href*="#"]').on("click", function () {
    var elmHash = $(this).attr("href");
    var pos = $(elmHash).offset().top;
    $("body,html").animate({ scrollTop: pos }, 500);
    return false;
  });

  $('#contact-btn a[href*="#"]').on("click", function () {
    var elmHash = $(this).attr("href");
    var pos = $(elmHash).offset().top;
    $("body,html").animate({ scrollTop: pos }, 500);
    return false;
  });

  //スクロールした際の動きを関数でまとめる
  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      //上から200pxスクロールしたら
      $("#page-top").removeClass("RightMove"); //#page-topについているRightMoveというクラス名を除く
      $("#page-top").addClass("LeftMove"); //#page-topについているLeftMoveというクラス名を付与
    } else {
      if ($("#page-top").hasClass("LeftMove")) {
        //すでに#page-topにLeftMoveというクラス名がついていたら
        $("#page-top").removeClass("LeftMove"); //LeftMoveというクラス名を除き
        $("#page-top").addClass("RightMove"); //RightMoveというクラス名を#page-topに付与
      }
    }
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).on("scroll", function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });

  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });

  // #page-topをクリックした際の設定
  $("#page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0, //ページトップまでスクロール
      },
	  300,"easeInOutQuint"
    ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });

  // =====================================================
  // RSS FEED
  // =====================================================
  /**
   * 文字列からHTMLタグを除去する
   * @param {string} text - HTMLタグを除去する文字列
   * @return {string} HTMLタグ除去後の文字列
   */
  const getSimpleText = text => {
    const element = document.createElement('div');
    element.innerHTML = text;
    const anchors = element.getElementsByTagName("a");
    for (let index = 0; index < anchors.length; index++) {
      anchors[index].remove();
    }
    const brs = element.getElementsByTagName("br");
    for (let index = 0; index < brs.length; index++) {
      brs[index].remove();
    }
    const imgs = element.getElementsByTagName("img");
    for (let index = 0; index < imgs.length; index++) {
      imgs[index].remove();
    }
    const result = element.textContent;
    element.remove();
    return result;
  }
  const getInstaLink = text => {
    const element = document.createElement('div');
    element.innerHTML = text;
    const anchors = element.getElementsByTagName("a");
    const result = anchors[0].getAttribute('href');
    element.remove();
    return result;
  }
  window.onload = async function () {
    // rss feed を取得
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://cucu-81.tumblr.com/rss');
    const data = await res.json();
    // アイテムを１個ずつ表示
    for (let i = 0; i < 3; i++){
      const item = data.items[i];
      console.log(item); 
      const thumbnail = item.thumbnail;
      const pubDate = item.pubDate; 
      const description = getSimpleText(item.description);
      const instaUrl = getInstaLink(item.description);
      // const title = item.title; 
      // const link = item.link;
      // // const ins_link = data.items[i].description.substring(indexOf("<a href=") + 2, indexOf(">") - 1);
      const innerHTML = `
      <div class="cucu-g-33 cucu-md-50 cucu-sm-100">
        <a href="${instaUrl}" target="_blank" class="cucu-blog-card">
          <div class="cucu-photo-frame cucu-active">
            <img src="${thumbnail}" alt="photo">
          </div>
          <div class="cucu-post-text">
            <div class="cucu-date">${pubDate}</div>
            <p>${description}</p>
          </div>
        </a>
      </div>
      `;
      document.getElementById('cucu-news-rss').innerHTML += innerHTML;
    }
  };


  // =============================================x========
  // SWUP
  // =====================================================
  const options = {
    containers: ["#cucu-dynamic-content"],
    animateHistoryBrowsing: true,
    linkSelector: "a:not([data-no-swup])",
  };
  const swup = new Swup(options);

  // =====================================================
  // FANCYBOX
  // =====================================================
  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    backFocus: false,
  });
  $.fancybox.defaults.hash = false;

  // =====================================================
  // MOBILE HEIGHT FIX
  // =====================================================
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // =====================================================
  // MENU
  // =====================================================
  $(".cucu-menu-btn").on("click", function () {
    $(".cucu-menu-btn , .cucu-big-menu-frame, .cucu-big-menu").toggleClass(
      "cucu-active"
    );
    $(".cucu-top-bar-frame").toggleClass("cucu-menu-opened");
    setTimeout(anim3, 300);
  });

  $(".cucu-fs-menu .cucu-has-children").on("click", function () {
    $(".cucu-fs-menu .cucu-has-children ul").removeClass("cucu-active");
    $(this).children("ul").addClass("cucu-active");
  });

  // =====================================================
  // SLIDERS
  // =====================================================
  var swiper = new Swiper(".cucu-slider-1s", {
    slidesPerView: 1,
    speed: 1200,
    parallax: true,
    pagination: {
      el: ".cucu-pagination",
      type: "fraction",
    },
    navigation: {
      prevEl: ".cucu-prev",
      nextEl: ".cucu-next",
    },
  });

  var swiper = new Swiper(".cucu-slider-3s", {
    slidesPerView: 3,
    initialSlide: 1,
    speed: 1200,
    centeredSlides: true,
    parallax: true,
    navigation: {
      prevEl: ".cucu-prev",
      nextEl: ".cucu-next",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      768: {
        initialSlide: 0,
        spaceBetween: 40,
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".cucu-banner-slider", {
    slidesPerView: 1,
    speed: 800,
    parallax: true,
    loop: true,
    effect: "fade",
    pagination: {
      el: ".cucu-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
    navigation: {
      prevEl: ".cucu-prev",
      nextEl: ".cucu-next",
    },
  });

  var swiper = new Swiper(".cucu-slideshow", {
    slidesPerView: 1,
    speed: 1200,
    parallax: true,
    effect: "fade",
    pagination: {
      el: ".cucu-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 4000,
    },
    navigation: {
      prevEl: ".cucu-prev",
      nextEl: ".cucu-next",
    },
  });

  // =====================================================
  // REINIT
  // =====================================================
  document.addEventListener("swup:contentReplaced", function () {
    // =====================================================
    // FORM VALIDATION
    // =====================================================
    $("#form").parsley();

    // Clear parsley empty elements
    if ($("#form").length > 0) {
      $("#form")
        .parsley()
        .on("field:success", function () {
          $("ul.parsley-errors-list").not(":has(li)").remove();
        });
    }

    // =====================================================
    // START ANIMATONS
    // =====================================================
    if ($("html").hasClass("is-rendering")) {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        {
          duration: 0,
          complete: function () {},
        }
      );
    }
    $(".cucu-photo-frame").removeClass("cucu-active");
    setTimeout(anim2, 300);

    // =====================================================
    // FANCYBOX
    // =====================================================
    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      backFocus: false,
    });
    $.fancybox.defaults.hash = false;

    // =====================================================
    // MOBILE HEIGHT FIX
    // =====================================================
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // =====================================================
    // MENU
    // =====================================================
    $(".cucu-menu-btn").on("click", function () {
      $(".cucu-menu-btn , .cucu-big-menu-frame, .cucu-big-menu").toggleClass(
        "cucu-active"
      );
      $(".cucu-top-bar-frame").toggleClass("cucu-menu-opened");
      setTimeout(anim3, 300);
    });

    $(".cucu-fs-menu .cucu-has-children").on("click", function () {
      $(".cucu-fs-menu .cucu-has-children ul").removeClass("cucu-active");
      $(this).children("ul").addClass("cucu-active");
    });

    // =====================================================
    // SLIDERS
    // =====================================================
    var swiper = new Swiper(".cucu-slider-1s", {
      slidesPerView: 1,
      speed: 1200,
      parallax: true,
      pagination: {
        el: ".cucu-pagination",
        type: "fraction",
      },
      navigation: {
        prevEl: ".cucu-prev",
        nextEl: ".cucu-next",
      },
    });

    var swiper = new Swiper(".cucu-slider-3s", {
      slidesPerView: 3,
      initialSlide: 1,
      speed: 1200,
      centeredSlides: true,
      parallax: true,
      navigation: {
        prevEl: ".cucu-prev",
        nextEl: ".cucu-next",
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
        768: {
          initialSlide: 0,
          spaceBetween: 40,
          slidesPerView: 1,
        },
      },
    });

    var swiper = new Swiper(".cucu-banner-slider", {
      slidesPerView: 1,
      speed: 800,
      parallax: true,
      loop: true,
      effect: "fade",
      pagination: {
        el: ".cucu-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
      },
      navigation: {
        prevEl: ".cucu-prev",
        nextEl: ".cucu-next",
      },
    });

    var swiper = new Swiper(".cucu-slideshow", {
      slidesPerView: 1,
      speed: 1200,
      parallax: true,
      effect: "fade",
      pagination: {
        el: ".cucu-pagination",
        type: "fraction",
      },
      autoplay: {
        delay: 4000,
      },
      navigation: {
        prevEl: ".cucu-prev",
        nextEl: ".cucu-next",
      },
    });
  });
});
