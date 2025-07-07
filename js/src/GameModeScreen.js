var GameModeScreen = (function () {
    'use strict';

    var init = function () {
        gsap.fromTo(
            "#game-mode-menu button",
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.333,
                stagger: 0.05,
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