var TitleScreen = (function () {
    'use strict';

    var init = function () {
        if (App.config.music.autoplay) App.music.play();

        gsap.fromTo(
            "#title-screen .background",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 2,
            }
        );

        gsap.fromTo(
            "#title-screen .logo, #title-screen .loading",
            {
                opacity: 0,
                scale: 0.9
            },
            {
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                delay: 0.166,
                duration: 0.5,
                ease: "back"
            }
        );

        gsap.to(
            "#title-screen .loading .progress .slider",
            {
                width: "100%",
                duration: 1.5,
                delay: 1,
                ease: "linear",
                onComplete: finishLoading
            }
        );
    }

    var finishLoading = function () {
        gsap.to(
            "#title-screen .loading",
            {
                opacity: 0,
                duration: 0.5,
                delay: 0.333
            }
        );

        gsap.fromTo(
            "#title-screen .start-button",
            {
                opacity: 0,
                scale: 0.9
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                delay: 0.333,
                ease: "back",
                onComplete: function () {
                    let b = document.querySelector("#title-screen .start-button");
                    Focus.focus(b);
                    b.focus();
                    
                }
            }
        );

        gsap.to(
            "#title-screen .start-button",
            {
                color: "var(--color-grey-2)",
                repeat: -1,
                yoyo: true,
                yoyoEase: "power1.inOut",
                duration: 0.666
            }
        );


    }

    var hide = function () {
    }

    return {
        init: init,
        hide: hide
    }
})();