const spanSuffix="_span";
const rightMark="&#10004;";
const wrongMark="&#10008;";
var objects = [ { id: "monitor", rightText: "монитор" }, 
                { id: "mouse", rightText: "тінтуір" }, 
                { id: "board", rightText: "пернетақта" }, 
                { id: "block", rightText: "жүйелік блок" }
              ];
              document.getElementById(objects[0].id).focus();
for (var i = 0; i < objects.length; i++) {
     var element=document.getElementById(objects[i].id);
     var spanElement = document.createElement('span');     
     spanElement.id=element.id+spanSuffix;
     spanElement.style.fontSize="32px";
     spanElement.style.position=element.style.position;
     spanElement.style.top=element.style.top.replace("px","")*1+5+"px";
     spanElement.style.left=element.style.left.replace("px","")*1+5+element.offsetWidth+"px";
     element.parentElement.appendChild(spanElement);
}
document.getElementById("validateButton").addEventListener("click", function (ev) {
    var rightAnswers = 0;
    for (var i = 0; i < objects.length; i++) {
        var val = document.getElementById(objects[i].id).value
        var spanElement=document.getElementById(objects[i].id+spanSuffix);
        if (val.trim().toLowerCase() === objects[i].rightText.toLowerCase()) {
            rightAnswers++;
            spanElement.innerHTML=rightMark;
            spanElement.style.color="green";
        } else {
            spanElement.innerHTML=wrongMark;
            spanElement.style.color="red";
        }
    }
    var listStars = document.getElementById("right-stars").getElementsByTagName("span");
    for (var i = 0; i < listStars.length; i++) {
        if (i + 1 <= rightAnswers)
            listStars[i].style.color = '#ffc700';
        else
            listStars[i].style.color = '#ccc';
    }
    document.getElementById("right-stars").getElementsByTagName("h3")[0].innerHTML=" Дұрыс жауаптар("+rightAnswers+"):";
});