/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var projectAanmelden = document.querySelector('#projectidee');
var stageAanmelden = document.querySelector('#stagebedrijf');
var beideAanmelden = document.querySelector('#beide');

var projectForm = document.querySelector('#project');
var stageForm = document.querySelector('#stage');

var uitvouwen1 = function() {
    if (projectAanmelden.checked == true) {
        projectForm.classList.remove('project');
        stageForm.classList.add('stage');
    }

};

var uitvouwen2 = function() {
    if (stageAanmelden.checked == true) {
        stageForm.classList.remove('stage');
        projectForm.classList.add('project');
    }
};

var uitvouwen3 = function() {
    if (beideAanmelden.checked == true) {
        projectForm.classList.remove('project');
        stageForm.classList.remove('stage');
    }
};

projectAanmelden.addEventListener('click', uitvouwen1);
stageAanmelden.addEventListener('click', uitvouwen2);
beideAanmelden.addEventListener('click', uitvouwen3);

var pijlLezen = document.querySelector('#pijl');
var tevoorschijn = document.querySelector('.overige');

var Togglemenu = function() {
    return tevoorschijn.classList.toggle('overige');
};

pijlLezen.addEventListener('click', Togglemenu);
