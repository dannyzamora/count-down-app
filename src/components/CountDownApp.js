import React,{Component} from 'react';
import Action from './Action'
import TimerDisplay from './TimeDisplay'
export default class CountDownApp extends Component{
    state = {

        min :1,
        sec :3,
        milli : 0,
        isOn: false,
    };
    myInterval = undefined;
    down = ()=>{
        const {min, sec} = this.state;

            if(sec > 0){
                this.setState(({sec})=>({
                    sec: sec - 1
                }))
            }
            if(sec ===0){
                if (min === 0){
                    clearInterval(this.myInterval)
                    this.setState(({isOn})=>({
                        isOn:!isOn,
                        min :1
                    }))
                    console.log('done')

                }
                else{
                    this.setState(({min})=>({
                        min:min-1,
                        sec: 59
                    }))
                }
            }
    }
    resetHandler =() => {
        if(!this.state.isOn){
            this.setState(({sec})=>({
                sec:5
            }))
        }
        
    }
    startHandler = ()=>{
        const {isOn} = this.state;
        if(!isOn){
            this.myInterval = setInterval(this.down,1000);
            this.setState(({isOn})=>({
                isOn:!isOn
            }))
    

        }
        else{
            this.setState(({isOn})=>({
                isOn:!isOn
            }))
            clearInterval(this.myInterval)
        }
  
    }
    setTimeHandeler=(min,sec)=>{
        this.setState(()=>({
            min,
            sec
        }))

    }
     
    
    
    render(){
        
        return (
           <div className = "container">
               <TimerDisplay
                    //time = {this.timeFormatter}
                    
                    min = {this.state.min}
                    sec = {this.state.sec}
                    
               />
               <Action
                    isOn = {this.state.isOn}
                    startHandler = {this.startHandler}
                    resetHandler = {this.resetHandler}
                    setTimeHandeler = {this.setTimeHandeler}
                    />
           </div>
        )
    }

}

