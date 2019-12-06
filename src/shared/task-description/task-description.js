import React, { PureComponent } from 'react'
import TaskServices from '../services/tasks-services';
import './task-description.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
class TaskDescription extends PureComponent {
    constructor(props) {
        super(props)
        this.taskServices = TaskServices.getInstance();
        this.state = {
            
        }
    }
    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
    componentDidMount() {
        this.setState({
            currentTask:this.taskServices.CurrentTask.getValue() 
        })
        this.subscription = this.taskServices.CurrentTask.subscribe((data) => {
            console.log(data);
            this.setState({ notDisplayNextButton: data.RightAnswer === 0,currentTask:data });
        });
    }
    
    render() {          
        return (
            <div style={{ padding: '10px' }} className="description">
                <div style={{ flexGrow: '1' }}>
                    <div class="info-msg">
                        <i class="fa fa-info-circle"></i>
                         {this.props.task.Description}
                    </div>
                </div>
                <div style={this.state.notDisplayNextButton ? { display: 'none' } : { display: 'block' }}>
                <span className="blinking">👉</span> <button id="back-button" onClick={() => {
                    console.log(this.state.currentTask.NextTaskUrl);
                    if (this.state.currentTask.NextTaskUrl)
                        this.props.history.push(this.state.currentTask.NextTaskUrl);
                    else 
                            TaskServices.getInstance().MessageCongratulation.next({isOpenDialog:true,isEnd:true,callBack:()=>{
                                window.location.replace('/');
                            }});
                        }
                        }>
                      <span  className="tool" 
                data-tip="Келесі тапсырмаға көшу" >Келесі</span>  
                    </button>
                </div>
            </div>
        )
    }
}

export default TaskDescription