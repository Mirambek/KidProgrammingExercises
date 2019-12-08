import React, { PureComponent } from "react";
import {getMazeBlock,reset} from "./maze-blocks.js";
import "./maze.css";
import Congratulation from "../../shared/modal-dialog/congratulation.js";
import TaskServices from "../../shared/services/tasks-services.js";
import Tasks from "../../shared/models/tasks.js";
import TaskNum from "../../shared/models/task-enum.js";
let Blockly = window["Blockly"];
window.CURRENT_GAME = "0";
class Maze extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.mazeGames = getMazeBlock(0);
    this.workspace = Blockly.inject("blocklyDiv", {
      toolbox: document.getElementById("toolbox")
    });
    this.setState({mazeGames:this.mazeGames});
    const taskService=TaskServices.getInstance();           
    taskService.CurrentTask.next(Tasks[TaskNum.Maze1]);

  }
  runCode() {
    this.mazeGames=reset(window.CURRENT_GAME);  
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(this.workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    let result = true;
    try {
        console.log(this.mazeGames[window.CURRENT_GAME].RightPath);
      if (code) {
          console.log(code);
        eval(code);
        if (!result) {
         alert("Алманы таппадым! Қайтадан бастаңыз!");
         this.mazeGames=reset(window.CURRENT_GAME);
        }
      } else if (this.mazeGames[window.CURRENT_GAME].RightPath.length === 0) {
        let taskService=TaskServices.getInstance();
        taskService.MessageCongratulation.next({isOpenDialog:true});        
        taskService.CurrentTask.getValue().RightAnswer++;
        taskService.CurrentTask.next(taskService.CurrentTask.getValue());
      } else {
        alert("Толығымен тапсырманы орындаңыз!");
      }
       //reset();
    } catch (e) {
      alert(e);
    }
  }

  render() {
    return (
      <div className="main-part">
        <div className="cells">
          <div id="GAME-STYLE-0"></div>
          <div id="GAME-STYLE-1"></div>
          <div id="GAME-STYLE-2"></div>
          <div id="GAME-0" className="grid" style={{ display: "none" }}>
            <img src="/img/aldar.png" className="actor" />
            <img src="/img/apple.png" alt="" id="target" />
            <div id="path1">
               {this.state.mazeGames?this.state.mazeGames[0].RightPath.map(
                   (data,index)=>{
                       if (data.path!==1){
                           return;
                       }
                       let style={};
                       switch(data.Direction){
                           case 'MOVE_FORWARD':
                               style={
                                position:'absolute',
                                height:'40px',                                
                                width:'40px',
                                border:'1px solid black',
                                borderBottomWidth:'0px',
                                borderRightWidth:'0px',
                                borderTopWidth:'0px'
                            };
                            if (data.left) style.left=data.left;
                            if (data.top) style.top=data.top;
                               break;
                            default:
                                break;
                       }
                        return <span key={index} style={
                            style
                        }></span>;
                   }
               ):''}
            </div>
            <div id="path2">
            {this.state.mazeGames?this.state.mazeGames[0].RightPath.filter((data)=>data.path===2).map(
                   (data,index)=>{
                       let style={};
                       switch(data.Direction){
                           case 'MOVE_FORWARD':
                               style={
                                position:'absolute',
                                height:'40px',                                
                                width:'40px',
                                border:'1px solid black',
                                borderLeftWidth:'0px',
                                borderRightWidth:'0px',
                                borderBottomWidth:'1px',
                                borderTopWidth:'0px'
                            };
                            if (data.left) style.left=data.left;
                            if (data.top)  style.top=data.top;
                               break;
                            default:
                                break;
                       }
                        return <span key={index} style={
                            style
                        }></span>;
                   }
               ):''}

            </div>
          </div>
          <div id="GAME-1" className="grid" style={{ display: "none" }}>
            <img src="/img/aldar.png" className="actor" />
            <img src="/img/apple.png" alt="" id="target" />

            <div id="path1"></div>
            <div id="path2"></div>
            <div id="path3"></div>
          </div>
          <div id="GAME-2" className="grid" style={{ display: "none" }}>
            <img src="/img/aldar.png" className="actor" />
            <img src="/img/apple.png" alt="" id="target" />

            <div id="path1"></div>
            <div id="path2"></div>
            <div id="path3"></div>
          </div>
          <div style={{display:'inline-block',verticalAlign:'Top'}}>
              <button onClick={this.runCode.bind(this)}>
              <span  className="tool" 
                data-tip="Жауабыңызды&nbsp;тексереді" >Тексеру</span>                
              </button>
          </div>
        </div>
        <div className="cells">
          <div
            id="blocklyDiv"
            style={{ height: "480px", width: "600px" }}
          ></div>
        </div>
        <xml id="toolbox" style={{ display: "none" }}>
          <category name=" Қажетті блоктар">
            <block type="MOVE_FORWARD"></block>
            <block type="TURN_LEFT"></block>
            <block type="TURN_RIGHT"></block>
          </category>
        </xml>
      </div>
    );
  }
}
export default Maze;