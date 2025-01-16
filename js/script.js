
window.addEventListener('DOMContentLoaded', function() {
    const tabs = require("./modules/tabs"),
        modal = require("./modules/modal"),
        calc = require("./modules/calc"),
        cards = require("./modules/cards"),
        slider = require("./modules/slider"),
        timer = require("./modules/timer"),
        forms = require("./modules/forms");

    tabs()
    modal()
    calc()
    slider()
    timer()
    forms()
    cards()
});

