import TaskServices from "../../shared/services/tasks-services";
const spanSuffix = "_span",
    rightMark = "&#10004;",
    wrongMark = "&#10008;";
class DefineObjectsValidator {    
    constructor(currentTask){        
        document.getElementById(this.objects[0].id).focus();
        for (let i = 0; i < this.objects.length; i++) {
            let element = document.getElementById(this.objects[i].id);
            let spanElement = document.createElement('span');
            spanElement.id = element.id + spanSuffix;
            spanElement.style.fontSize = "32px";
            spanElement.style.position = 'absolute';
            spanElement.style.top = element.style.top.replace("px", "") * 1 + 5 + "px";
            spanElement.style.left = element.style.left.replace("px", "") * 1 + 5 + element.offsetWidth + "px";
            element.parentElement.appendChild(spanElement);
        }        
        this.currentTask=currentTask;
    }
    objects = [{ id: "monitor", rightText: "монитор" },
    { id: "mouse", rightText: "тінтуір" },
    { id: "board", rightText: "пернетақта" },
    { id: "block", rightText: "жүйелік блок" }
    ];
    validate() {                    
            var currentTaskObservable=TaskServices.getInstance().CurrentTask;
            var rightAnswers = 0;
            for (var i = 0; i < this.objects.length; i++) {
                var val = document.getElementById(this.objects[i].id).value
                var spanElement = document.getElementById(this.objects[i].id + spanSuffix);
                if (val.trim().toLowerCase() === this.objects[i].rightText.toLowerCase()) {
                    rightAnswers++;
                    spanElement.innerHTML = rightMark;
                    spanElement.style.color = "green";
                } else {
                    spanElement.innerHTML = wrongMark;
                    spanElement.style.color = "red";
                }
            }
            this.currentTask.RightAnswer=rightAnswers;
            currentTaskObservable.next(this.currentTask);            
    }
}
export default DefineObjectsValidator;