import React, { PureComponent } from 'react'
import './home.css';
import { useHistory } from "react-router-dom";
function BackButton(){
    let history=useHistory();
  return(
    <button  className="button" onClick={()=>history.push("/app/first")}>Бастау</button>
  )
}
class Home extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {            
        }
    }
    
    render() {
        return (
            <div className="row">
            <div className="left-container">              
            <div className="title">Қош  келдің! </div>            
            <div className="hint">2-сынып оқушыларына, АКТ пәні бойынша тапсырмалар жинағы. "Бастау" түймесін басып, тапсырмаларға жауап беріңіз!</div>
            <div style={{padding:"1rem",marginTop:"2rem"}}>
            <BackButton/>
            </div>
            </div>
            <div className="right-container">
              <img src="hero-img-1.png" alt="school kids">
              </img>
            </div>
            </div>
        )
    }
}

export default Home