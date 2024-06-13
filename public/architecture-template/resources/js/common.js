// box-N1
(function() {
  $(function() {
    $(".box-N1").each(function() {
      const $block = $(this);
      // Header Scroll
      $(window).on("load scroll", function() {
        const $thisTop = $(this).scrollTop();
        if ($thisTop > 0) {
          $block.addClass("header-top-active");
        } else {
          $block.removeClass("header-top-active");
        }
      });
      // Gnb
      $block.find(".header-center").on("mouseover", function() {
        if (window.innerWidth > 992) {
          $block.addClass("block-active");
        }
      });
      $block.find(".header-center").on("mouseout", function() {
        if (window.innerWidth > 992) {
          $block.removeClass("block-active");
        }
      });
      // Gnb DecoLine
      $block.find(".header-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").removeClass("on");
          }
        });
      });
      // Mobile Top
      $block.find(".btn-momenu").on("click", function() {
        $block.addClass("mo-active");
      });
      $block.find(".btn-moclose").on("click", function() {
        $block.removeClass("mo-active");
      });
      // Mobile Gnb
      $block.find(".header-gnbitem").each(function() {
        const $this = $(this);
        const $thislink = $this.find(".header-gnblink");
        $thislink.on("click", function() {
          if (!$(this).parent().hasClass("item-active")) {
            $(".header-gnbitem").removeClass("item-active");
          }
          $(this).parents(".header-gnbitem").toggleClass("item-active");
        });
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
      // Header Mobile 1Depth Click
      if (window.innerWidth <= 992) {
        $block.find(".header-gnbitem").each(function() {
          const $gnblink = $(this).find(".header-gnblink");
          const $sublist = $(this).find(".header-sublist");
          if ($sublist.length) {
            $gnblink.attr("href", "javascript:void(0);");
          }
        });
      }
    });
  });
})();

// box-N1
(function() {
  $(function() {
    $(".box-N1").each(function() {
      const $block = $(this);
      // Header Scroll
      $(window).on("load scroll", function() {
        const $thisTop = $(this).scrollTop();
        if ($thisTop > 250) {
          $block.addClass("header-top-active");
        } else {
          $block.removeClass("header-top-active");
        }
      });
      // Gnb
      $block.find(".header-center").on("mouseover", function() {
        if (window.innerWidth > 992) {
          $block.addClass("block-active");
        }
      });
      $block.find(".header-center").on("mouseout", function() {
        if (window.innerWidth > 992) {
          $block.removeClass("block-active");
        }
      });
      // Gnb DecoLine
      $block.find(".header-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").removeClass("on");
          }
        });
      });
      // Mobile Top
      $block.find(".btn-momenu").on("click", function() {
        $block.addClass("mo-active");
      });
      $block.find(".btn-moclose").on("click", function() {
        $block.removeClass("mo-active");
      });
      // Mobile Gnb
      $block.find(".header-gnbitem").each(function() {
        const $this = $(this);
        const $thislink = $this.find(".header-gnblink");
        $thislink.on("click", function() {
          if (!$(this).parent().hasClass("item-active")) {
            $(".header-gnbitem").removeClass("item-active");
          }
          $(this).parents(".header-gnbitem").toggleClass("item-active");
        });
      });
      //햄버거 버튼 클릭했을때 2차메뉴 보이기
      $block.find(".fullmenu-gnblink").on("click", function(event) {
        event.preventDefault(); // 링크의 기본 동작을 중지

        let currentSublist = $(this).parent().find('.fullmenu-sublist'); // 현재 클릭된 링크의 하위 메뉴
        let isOpen = currentSublist.is(":visible"); // 현재 하위 메뉴가 보이는지 확인

        // 모든 하위 메뉴를 부드럽게 접음
        $('.fullmenu-sublist').slideUp();

        // 현재 선택된 하위 메뉴가 닫혀 있으면 열기
        if (!isOpen) {
            currentSublist.slideDown();
        }
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
      // Header Mobile 1Depth Click
      if (window.innerWidth <= 992) {
        $block.find(".header-gnbitem").each(function() {
          const $gnblink = $(this).find(".header-gnblink");
          const $sublist = $(this).find(".header-sublist");
          if ($sublist.length) {
            $gnblink.attr("href", "javascript:void(0);");
          }
        });
      }
    });
  });
})();

//메인페이지 평면정보 슬라이드
(function() {
  function moveSlide() {
      let firstSlide = $('.slick-track .slick-slide:first');
      firstSlide.animate({marginLeft: '-=400px'}, 500, function() { 
          $(this).css('marginLeft', '0px').appendTo('.slick-track');
      });
  }
  setInterval(moveSlide, 3000);
})();