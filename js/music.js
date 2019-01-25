var ipcRenderer = require('electron').ipcRenderer;
var dirname = null;
ipcRenderer.on('dirname', function (event,dir) {
    console.log(dir);
    dirname = dir;
});

// After iFrames load, inject custom css into the head of the document 
window.onload = function() {
    let path = dirname;

    $.ajax({
        url: path + "\\css\\style.css",
        dataType: "text",
        success: function(cssText) {
            // console.log(cssText);
            var css = document.createElement("style");
            css.type = "text/css";
            var t = document.createTextNode(cssText);
            css.appendChild(t);

            frames['soundcloud'].contentDocument.head.appendChild(css);
            // frames['spotify'].contentDocument.head.appendChild(css);
        }
    });

    console.log(path + "\\css\\style.css");
};



window.onload = updateGrabberHeight();

function updateGrabberHeight() {
    let contentsHeight = $(".music-contents").height();
    console.log(contentsHeight);
    $(".grabber").css("bottom", 100 + contentsHeight);
}

function expandMusic(event) {
    console.log(event.screenX);
    // $("#soundcloud").addClass("expanded");
    // $("#spotify").addClass("expanded");
}
