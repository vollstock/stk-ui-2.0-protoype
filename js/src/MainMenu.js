var MainMenu = (function () {
    'use strict';

    var init = function () {
        gsap.fromTo(
            "#main-menu .background",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.666,
            }
        );

        gsap.fromTo(
            "#player-menu button",
            {
                opacity: 0,
                left: -120
            },
            {
                opacity: 1,
                left: 0,
                stagger: 0.1,
                duration: 0.333,
                ease: "back"
            }
        )
    }

    var hide = function () {
    }

    return {
        init: init,
        hide: hide
    }
})();