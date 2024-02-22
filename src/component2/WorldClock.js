import React from 'react';
import Clock from 'react-clock';
import './WorldClock.css';

class WorldClock extends React.Component {

   state = {
      time: this.getCurrentTime(),
   }

   componentDidMount() {
      this.intervalID = setInterval(
         () => this.tick(),
         1000
      );
   }

   componentWillUnmount() {
      clearInterval(this.intervalID);
   }

   getCurrentTime() {
      let time = new Date();
      time.setMinutes(time.getMinutes() + time.getTimezoneOffset() + parseInt(this.props.Offset));
      return time;
   }

   tick() {
      this.setState({
         time: this.getCurrentTime()
      });
   }

   render() {
      return (
         <div className="world-container">
            <div className="worldclock-header">
               <h3>
                  {this.props.Country}
               </h3>
               <h4>{this.props.Timezone}</h4>
            </div>
            <div className="worldclock-body">
               <Clock value={this.state.time} className="clock" />
               <p>{this.state.time.toLocaleString()}</p>
            </div>
            <div className="worldclock-footer">
               <div onClick={this.props.removeClick} className="btn-clear">Clear</div>
            </div>
         </div>
      )
   }

}

export default WorldClock;