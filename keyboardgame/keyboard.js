var wrongTyped = 0;
var rightTyped = 0;
var currentIndex = 0;
var tasks = ["a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a",
    "ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao",
    "abc abc abc abc abc abc abc abc abc abc abc abc abc ab"];
var textToTypeId = "text-to-type";
var textToTypeElement = document.getElementById(textToTypeId);
var typingResult = document.getElementById("typing-result");
var text1 = tasks[currentIndex];
var currentRightlyTypedPosition = 0;
var pressedWithinTimeLimitTypeCorrectly = 0;
var startedTime;
var getTime = document.getElementById("time");
var getTime1 = document.getElementById("time-1");
var getTime2 = document.getElementById("time-2");
var timeIndex = 1;


var makeRectangleExpectedLetter = function () {
    if(!text1){
        return;
    }
    textToTypeElement.innerHTML = text1.substr(0, currentRightlyTypedPosition)
        + "<span style='border:solid 1px black;'>"
        + text1.substr(currentRightlyTypedPosition, 1) + "</span>"
        + text1.substr(currentRightlyTypedPosition + 1);
}

var startGame = function (ev) {
    ev.disabled = true;
    reset();
    startedTime = (new Date()).getTime();

}
function reset() {
    document.removeEventListener('keypress', keyPressFunc);
    startedTime = (new Date()).getTime();
    text1 = tasks[currentIndex];
    typingResult.innerHTML = "";
    currentRightlyTypedPosition = 0;
    pressedWithinTimeLimitTypeCorrectly = 0;
    makeRectangleExpectedLetter();
    document.addEventListener('keypress', keyPressFunc);

}
function keyPressFunc(ev) {
    var key = ev.keyCode;
    var char = String.fromCharCode(key);
    var pressedTime = (new Date()).getTime();
    if (char === text1[currentRightlyTypedPosition]) {
        if (Math.abs(startedTime - pressedTime) <= 5000) {
            pressedWithinTimeLimitTypeCorrectly++;
        }
        rightTyped = rightTyped + 1;
        currentRightlyTypedPosition++;
        makeRectangleExpectedLetter();
        typingResult.innerHTML = text1.substr(0, currentRightlyTypedPosition);

        var listStars = document.getElementById("right-stars").getElementsByTagName("span");
        var seperator=Math.floor( text1.length/10);
        
        if (currentRightlyTypedPosition %  seperator=== 0){
            
            
            listStars[currentRightlyTypedPosition / seperator - 1].style.color = '#ffc700';
        }
        
    } else {
        wrongTyped++;
    }
    if (tasks[currentIndex].length===currentRightlyTypedPosition) {

        var diffInSeconds = ((new Date()).getTime() - startedTime) / 1000;
        var timeTaking = timeIndex + ")  " + Math.floor(diffInSeconds / 60) + " минут " + diffInSeconds % 60 + " секунд";
        document.removeEventListener('keypress', keyPressFunc);
                
                timeIndex++;
                if(timeIndex === 2){
                getTime.innerHTML = timeTaking;
                }
                if (timeIndex === 3) {
                    getTime1.innerHTML = timeTaking;
                } if (timeIndex === 4) {
                    getTime2.innerHTML = timeTaking;
                }

        setTimeout(function () {
            if (tasks.length-1== currentIndex)
                alert('Barekeldi oin bitti');
            else 
            {
            if (confirm("Тағыда ойнау")) {
                var listStars = document.getElementById("right-stars").getElementsByTagName("span");
                for (var i = 0; i < listStars.length; i++) {
                    listStars[i].style.color = '#ccc';
                }
                currentIndex++;
                
                reset();

                // 1)reset Stars
                // 2)reset Task 
                // 3)reset result
            } else {
                
                document.getElementById("startGame").removeAttribute("disabled");
            }
         }
        }, 100);
    }
    //startedTime = (new Date()).getTime();
};