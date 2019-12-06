import React, { PureComponent } from 'react'
import './object-mapping.css'
import objectMappingBussiness from './object-mapping-bussiness'
import TaskServices from '../../shared/services/tasks-services'
import Tasks from '../../shared/models/tasks'
import TaskNum from '../../shared/models/task-enum'
class ObjectMapping extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        let taskServ=TaskServices.getInstance();
        taskServ.CurrentTask.next(Tasks[TaskNum.ObjectMapping]);
        objectMappingBussiness(taskServ);
    }
    render() {
        return (
            <div>
                <div className="table">
                    <div className="cell" id="display-images" style={{ height: '30vh', border: '1px solid #000' }}>
                        &nbsp;
                        <img src="/img/b1.jpg" id="b1" />
                        <img src="/img/d1.png" id="d1"/>
                        <img src="/img/b2.jpeg" id="b2"/>
                        <img src="/img/d2.jpeg" id="d2"/>
                        <img src="/img/b3.jpg" id="b3"/>
                        <img src="/img/b4.jpeg" id="b4"/>
                        <img src="/img/b5.png" id="b5"/>
                        <img src="/img/d3.jpg" id="d3"/>
                        <img src="/img/d5.jpeg" id="d5"/>
                        <img src="/img/d4.jpeg" id="d4"/>
                    </div>
                </div>
                <div className="table" id="selection-table">
                    <div className="tr">
                        <div className="cell">
                            <h3>дұрыс әрекеттер</h3>
                        </div>
                        <div className="cell">
                            <h3 style={{display:'inline-block',marginRight:'1rem'}}>теріс әрекеттер</h3>                           
                        </div>                        
                    </div>
                    <div className="tr" style={{ height: '50vh' }}>
                        <div className="cell" id="list-right-actions" style={{position:'relative'}}>
                        <span  className="tool" 
                data-tip="👇 Жоғарыдағы&nbsp;суреттерді&nbsp;осында тартып&nbsp;қоюыңыз" style={{position:'absolute',top:'10%',left:'40%'}} >&nbsp;</span>
                        </div>
                        <div className="cell" id="list-wrong-actions"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ObjectMapping