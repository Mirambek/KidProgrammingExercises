import React, { PureComponent } from 'react'
import puzzleObjectInitialize from './puzzle-objects';
import TaskNum from '../../shared/models/task-enum';
import Tasks from '../../shared/models/tasks';
import TaskServices from '../../shared/services/tasks-services';
let Blockly = window['Blockly'];
class Puzzle extends PureComponent {
    constructor(props) {
        super(props)
        this.taskService=TaskServices.getInstance();
        
        this.state = {

        }
    }
    componentDidMount() {        
        this.taskService.CurrentTask.next( Tasks[TaskNum.Puzzle]);
        this.currentTask=this.taskService.CurrentTask.getValue();
        puzzleObjectInitialize();
        var blocklyDiv = document.getElementById('blocklyDiv');
        this.demoWorkspace = Blockly.inject(blocklyDiv,
            {
                media: '../../media/',
                scrollbars: true,
                sounds: false,
                //  toolbox: document.getElementById('toolbox')
            });
        Blockly.Xml.appendDomToWorkspace(document.getElementById('toolbox'),
            this.demoWorkspace);             
    }
    validate() {
        let blocks = this.demoWorkspace.getAllBlocks();
        let correct = 0;        
        for (let b = 0, block; block = blocks[b]; b++) {
            if (block.isCorrect && block.isCorrect()) {
                correct++;                                
            } else 
              block.select();
        }
        this.currentTask.RightAnswer=correct;
        this.taskService.CurrentTask.next(this.currentTask);
    }
    render() {
        return (
            <div>
                <div id="blocklyDiv" style={{height: '85vh', width: '97vw',position:'relative'}}>
                <button id="validateButton" style={{position:'absolute',top:'1%',left:'80%',zIndex:1001}} onClick={()=>{
                        this.validate();   
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
                <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style={{display: "none"}}>
                    <block type="ara" x="79" y="10">
                        <field name="NAME">Ара</field>
                    </block>
                    <block type="utka" x="400" y="10">
                    </block>
                    <block type="picara" x="800" y="200">
                    </block>
                    <block type="zhalo" x="650" y="450">
                    </block>
                    <block type="pickoshka" x="450" y="150">
                    </block>
                    <block type="picutka" x="300" y="400">
                    </block>
                    <block type="koshka" x="100" y="300">
                    </block>
                    <block type="fur" x="600" y="400">
                    </block>
                    <block type="beak" x="550" y="350">
                    </block>
                </xml>
            </div>
        )
    }
}

export default Puzzle