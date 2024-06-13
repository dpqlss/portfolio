(function(){
    $(function(){
        $('.box-N1').each(function(){
            const $block = $(this);
            // Header Scroll
            $(window).on('load scroll', function(){
                const $thisTop = $(this).scrollTop();
                if ($thisTop > 0) {
                    $block.addClass('header-top-active');
                } else {
                    $block.removeClass('header-top-active');
                }
            });
            //Gnb
            $block.find('.header-right').on('mouseover', function(){
                if (window.innerWidth > 992) {
                    $block.addClass('block-active');
                }
            });
            $block.find('.header-right').on('mouseout',function(){
                if (window.innerWidth > 992) {
                    $block.removeClass('block-active')
                }
            });
            // Gnb DecoLine 및 Sublist 표시
            $block.find(".header-gnbitem").each(function() {
                const $this = $(this);
                $this.on("mouseover", function() {
                    if (window.innerWidth > 992) {
                        $this.find(".header-gnblink").addClass("on");
                        $this.addClass("active");
                    }
                });
                $this.on("mouseout", function() {
                    if (window.innerWidth > 992) {
                        $this.find(".header-gnblink").removeClass("on");
                    }
                });
            });

            // sublist가 있을 때 mouseout 이벤트
            $block.find(".header-sublist").on("mouseover", function() {
                $(this).closest(".header-gnbitem").addClass("active");
            });

            $block.find(".header-sublist").on("mouseout", function() {
                $(this).closest(".header-gnbitem").removeClass("active");
            });
        });

        // 슬라이드 기능 추가
        function startAutoSlide() {
            const $slidesContainer = $('.visual-slides');// 전체 슬라이드를 감싸는 컨테이너
            const $slideItems = $('.visual-item');// 개별 슬라이드 항목
            const totalSlides = $slideItems.length;// 슬라이드의 총 개수
            let currentIndex = 0;// 현재 슬라이드 인덱스
            let slideInterval;

            function goToSlide(index) {
                const newLeft = -index * 100 + '%';
                $slidesContainer.css({
                    'transform': 'translateX(' + newLeft + ')',
                    'transition': 'transform 0.5s ease-in-out'
                });
            }

            function startSlider() {
                slideInterval = setInterval(function() {
                    currentIndex++;
                    if (currentIndex < totalSlides) {
                        goToSlide(currentIndex);
                    } else {
                        // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
                        goToSlide(0);
                        currentIndex = 0;
                    }
                }, 3000); // 3초마다 슬라이드 전환
            }

            startSlider();
        }
        startAutoSlide();

        $('.accordset-button').click(function() {
            const $thisBody = $(this).parent().next('.accordset-body');
            
            // 다른 모든 .accordset-body를 닫습니다.
            $('.accordset-body').not($thisBody).slideUp('slow');
            
            // 클릭된 .accordset-body를 토글합니다.
            $thisBody.slideToggle('slow');
        });
    });
})();
