// ==UserScript==
// @name         Rightmove Floorplans
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Only show properties with floor plans in Rightmove
// @author       Richard Leigh
// @match        http://*.rightmove.co.uk/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    sleep(500).then(() => {
        var infobars = document.querySelectorAll("a[data-test='property-floorplan-icon'].propertyCard-moreInfoItem");
        infobars.forEach(function(el) {
            try {
                if (el.style.display == "none") {
                    var wrapper = el.closest(".l-searchResult");
                    wrapper.style.display = "none";
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    });
})();