import modal from "./modules/modal";
import calc from "./modules/calc";
import cards from "./modules/cards";
import slider from "./modules/slider";
import timer from "./modules/timer";
import forms from "./modules/forms";
import tabs from "./modules/tabs";

window.addEventListener('DOMContentLoaded', function() {

    tabs();
    modal('[data-modal]', '.modal');
    calc();
    slider();
    timer();
    forms();
    cards();

});

