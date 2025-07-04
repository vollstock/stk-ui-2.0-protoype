var Focus = (function () {
    'use strict';

    var element = null;

    var init = function (element) {
        this.element = document.createElement("div");
        this.element.id = "focus";

        for (let i = 0; i < 4; i++) {
            let corner = document.createElement("div");
            corner.className = "corner";
            this.element.append(corner);
        }

        document.body.append(this.element);
    }

    var focus = function (element) {

        let offset = cumulativeOffset(element);
        let border = parseInt(window.getComputedStyle(element, null).borderWidth);

        this.element.style.width = element.clientWidth + "px";
        this.element.style.height = element.clientHeight + "px";
        this.element.style.left = offset.left + border + "px";
        this.element.style.top = offset.top + border + "px";

        this.element.classList.toggle("small", element.classList.contains("small"));
        this.element.classList.toggle("text", element.classList.contains("text"));
        this.element.classList.add("active");
    }

    var blur = function () {
        this.element.classList.remove("active");
    }

    var cumulativeOffset = function (element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top: top,
            left: left
        };
    };

    return {
        init: init,
        focus: focus,
        blur: blur,
    }
})();