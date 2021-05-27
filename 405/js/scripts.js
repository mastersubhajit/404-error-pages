$(document).ready(function() {

    // Scroll View Demo
    $(".header").on("click", ".demo", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    // SVG Man
    if (document.getElementById('errorman')) {
        var svg = Snap("#errorman");
        Snap.load("assets/img/man.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Panda
    if (document.getElementById('panda-error')) {
        var svg = Snap("#panda-error");
        Snap.load("assets/img/panda.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Dog
    if (document.getElementById('dog-error')) {
        var svg = Snap("#dog-error");
        Snap.load("assets/img/dog.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Neanderthal
    if (document.getElementById('neanderthal-error')) {
        var svg = Snap("#neanderthal-error");
        Snap.load("assets/img/neanderthal.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Astronaut
    if (document.getElementById('astronaut-error')) {
        var svg = Snap("#astronaut-error");
        Snap.load("assets/img/astronaut.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Blind Boy
    if (document.getElementById('blind-boy')) {
        var svg = Snap("#blind-boy");
        Snap.load("assets/img/blind-boy.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Child With Box
    if (document.getElementById('child-with-box-svg')) {
        var svg = Snap("#child-with-box-svg");
        Snap.load("img/404-child-with-box.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG TV
    if (document.getElementById('tv-svg')) {
        var svg = Snap("#tv-svg");
        Snap.load("img/tv.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Screen TV
    if (document.getElementById('screen-svg')) {
        var svg1 = Snap("#screen-svg");
        Snap.load("img/screen.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg1.append(g);
        });
    }

    // SVG Saw
    if (document.getElementById('saw-svg')) {
        var svg = Snap("#saw-svg");
        Snap.load("assets/img/saw.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Crocodile
    if (document.getElementById('crocodile-svg')) {
        var svg = Snap("#crocodile-svg");
        Snap.load("img/crocodile.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Balloon
    if (document.getElementById('balloon-svg')) {
        var svg = Snap("#balloon-svg");
        Snap.load("assets/img/balloon.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

    // SVG Bear
    if (document.getElementById('bear-svg')) {
        var svg = Snap("#bear-svg");
        Snap.load("assets/img/bear.svg", function(f) {
            g = f.select("g");
            g.attr({
                transform: 't0,0 s1'
            });
            svg.append(g);
        });
    }

});
