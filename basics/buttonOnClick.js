function createButtons() {
    // or use let here to solve it - var is encapsulated to
    // the function, whereas let is encapsulated to the confining brackets
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;

        // This solution will always be 6 because it gets overridden
        // button.onclick = function() {
        //     alert('This is button ' + i);
        // }

        // Iife works to solve this
//          (function(num) {
//             button.onclick = function() {
//               console.log(num);
//               alert('This is button ' + num);
//          }
//          })(i);

        addClickFunctionality(button, i);
        body.appendChild(button);
    }
}

createButtons();

function addClickFunctionality(button, num) {
    button.onclick = function () {
        console.log(num);
        alert('This is button ' + num);
    }
}