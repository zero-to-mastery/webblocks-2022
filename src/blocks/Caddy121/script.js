const button = $("button");
const ghost = $(".fa-ghost");

button.mouseover(function() {
    button.text("Halloween!");
    ghost.animate({ "margin-top": "100px" }, 1000);
});

button.mouseout(function() {
    button.text("is over.");
    ghost.hide(1000);
});
