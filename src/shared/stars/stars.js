import React, { PureComponent } from 'react'
import './stars.css';
import TaskServices from '../services/tasks-services';
class Stars extends PureComponent {
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
    createStars(){
        let stars=[];
        for(let i=1;i<=this.props.tasks;i++){
            if (i<=this.props.rightAnswers)
                stars.push(<span style={{color:'#ffc700'}}>★ </span>);
            else 
                stars.push(<span style={{color:'#ccc'}}>★ </span>);
        }
        return stars;
    }
    render() {
        return (
            <div style={{ border: "1px solid greenyellow", display: "inline-block" }} className="stars">
                <div>
                    <h3 style={{ margin: "1px" }}>Дұрыс жауаптар({this.props.rightAnswers}):</h3>
                </div>
                {this.createStars()}
            </div >
        )
    }
}

export default Stars