(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


// GOOGLE MAPS

function initMap() {
    var atl = {lat: 33.820, lng: -84.381};
    var loc1 = {lat: 33.820, lng: -85.381};
    var loc2 = {lat: 34.820, lng: -84.381};
    var loc3 = {lat: 34.820, lng: -85.381};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: atl,
        scrollwheel:false,
        draggable:false
    });
    
    var markerA = new google.maps.Marker({
        position: loc1,
        map: map,
        label: 'A'
    });
    var markerB = new google.maps.Marker({
        position: loc2,
        map: map,
        label: 'B'
    });
    var markerC = new google.maps.Marker({
        position: loc3,
        map: map,
        label: 'C'
    });

    var infowindow = new google.maps.InfoWindow();

    markerA.addListener('click', function() {
        infowindow.setContent('<strong>Climbing Gym</strong>');
        infowindow.open(map, markerA); 
    })

    markerB.addListener('click', function() {
        infowindow.setContent('<strong>Climbing Gym</strong>');
        infowindow.open(map, markerB); 
    })
    markerC.addListener('click', function() {
        infowindow.setContent('<strong>Climbing Gym</strong>');
        infowindow.open(map, markerC); 
    })

}

