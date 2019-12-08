import React, { PureComponent } from 'react'
import NavigationInfo from '../navigation/navigation-info'
import BallPainting from '../../../tasks/ball-painting/ball-painting'
import TaskDescription from '../../../shared/task-description/task-description'
import {Route} from 'react-router-dom'
import TaskServices from '../../../shared/services/tasks-services'
import DefineObjects from '../../../tasks/define-objects/define-objects'
import Congratulation from '../../../shared/modal-dialog/congratulation'
import ObjectMapping from '../../../tasks/select-objects/object-mapping'
import Puzzle from '../../../tasks/puzzles/puzzle'
import Maze from '../../../tasks/maze/maze'
class MainApp extends PureComponent {
    
    constructor(props) {
        super(props)        
                
        this.taskServices=TaskServices.getInstance();   
        this.state = {            
            currentTask:this.taskServices.CurrentTask.getValue()
        }
    }
    componentWillUnmount(){
        this.subscription.unsubscribe();
    }
    componentDidMount(){     
        this.subscription=this.taskServices.CurrentTask.subscribe((data)=>{ this.setState({currentTask:data});                                                                 
                                                            });   
    }
    render() {        
        return (
            <div>            
            <NavigationInfo currentTask={this.state.currentTask} 
               totalTask={this.taskServices.TotalTasks}/>
                <TaskDescription task={this.state.currentTask} history={this.props.history}/>
                <Route path={`${this.props.match.path}/first`} component={BallPainting}></Route>
                <Route path={`${this.props.match.path}/third`} component={DefineObjects}></Route>
                <Route path={`${this.props.match.path}/second`} component={ObjectMapping}></Route>
                <Route path={`${this.props.match.path}/fourth`} component={Puzzle}></Route>
                <Route path={`${this.props.match.path}/fifth`} component={Maze}></Route>
            <Congratulation></Congratulation>
            </div>
        )
    }
}

export default MainApp