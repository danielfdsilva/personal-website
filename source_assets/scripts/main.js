(function(){
  window.onload = function docOnLoad() {
  
    var projectsNodelist = document.querySelectorAll('.project-index .js-open');
    // Because of the trap in the htmlCollection, convert it
    // to a friendly array.
    // http://blog.cluster-text.com/2013/04/29/a-trap-when-looping-on-getelementsbyclassname/
    var projectsIndex = [].slice.call(projectsNodelist);
    
    projectsIndex.forEach(function(projItem) {
      var id = projItem.getAttribute('href');
      var proj = document.querySelector(id);

      projItem.addEventListener('click', function(e) {
        e.preventDefault();
        if (!proj.className.match(/revealed/)) {
          proj.className = proj.className + ' revealed';
        }
      }, false);
      
      proj.querySelector('.js-close').addEventListener('click', function(e) {
        e.preventDefault();
        proj.className = proj.className.replace(/ ?revealed/, '');
      }, false);
    });
    
    document.addEventListener('keyup', function(e) {
      // Esc key
      if (e.keyCode == 27) {
        var modals = document.querySelectorAll('.project.revealed');
        for(var i = 0; i< modals.length; i++) {
          modals[i].className = modals[i].className.replace(/ ?revealed/, '');
        }
      }
    });

  };
})();