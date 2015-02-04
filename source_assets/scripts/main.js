(function(){
  window.onload = function docOnLoad() {
  
    var projectsHTMLCollection = document.getElementsByClassName('project');
    // Because of the trap in the htmlCollection, convert it
    // to a friendly array.
    // http://blog.cluster-text.com/2013/04/29/a-trap-when-looping-on-getelementsbyclassname/
    var projects = [].slice.call(projectsHTMLCollection);
    
    projects.forEach(function(project) {

      project.querySelector('.js-open').addEventListener('click', function(e) {
        e.preventDefault();
        if (!project.className.match(/revealed/)) {
          project.className = project.className + ' revealed';
        }
      }, false);
      
      project.querySelector('.js-close').addEventListener('click', function(e) {
        e.preventDefault();
        project.className = project.className.replace(/ ?revealed/, '');
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