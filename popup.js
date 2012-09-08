function init(){
  var hash = document.location.hash.substr(1);
  var frameworks = JSON.parse(decodeURIComponent(hash));
  var ul = document.getElementById('frameworks');
  frameworks.forEach(function(framework) {
    var li = document.createElement('li');
    li.textContent = framework.name;
    if (framework.version) {
      var version = document.createElement('span');
      version.textContent = ' (' + framework.version + ')';
      li.appendChild(version);
    }
    ul.appendChild(li);
  });
}
document.addEventListener('DOMContentLoaded', init, false);
