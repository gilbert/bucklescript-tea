// Generated by BUCKLESCRIPT VERSION 1.4.1 , PLEASE EDIT WITH CARE
'use strict';


function length($$window) {
  return $$window.history.length;
}

function back($$window) {
  return $$window.history.back;
}

function forward($$window) {
  return $$window.history.forward;
}

function go($$window, to$prime) {
  return $$window.history.go(to$prime);
}

function pushState($$window, state, title, url) {
  return $$window.history.pushState(state, title, url);
}

function replaceState($$window, state, title, url) {
  return $$window.history.replaceState(state, title, url);
}

function state($$window) {
  return $$window.history.state;
}

exports.length       = length;
exports.back         = back;
exports.forward      = forward;
exports.go           = go;
exports.pushState    = pushState;
exports.replaceState = replaceState;
exports.state        = state;
/* No side effect */