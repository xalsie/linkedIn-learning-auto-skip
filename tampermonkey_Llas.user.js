// ==UserScript==
// @name         linkedIn-learning-auto-skip
// @namespace    https://github.com/xalsie/
// @version      0.1
// @description  linkedIn learning video fix auto skip
// @author       🐻｜LeGrizzly#0341
// @match        https://*.linkedin.com/learning/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// ==/UserScript==

(function() {
    var vjs = document.getElementById("vjs_video_3");
    var elem = document.getElementsByClassName("vjs-control vjs-button vjs-next-button")[0];
    var inSkip = false;

    setInterval(() => {
        if (vjs == null) {
            vjs = document.getElementById("vjs_video_3");
        }
        if (elem == null) {
            elem = document.getElementsByClassName("vjs-control vjs-button vjs-next-button")[0];
        }

        if (vjs != null && elem != null) {
            if (!inSkip && vjs.player.paused() === true) {
                alert("video en pause !");
                vjs.player.play();
            }

            if (vjs.player.duration() == 0) {
                console.log("video pas charge");
            } else {
                inSkip = false;
                if (vjs.player.currentTime() > (vjs.player.duration()*0.97)) {
                    // video suivante
                    inSkip = true;
                    elem.click();
                }
            }
        }
    }, 250)
})();
