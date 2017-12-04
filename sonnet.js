let sonnetDiv = document.getElementById('sonnet').innerHTML


let orphanIndex = sonnetDiv.search('orphans');
console.log(orphanIndex)
let charNum = sonnetDiv.length;
console.log(charNum);

document.getElementById('sonnet').innerHTML = sonnetDiv.replace(/the /g, 'a large ').replace("winter", "yuletide");

