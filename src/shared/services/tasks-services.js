import * as Rx from 'rxjs';
import Tasks from '../models/tasks';
export default class TaskServices{
    static instance=null;    
    static getInstance(){
        if (TaskServices.instance==null)
            TaskServices.instance=new TaskServices();
        return TaskServices.instance;
    }    
    constructor(){
        this.CurrentTask.next(Tasks[1])
    }
    TotalTasks=10;
    CurrentTask=new Rx.BehaviorSubject();
    MessageCongratulation=new Rx.BehaviorSubject();
}