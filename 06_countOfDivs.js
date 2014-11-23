'use strict';

function countDivs(html) {
    return html.split('<div').length - 1;
}

console.log(countDivs('<!DOCTYPE html>\
<html>\
<head lang="en">\
<meta charset="UTF-8">\
<title>index</title>\
<script src="/yourScript.js" defer></script>\
</head>\
<body>\
<div id="outerDiv">\
<div\
class="first">\
<div><div>hello</div></div>\
</div>\
<div>hi<div></div></div>\
<div>I am a div</div>\
</div>\
</body>\
</html>'));

console.log(countDivs('<!DOCTYPE html>\
<html>\
<head>\
<title>SoftUni Student Before Exam</title>\
<meta charset="UTF-8">\
<meta name="viewport" content="width=device-width, initial-scale=1.0">\
<link type="text/css" rel="stylesheet" href="student-before-exam.css" />\
</head>\
<body>\
<div id="container">\
<div class="eyes" id="leftEye">\
<div class="pupils" id="leftPupil"></div>\
</div>\
<div  class="eyes" id="rightEye">\
<div class="pupils"></div>\
</div>\
<div id="nose"></div>\
<div id="mouth">\
<div class="teeth" id="leftTooth"></div>\
<div class="teeth" id="rightTooth"></div>\
</div>\
</div>\
</body>\
</html>'));