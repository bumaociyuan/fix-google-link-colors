// ==UserScript==
// @name         Fix google colors
// @namespace    http://github.com/brabidou
// @version      0.2
// @description  Fixes google link colors back to normal
// @author       You
// @match        https://www.google.com/search*
// @match        http://www.google.com/search*
// @updateURL    https://raw.githubusercontent.com/brabidou/fix-google-link-colors/master/fix-google.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    addGlobalStyle('a:link { color: #1a0dab; }');
    addGlobalStyle('a:visited { color: #609; }');
})();
