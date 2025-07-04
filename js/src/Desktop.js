var Desktop = (function () {
    'use strict';

    var desktop = null;
    var appIcon = null;

    var init = function () {

        this.desktop = document.querySelector("#desktop");
        this.desktop = document.querySelector("#desktop");
        this.desktop.addEventListener("pointerdown", (e) => {
            Desktop.setAppIconFocus(false);
            e.stopPropagation();
        });

        this.appIcon = document.querySelector(".app-icon");
        this.appIcon.addEventListener("pointerdown", (e) => {
            Desktop.setAppIconFocus(true);
            e.stopPropagation();
        });
        this.appIcon.addEventListener("dblclick", (e) => {
            Desktop.startApp();
        });

    }

    var setAppIconFocus = function (state) {
        this.appIcon.classList.toggle("focussed", state);
    }

    var startApp = function () {
        this.setAppIconFocus(false);
        
        gsap.to(this.appIcon, {
            scale: 3,
            opacity: 0,
            duration: 0.333,
            onComplete: function () {
                App.load('#title-screen-template');
            }
        })
    }

    var hide = function () {
    }

    return {
        init: init,
        hide: hide,
        setAppIconFocus: setAppIconFocus,
        startApp: startApp,
        appIcon: appIcon
    }
})();