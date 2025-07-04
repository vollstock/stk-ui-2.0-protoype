var App = (function () {
    'use strict';

    var screen = null;
    var music = null;
    var currentTemplate = null;

    var config = {
        music: {
            src: "audio/menutheme_enhanced.ogg",
            volume: 0.5,
            autoplay: true
        },
        button: {
            hoverSound: "audio/kenney_interface-sounds/Audio/bong_001.ogg",
            clickSound: "audio/kenney_interface-sounds/Audio/click_002.ogg",
            successSound: "audio/kenney_interface-sounds/Audio/confirmation_001.ogg",
            errorSound: "audio/kenney_interface-sounds/Audio/minimize_006.ogg"
        }
    }

    var init = function () {

        this.screen = document.querySelector("#screen");

        this.music = document.querySelector("#music");
        this.music.src = this.config.music.src;
        this.music.volume = this.config.music.volume;

        // adding _this_ as event handler will result in the special 
        // handleEvent function being called
        document.addEventListener('keydown', this, false);

        Focus.init();

        this.load("#desktop-template");
    }

    var load = function (templateId) {
        Focus.blur();

        this.screen.innerHTML = "";
        const template = document.querySelector(templateId);
        const clone = template.content.cloneNode(true);
        this.screen.appendChild(clone);

        this.currentTemplate = templateId;

        // init button objects
        document.querySelectorAll('button').forEach((button, index) => {
            Button.init(button);
        });
    }

    var reload = function() {
        this.load(this.currentTemplate);
    }

    var toggleMusic = function () {
        if (this.music.paused)
            this.music.play();
        else
            this.music.pause();
    }

    var quit = function () {
        this.load('#desktop-template');
        this.music.pause();
        this.music.currentTime = 0;
    }

    var handleEvent = function (event) {
        switch (event.type) {
            case 'keydown':
                if (event.key === "m") this.toggleMusic();
                else if (event.key === "1") this.load("#title-screen-template");
                else if (event.key === "2") this.load("#main-menu-template");
                else if (event.key === "r") this.reload();
                else if (event.key === "Escape") this.quit();
                break;
        }
    };



    return {
        config: config,
        currentTemplate: currentTemplate,
        init: init,
        load: load,
        reload: reload,
        toggleMusic: toggleMusic,
        handleEvent: handleEvent,
        quit: quit
    }
})();

document.addEventListener('DOMContentLoaded', function () {
    App.init();
});
