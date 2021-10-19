// ==UserScript==
// @name         uestceduLearn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  刷课时
// @author       db117
// @match        http://learning.uestcedu.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log("开始学习");

    let interval = setInterval(main, 5 * 60 * 1000);

    function main() {
        let next = document.getElementById('btnNext');
        next.click();

    }


    // Your code here...
})();