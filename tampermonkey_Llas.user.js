// ==UserScript==
// @name         linkedIn-learning-auto-skip
// @description  linkedIn learning video fix auto skip
// @version      0.2
// @author       🐻｜LeGrizzly#0341
// @namespace    https://github.com/xalsie/linkedIn-learning-auto-skip/
// @match        https://*.linkedin.com/learning/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// ==/UserScript==

(function() {
    var debug = false;
    var inSkip = false;

    setInterval(() => {
        if (getVjs() != null && getNextBtn() != null) {
            if (!inSkip && getVjs().paused === true) {
                log("DETECT video en pause", "- play");
                getVjs().play();
            }

            inSkip = false;
            if (getVjs().currentTime > (getVjs().duration*0.97)) {
                log("DETECT video en pause", "- next");
                inSkip = true;
                getNextBtn().click();
                setTimeout(() => {}, 1000);
            }
        }
    }, 500)

    function getVjs() {
        return document.querySelectorAll("video")[0] ?? null;
    }

    function getNextBtn() {
        return document.getElementsByClassName("vjs-control vjs-button vjs-next-button")[0] ?? null;
    }

    function log(error, message) {
        if (debug) console.log(error, message);
    }
})();