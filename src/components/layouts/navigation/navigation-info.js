import React, { Component } from 'react'
import Stars from'../../../shared/stars/stars.js';
import './navigation-info.css';
import TaskServices from '../../../shared/services/tasks-services.js';

class NavigationInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {            
        }
    }
    componentWillUnmount(){
        this.subscription.unsubsrcibe();
    } 

    componentDidMount(){             
        let taskServices=TaskServices.getInstance();
        this.subscription=taskServices.CurrentTask.subscribe((data)=>{ this.setState({});         
    });
    }
    render() {        
        return (
            <header>
                <ul><li style={{margin:'auto'}}>
                        <Stars tasks={this.props.currentTask.Tasks}                             
                            rightAnswers={this.props.currentTask.RightAnswer} />
                            
                    </li>
                    <li>
                        <span className="number">{this.props.currentTask.Number-1}</span>
                        <span className="text">орындалды</span>
                    </li>
                    <li>
                        <span className="number">{this.props.totalTask-this.props.currentTask.Number+1}</span>
                        <span className="text">қалды</span>
                    </li>
                </ul>
            </header>
        )
    }
}
export default NavigationInfo