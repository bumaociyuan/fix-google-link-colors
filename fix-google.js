// ==UserScript==
// @name         Fix google colors
// @namespace    http://twitter.com/brabidou
// @version      0.1
// @description  Fixes google link colors back to normal
// @author       @BRabidou
// @include      https://www.google.com/search*
// @include      http://www.google.com/search*
// @include      https://www.google.tld/search*
// @include      http://www.google.tld/search*
// @include      https://*.google.tld/search*
// @include      http://*.google.tld/search*
// @updateURL    https://github.com/brabidou/fix-google-link-colors/blob/master/fix-google.js
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
