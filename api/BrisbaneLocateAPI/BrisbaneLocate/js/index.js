var initialHash = true;

var loadMap = function (from, destination, success, error) {
    window.location.hash = "#map";
    var isPrivateBike = $("#citycycle-checkbox").prop('checked');
    beginPlan(from, destination, !isPrivateBike);
    
    var goButton = $("#go-button");
    goButton.removeClass('fa-spinner');
    goButton.removeClass('fa-pulse');
    goButton.addClass('fa-bicycle');
};

var onMapLoadSuccess = function(data) {
};

var onMapLoadError = function(data) {
    alert(data.message);
};

window.onload = function () {
    window.location.hash = '#home';
    
    //else if (window.location.hash == '') {
    //    window.location.hash = '#home';
    //} else {
    //    initialHash = false;
    //    $(window).trigger('hashchange');
    //}

    $("#go-button-wrapper").on('click', function (e) {
        var goButton = $("#go-button");
        goButton.removeClass('fa-bicycle');
        goButton.addClass('fa-spinner');
        goButton.addClass('fa-pulse');

        loadMap($('#from-text').val(), $('#destination-text').val(), onMapLoadSuccess, onMapLoadError);
    });

    var bottom = $("#content-home").offset().top + $("#content-home").outerHeight(true);
    $("#bg-image").height(Math.max(window.innerHeight, bottom));
    $("#map").height(window.innerHeight * 0.7);
};

$(window).on('hashchange', function(e) {
    e.preventDefault();
    if (initialHash) {
        initialHash = false;
        return;
    }
    if (window.location.hash) {
        var target = window.location.hash.substring(1);
        target = '#content-' + target;

        $('.current').fadeOut(200);
        $('.current').removeClass('current');
        $(target).fadeIn(200);
        $(target).addClass('current');
    }
    if (window.location.hash === "#map") {
        showMap();
    }
});

