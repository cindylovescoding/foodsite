// Custom Script
// Developed by: Samson.Onna
var customScripts = {
    profile: function () {

        if ($('.isotopeSort'.length)) {
            var $container = $('.isotopeSort');

            var $grid = $('.grid').isotope({
                getSortData: {
                  name: '.name',
                  symbol: '.symbol',
                  number: '.number parseInt',
                  category: '[data-category]',
                  weight: function( itemElem ) {
                    var weight = $( itemElem ).find('.weight').text();
                    return parseFloat( weight.replace( /[\(\)]/g, '') );
                  }
                }
              });
              
              // sort items on button click
              $('.sort-by-button-group').on( 'click', 'button', function() {
                var sortByValue = $(this).attr('data-sort-by');
                $grid.isotope({ sortBy: sortByValue });
              });

            // init isotope
            var $container = $container.isotope({
                itemSelector: '.isotopeSortItem',
                getSortData: {
                    name: '.name',
                    ranking: '.ranking parseInt',
                    weight: function( itemElem ) {
                      var weight = $( itemElem ).find('.weight').text();
                      return parseFloat( weight.replace( /[\(\)]/g, '') );
                    }
                  }
            });

            // sort items on button click
            $('.sort-by-button-group').on( 'click', 'button', function() {
                var sortByValue = $(this).attr('data-sort-by');
                $grid.isotope({ sortBy: sortByValue });
            });

            $('#sortByRanking a').click(function() {
                $container.isotope({
                    getSortData: {
                        name: '.name',
                        ranking: '.ranking parseInt'
                    },

                    sortBy: ['ranking']
                });
            });

            
            $('#sortByName a').click(function() {
                $container.isotope({
                    getSortData: {
                        name: '.name',
                        ranking: '.ranking parseInt'
                    },

                    sortBy: ['name']
                });
            });

        }

        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
			
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");               
                return false;
            });
            $('.navbar-inverse').on('click', 'li a', function () {                
                $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
            });
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });
                return false;
            });
            $(window).smartresize(function () {
                $container.isotope({
                    // update columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });
        }
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {
		if($('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').css('background','none');
		}
        $('#mainNav').onePageNav({        
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {

				
            },
            end: function () {

				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').addClass('addBg');
				}else{
						$('#main-nav').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').addClass('addBg');
				}else{
						$('#main-nav').removeClass('addBg');
				}
            }
        });
    },
    slider: function () {
        $('#da-slider').cslider({
            autoplay: true,
            bgincrement: 0
        });
    },
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.slider();
    }
}
$('document').ready(function () {
    customScripts.init();
});