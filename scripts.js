const linkImgHoverToLink = (id) => {
    $(id).hover(() => {
        $(id + "Link").css("color", "olive");
    }, () => {
        $(id + "Link").css("color", "black");
    });
    //this second one needs to be here because .css will override
    //any pseudo-elements (i.e. a:hover)
    $(id + "Link").hover(() => {
        $(id + "Link").css("color", "olive");
    }, () => {
        $(id + "Link").css("color", "black");
    });
}

$(document).ready(() => {
    console.log($("#main"));
    $("#main").children().each((index, child) => {
        console.log(child);
        linkImgHoverToLink("#" + child.attributes["id"].value);
    });
});