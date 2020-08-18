const linkImgHoverToLink = (id, defaultColor) => {
    $(id).hover(() => {
        $(id + "Link").css("color", "olive");
    }, () => {
        $(id + "Link").css("color", defaultColor);
    });
    //this second one needs to be here because .css will override
    //any pseudo-elements (i.e. a:hover)
    $(id + "Link").hover(() => {
        $(id + "Link").css("color", "olive");
    }, () => {
        $(id + "Link").css("color", defaultColor);
    });
    $(id + "Link").css("color", defaultColor);
}

const colorOnResize = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (vw < 640) {
        iterateChildrenHover("white");
    }
    else {
        iterateChildrenHover("black");
    }
}

const iterateChildrenHover = (color) => {
    $("#main").children().each((index, child) => {
        linkImgHoverToLink("#" + child.attributes["id"].value, color);
    });
}

$(document).ready(() => {
    iterateChildrenHover("black");
    window.addEventListener("resize", colorOnResize);
});
