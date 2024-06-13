$(document).ready(function(){
    $('.sublist-box').hide(); 

    // header-gnbitem 또는 sublist-box에 마우스가 들어가면 서브메뉴 표시
    $('.header-gnbitem, .sublist-box').hover(
        function() {
            $(this).find('.sublist-box').stop(true, true).slideDown(400); // 서브메뉴 표시
        },
        function() {
            $(this).find('.sublist-box').stop(true, true).slideUp(400); // 서브메뉴 숨김
        }
    );

    $('.mobile-menu').on('click', function() {
        const $gnbList = $('.header-gnbitem');
        if ($gnbList.css('display') === 'none') {
            $gnbList.css('display', 'block');
            $('.header-menu').css('position','absolute');
            $('.header-menu').css('height','100vh');
        } else {
            $gnbList.css('display', 'none');
            $('.header-menu').css('position','relative');
            $('.header-menu').css('height','100px');
        }
    });
    
    $('.center').hide(); // 모든 center 요소를 숨깁니다.
    $('.center1').show(); // 처음에 center1을 표시합니다.

    $('.tab-menu button').on('click', function() {
        const centerToShow = $(this).data('center');
        
        $('.center').hide(); // 모든 center 요소를 숨깁니다.
        $('.' + centerToShow).show(); // 선택한 center 요소를 표시합니다.
        
        $('.tab-menu ul li').removeClass('active'); // 모든 탭에서 active 클래스를 제거합니다.
        $(this).parent().addClass('active'); // 클릭한 버튼의 부모 li에 active 클래스를 추가합니다.
    });
});