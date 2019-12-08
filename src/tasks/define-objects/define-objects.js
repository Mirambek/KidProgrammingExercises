import React, { PureComponent } from 'react'
import './define-objects.css'
import TaskServices from '../../shared/services/tasks-services';
import Tasks from '../../shared/models/tasks';
import TaskNum from '../../shared/models/task-enum';
import DefineObjectsValidator from './define-objects-business';
class DefineObjects extends PureComponent {
    constructor(props) {
        super(props);
        this.taskService = TaskServices.getInstance();
        this.state = {
        }
        this.validateTask=this.taskService.CurrentTask.getValue().Task;
    }
    componentDidMount() {        
        this.taskService.CurrentTask.next( Tasks[TaskNum.DefineObjects]);        
        this.currentTask=this.taskService.CurrentTask.getValue();
        this.validateTask=new DefineObjectsValidator(this.currentTask); ;        
    }
    inputStyle={
        border: 'solid #5c6ac4', 
        'border-radius': '1.6rem',
        position: 'absolute',
        'z-index': '1000',
        height: '45px',
        width: '167px',
        outline: 'none',
        'padding-left':".5rem"
    }
    render() {
        return (
            <div id="app-container">
                <div id="define-object-images" >
                    <div>
                        <img src="/computerobj.jpg" alt="" />
                        <input type="text" id="block" 
                        style={{...this.inputStyle,top: '16px', left: '0px'}}
                        />
                        <span  className="tool" 
                data-tip="Сүреттегі&nbsp;заттын атын еңгізініз" style={{position:'absolute',left:'25rem',top:'0.1rem'}}>&nbsp;</span>
                        <input type="text" id="monitor"
                        style={{...this.inputStyle,
                            top: '-1px',
                            left: '308px'}}/>
                        <input type="text" id="mouse"
                        style={{...this.inputStyle, top: '425px', left: '440px'}}
                        />
                        <input type="text" id="board"
                        style={{...this.inputStyle,top: '474px',left: '0px'}}/>
                    </div>
                    <div style={{'margin-left':'2rem',display:'inline-block',position:'absolute',top:'30%'}}>
                    <button id="validateButton" onClick={()=>{
                        this.validateTask.validate();   
                        if (this.currentTask.RightAnswer<this.currentTask.Tasks) 
                            alert(`${this.currentTask.Tasks-this.currentTask.RightAnswer} сұрақтар әлі дұрыс еңгізілмеді! ${this.currentTask.RightAnswer>0?'Келесі сұраққа өтүге болады немесе қ':'Қ'}айтадан еңгізіп көріңіз!`);
                        else {
                            this.taskService.MessageCongratulation.next({isOpenDialog:true,
                                callBack:()=>{this.taskService.CurrentTask.next(this.taskService.CurrentTask.getValue());}});
                        }
                            }
                            } >
                    <span  className="tool" 
                data-tip="Жауабыңызды&nbsp;тексереді" >Тексеру</span></button>
                    </div>
                </div>                
            </div>
        )
    }
}

export default DefineObjects