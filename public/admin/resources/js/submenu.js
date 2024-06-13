$(document).ready(function() {
    $('#userDropdown').click(function(event) {
        event.preventDefault(); // 기본 이벤트 방지
        $('.dropdown-menu').toggle(); // display 속성을 토글
    });
});