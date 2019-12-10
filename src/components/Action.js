import React from 'react';
export default class Action extends React.Component{
    setTimeHandeler= (e)=>{
        e.preventDefault();
        const m = parseInt(e.target.elements.min.value);
        const s = parseInt(e.target.elements.sec.value);
        this.props.setTimeHandeler(m,s);

    }
    render() {
        return(
            <div className='edit-time'>
                
                <form  onSubmit = {this.setTimeHandeler}>
                    <input type='number' name = 'min' placeholder ="min" required min ='0' max = '99'/>
                    <input type='number' name = 'sec' placeholder = 'secs' required min ='0' max = '59'/>
                    <button className ='button'>Set Time</button>
                </form>
                <div className = 'btn-row'>
                    <button className ='button' onClick = {this.props.startHandler} >  {!this.props.isOn?'Start':'Stop'} </button>
                    <button className ='button' onClick = {this.props.resetHandler}> Reset </button>
                
                </div>
        
    </div>
        )
    }
    
    
}

