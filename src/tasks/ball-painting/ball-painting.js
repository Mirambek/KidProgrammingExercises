import React, { PureComponent } from 'react'
import Initialize from './custom-block.js';
import './ball-painting.css';
import TaskServices from '../../shared/services/tasks-services.js';
import TaskNum from '../../shared/models/task-enum.js';
import Tasks from '../../shared/models/tasks.js';
let Blockly = window['Blockly'];
class BallPainting extends PureComponent {
    constructor(props) {
        
        super(props)
        this.taskService = TaskServices.getInstance();
        this.state = {
        }
        Initialize();
    }
    componentDidMount() {
        this.taskService.CurrentTask.next( Tasks[TaskNum.BallPaint]);
        this.workspace = Blockly.inject('blocklyDiv',
            {
                // toolbox: document.getElementById('toolbox')
            });
            Blockly.Xml.appendDomToWorkspace(document.getElementById('toolbox2'),this.workspace);
    }
    runCode() {
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        var code = Blockly.JavaScript.workspaceToCode(this.workspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        try {
            eval(code);
            let ts=TaskServices.getInstance();
            if (ts.CurrentTask.getValue().RightAnswer===0)ts.CurrentTask.getValue().RightAnswer++;
            ts.MessageCongratulation.next({isOpenDialog:true,
                callBack:()=>{ts.CurrentTask.next(ts.CurrentTask.getValue());}});

        } catch (e) {
            alert(e);
        }
    }
    render() {
        return (
            <div>
                <div id="blocklyDiv" style={{ height: "480px", width: "800px",position:"relative" }}><span  className="tool" 
                data-tip="Түстерді өзгертсеңіз болады" style={{position:'absolute',left:'4rem',top:'0.1rem'}}>d</span> </div>
                <xml id="toolbox" style={{ display: 'none' }}>
                    <category name="Логикасы">
                        <block type="lightswitch">
                            <field name="lightcolor">қызыл</field>
                            <field name="switch">қосу</field>
                        </block>
                    </category>
                    
                </xml>
                <xml id="toolbox2" style={{ display: 'none' }}>
                        <block type="lightswitch">
                            <field name="lightcolor">қызыл</field>
                            <field name="switch">қосу</field>
                        </block>
                    
                </xml>
                <div style={{'display':'inline-block',margin:'1.5rem',verticalAlign:'top'}}>
                    <div id="switch"></div>
                    <button id="validateButton" style={{margin:'2rem 6rem'}} onClick={() => this.runCode()} >Іске қосу</button>
                </div>
            </div>
        )
    }
}
export default BallPainting