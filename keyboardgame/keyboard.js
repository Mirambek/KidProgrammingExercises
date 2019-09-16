    var wrongTyped = 0;
    var rightTyped = 0;
    var text1 = "a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a";
    var textToTypeId = "text-to-type";
    var textToTypeElement = document.getElementById(textToTypeId);
    var typingResult = document.getElementById("typing-result");
    textToTypeElement.innerHTML = text1;
    var currentRightlyTypedPosition = 0;
    var pressedWithinTimeLimitTypeCorrectly = 0;
    var startGame = function () {
        textToTypeElement.innerHTML = text1.substr(0, currentRightlyTypedPosition)
            + "<span style='border:solid 1px black;'>"
            + text1.substr(currentRightlyTypedPosition, 1) + "</span>"
            + text1.substr(currentRightlyTypedPosition + 1);
        var startedTime = (new Date()).getTime();
        document.addEventListener('keypress', function (ev) {
            var key = ev.keyCode;
            var char = String.fromCharCode(key);
            var pressedTime = (new Date()).getTime();
            if (char === text1[currentRightlyTypedPosition]) {
                if (Math.abs(startedTime - pressedTime) <= 5000) {
                    pressedWithinTimeLimitTypeCorrectly++;
                }
                rightTyped = rightTyped + 1;
                currentRightlyTypedPosition++;
                textToTypeElement.innerHTML = text1.substr(0, currentRightlyTypedPosition)
                    + "<span style='border:solid 1px black;'>"
                    + text1.substr(currentRightlyTypedPosition, 1) + "</span>"
                    + text1.substr(currentRightlyTypedPosition + 1);
                typingResult.innerHTML = text1.substr(0, currentRightlyTypedPosition);
                
                var listStars = document.getElementById("right-stars").getElementsByTagName("span");
                
                    
                    for (var i = 0; i < listStars.length; i++) {
                    if (currentRightlyTypedPosition%6===0)
                    
                    listStars[currentRightlyTypedPosition/6-1].style.color = '#ffc700';
                    
                }
            } else {
                wrongTyped++;
            }
            startedTime = (new Date()).getTime();
        });
    }
