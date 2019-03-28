/**
 * @fileoverview Handler for liquid templates
 * @author Alberto Yanes
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


var preProcess = function(text, filename) {
    var replaced = 
    text
        .replace(/{%(.*?)%}/g, '\/* Ignored Liquid Computation */')

    return [replaced];  // return an array of strings to lint
}

var postProcess = function(messages, filename) {
    return messages[0];
}

// import processors
module.exports.processors = {
    ".html": {
        preprocess: preProcess,
        postprocess: postProcess
    },
    ".js": {
        preprocess: preProcess,
        postprocess: postProcess
    },
    ".css": {
        preprocess: preProcess,
        postprocess: postProcess
    }
};

