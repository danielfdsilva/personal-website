/* global ga */
(function () {
  window.onload = function docOnLoad () {
    docSelect('.project-index .js-open').forEach(function (projItem) {
      var id = projItem.getAttribute('href');
      var proj = document.querySelector(id);

      projItem.addEventListener('click', function (e) {
        e.preventDefault();
        if (!proj.className.match(/revealed/)) {
          proj.className = proj.className + ' revealed';
        }
      }, false);

      proj.querySelector('.js-close').addEventListener('click', function (e) {
        e.preventDefault();
        proj.className = proj.className.replace(/ ?revealed/, '');
      }, false);
    });

    document.addEventListener('keyup', function (e) {
      // Esc key
      if (e.keyCode === 27) {
        var modals = document.querySelectorAll('.project.revealed');
        for (var i = 0; i < modals.length; i++) {
          modals[i].className = modals[i].className.replace(/ ?revealed/, '');
        }
      }
    });

    // ////////////////////////////////////////////////
    // Additional tracking for google analytics.
    // All the external links not tracked by something else. (gat-*) class.
    docSelect('a[rel="external"]:not([class*="gat-"])').forEach(function (item) {
      item.addEventListener('click', function () {
        var dest = this.getAttribute('href');
        ga('send', 'event', 'Link', 'External', dest);
      });
    });

    // Project modal was opened
    docSelect('.gat-proj-modal-open').forEach(function (item) {
      item.addEventListener('click', function () {
        var dest = this.getAttribute('href');
        ga('send', 'event', 'Project', 'Modal', dest);
      });
    });

    // External project link clicked.
    docSelect('.gat-proj-open').forEach(function (item) {
      item.addEventListener('click', function () {
        var dest = this.getAttribute('href');
        ga('send', 'event', 'Project', 'Open', dest);
      });
    });
  };

  // ///////////////////////////////////////////////
  // Helper functions

  /**
   * Selects from the document
   */
  function docSelect (selector) {
    // Because of the trap in the htmlCollection, convert it
    // to a friendly array.
    // http://blog.cluster-text.com/2013/04/29/a-trap-when-looping-on-getelementsbyclassname/
    var extLinksNodelist = document.querySelectorAll(selector);
    return [].slice.call(extLinksNodelist);
  }
})();
