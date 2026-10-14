/* DANLIO Garage Door Repair — shared behaviours */
(function () {
  'use strict';

  // Mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // FAQ accordion — one open at a time
  var items = document.querySelectorAll('details.q');
  items.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) { return; }
      items.forEach(function (o) { if (o !== d) { o.open = false; } });
    });
  });

  // Lead form
  // NOTE FOR DEV: this is a front-end confirmation only. On the live WordPress
  // site, wire this form to the existing Elementor Pro form action so that
  // submissions reach the same inbox as the homepage form.
  var form = document.getElementById('leadform');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      btn.textContent = 'Thank you — we will call you shortly';
      btn.style.background = '#1E9E55';
      btn.disabled = true;
    });
  }
})();
