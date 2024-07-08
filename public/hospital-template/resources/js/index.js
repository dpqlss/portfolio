$(document).ready(function(){
    let currentIndex = 0;
    const images = $('#section-5 ul li img').addClass('small-img');
    const totalImages = images.length;

    function updateMainImage(index){
        const newSrc = images.eq(index).attr("src");
        const mainImg = $("#main-img");

        mainImg.attr("src", newSrc); // 큰 이미지 src 변경
        setSmallImagesOpacity(index);
        currentIndex = index;
    }

    function setSmallImagesOpacity(activeIndex) {
        images.removeClass('active');
        images.eq(activeIndex).addClass('active');
    }

    function slideImage(index, direction) {
        const mainImg = $("#main-img");
        const newSrc = images.eq(index).attr("src");

        const cloneImg = mainImg.clone().attr("src", newSrc);

        if (direction === 'next') {
            cloneImg.css({ left: '100%' });
            mainImg.after(cloneImg);
            mainImg.animate({ left: '-100%' }, 500);
            cloneImg.animate({ left: '0%' }, 500, function() {
                mainImg.remove();
                cloneImg.attr("id", "main-img");
                setSmallImagesOpacity(index);
                currentIndex = index;
            });
        } else if (direction === 'prev') {
            cloneImg.css({ left: '-100%' });
            mainImg.after(cloneImg);
            mainImg.animate({ left: '100%' }, 500);
            cloneImg.animate({ left: '0%' }, 500, function() {
                mainImg.remove();
                cloneImg.attr("id", "main-img");
                setSmallImagesOpacity(index);
                currentIndex = index;
            });
        }
    }

    $(".pre").click(function(){
        const newIndex = (currentIndex - 1 + totalImages) % totalImages;
        slideImage(newIndex, 'prev');
    });

    $(".next").click(function(){
        const newIndex = (currentIndex + 1) % totalImages;
        slideImage(newIndex, 'next');
    });

    images.click(function(){
        const index = images.index(this); // 클릭한 이미지의 인덱스를 가져옴
        const direction = index > currentIndex ? 'next' : 'prev';
        slideImage(index, direction);
    });

    // 메뉴를 위한 이벤트 추가
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const menuBg = document.querySelector('.menu-bg');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show-box');
        menuBg.classList.toggle('show-bg');
    });

    // 메뉴 외부를 클릭했을 때 메뉴를 닫는 기능 추가
    menuBg.addEventListener('click', function () {
        menu.classList.remove('show-box');
        menuBg.classList.remove('show-bg');
    });
});
