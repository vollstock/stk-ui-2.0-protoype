var Button = (function () {
    'use strict';

    var init = function (element) {

        element.addEventListener("mouseenter", (e) => {
            e.target.focus();
        });

        element.addEventListener("focus", (e) => {
            new Audio(App.config.button.hoverSound).play();
            Focus.focus(e.target);
        });

        element.addEventListener("mouseleave", (e) => {
            e.target.blur();

        });

        element.addEventListener("blur", (e) => {
            // new Audio("audio/kenney_ui-audio/Audio/mouserelease1.ogg").play();
            Focus.blur();
        });

        element.addEventListener("pointerdown", (e) => {
            new Audio(App.config.button.clickSound).play();
            // new Audio("audio/kenney_ui-audio/Audio/switch18.ogg").play();
        });

        element.addEventListener("pointerup", (e) => {
            if (e.target.dataset.successSound) {
                new Audio(App.config.button.successSound).play();
            }
            else if (e.target.dataset.cancelSound) {
                new Audio(App.config.button.cancelSound).play();
            }
            else if (e.target.dataset.errorSound) {
                new Audio(App.config.button.errorSound).play();
            }
        });
    }

    return {
        init: init
    }
})();