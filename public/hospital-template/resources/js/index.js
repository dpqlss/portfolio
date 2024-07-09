$(document).ready(function () {
  let currentIndex = 0;
  const images = $("#section-5 ul li img").addClass("small-img");
  const totalImages = images.length;

  function updateMainImage(index) {
    const newSrc = images.eq(index).attr("src");
    const mainImg = $("#main-img");

    mainImg.attr("src", newSrc); // 큰 이미지 src 변경
    setSmallImagesOpacity(index);
    currentIndex = index;
  }

  function setSmallImagesOpacity(activeIndex) {
    images.removeClass("active");
    images.eq(activeIndex).addClass("active");
  }

  function slideImage(index, direction) {
    const mainImg = $("#main-img");
    const newSrc = images.eq(index).attr("src");

    const cloneImg = mainImg.clone().attr("src", newSrc);

    if (direction === "next") {
      cloneImg.css({ left: "100%" });
      mainImg.after(cloneImg);
      mainImg.animate({ left: "-100%" }, 500);
      cloneImg.animate({ left: "0%" }, 500, function () {
        mainImg.remove();
        cloneImg.attr("id", "main-img");
        setSmallImagesOpacity(index);
        currentIndex = index;
      });
    } else if (direction === "prev") {
      cloneImg.css({ left: "-100%" });
      mainImg.after(cloneImg);
      mainImg.animate({ left: "100%" }, 500);
      cloneImg.animate({ left: "0%" }, 500, function () {
        mainImg.remove();
        cloneImg.attr("id", "main-img");
        setSmallImagesOpacity(index);
        currentIndex = index;
      });
    }
  }

  $(".pre").click(function () {
    const newIndex = (currentIndex - 1 + totalImages) % totalImages;
    slideImage(newIndex, "prev");
  });

  $(".next").click(function () {
    const newIndex = (currentIndex + 1) % totalImages;
    slideImage(newIndex, "next");
  });

  images.click(function () {
    const index = images.index(this); // 클릭한 이미지의 인덱스를 가져옴
    const direction = index > currentIndex ? "next" : "prev";
    slideImage(index, direction);
  });

  // 메뉴를 위한 이벤트 추가
  $(".menu-icon").click(function (event) {
    event.stopPropagation();
    const topMenu = $(".show-box");
    const topMenuIcon = $(this);

    topMenu.toggle();

    if (topMenu.is(":visible")) {
      $(".menu-bg").show();
      topMenuIcon.removeClass("fa-bars").addClass("fa-xmark");
    } else {
      $(".menu-bg").hide();
      topMenuIcon.removeClass("fa-xmark").addClass("fa-bars");
    }
  });

  $(".hidden-btn").click(function () {
    const quickMenu = $(".quick-menu ul");
    const icon = $(this).find("i");

    quickMenu.toggle();

    if (quickMenu.is(":visible")) {
      icon.removeClass("fa-chevron-left").addClass("fa-chevron-right");
    } else {
      icon.removeClass("fa-chevron-right").addClass("fa-chevron-left");
    }
  });
});
