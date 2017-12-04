let sonnetDiv = document.getElementById('sonnet').innerHTML


let orphanIndex = sonnetDiv.search('orphans');

let charNum = sonnetDiv.length;

 sonnetDiv = sonnetDiv.replace("winter", "yuletide");

 sonnetDiv = sonnetDiv.replace(/the /g, 'a large ');
  console.log(sonnetDiv);
