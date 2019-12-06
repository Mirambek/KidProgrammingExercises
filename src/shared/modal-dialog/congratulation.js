import React, { PureComponent } from 'react'
import './congratulation.css';
import TaskServices from '../services/tasks-services';
import Tasks from '../models/tasks';
class Congratulation extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isOpenDialog: false
        }
    }

    componentDidMount(){
        this.subscription=   TaskServices.getInstance().MessageCongratulation.subscribe(
            (data)=>{
                 console.log({...data                    });
                this.setState(
                    {...data                    }
                    )
            }
        )
    }
    close(){        
        this.setState({isOpenDialog: false})
        if (this.state.callBack) this.state.callBack();
    }
    componentWillUnmount(){
        this.subscription.unsubscribe();
    }
    getAverageScore(){
        let totalTasks=0;
        let righAns=0;
        Object.getOwnPropertyNames(Tasks).forEach(e => {
            let element=Tasks[e];
            if (element.Tasks){
            totalTasks+= element.Tasks;
            righAns+=element.RightAnswer;
            }
        });
    return <span>Сіз {totalTasks} сұраққа жауап бердініз! Дұрыс жауаптар - {righAns}!</span>
    }
    render() {
        const starAdd=function(){
            return <span></span>;
        }
        return (
            <div className="wrapper" style={{ display: this.state.isOpenDialog ? 'flex' : 'none' }}>
                <div className="modal modal--congratulations">
                    <div className="modal-top">
        {
            this.state.isEnd ? 
             <img className="modal-icon u-imgResponsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsMm-V-v-YVuF-9RKdmm3-RFeNsVaDJsCpZN-H2wWFlA7ATR0SA" alt="Trophy" /> :starAdd()  
        }
                        <h2 >Бәрекелді!</h2>
                        <div className="modal-header">
                        {  !this.state.isEnd? 'Бір жұлдызша косылды алқаға! 👍👍☺ Келесі тапсырма орындай бер 🎆🎇':this.getAverageScore()} </div>
                    </div>
                    <div className="modal-bottom">
                        <button className="modal-btn u-btn u-btn--success" onClick={()=>this.close()}>Жабу</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Congratulation