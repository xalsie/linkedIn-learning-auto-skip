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