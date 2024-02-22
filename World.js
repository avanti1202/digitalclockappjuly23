import React from 'react';
import WorldClock from './WorldClock';
import './WorldClock.css';
import Timezones from './Timezones/Timezones.json';

class World extends React.Component {
   constructor(props) {
      super(props)
      this.addTimeZone = this.addTimeZone.bind(this)
      this.hChange = this.hChange.bind(this)
      this.state = {
         clocks: [],
         selectedClock: 'Asia/Kolkata'
      };
   }

   hChange(e) {
      this.setState({ selectedClock: e.target.value });
   }

   addTimeZone() {
      if (this.state.clocks.findIndex(c => c.Timezone === this.state.selectedClock) < 0) {
         let zone = Timezones.find(k => k.Timezone === this.state.selectedClock);
         this.setState(prevState => ({
            clocks: [...prevState.clocks, zone]
         }));
      }
   }

   removeClick(zone) {
      let updateClocks = this.state.clocks;
      let index = updateClocks.findIndex(t => t.Timezone === zone);
      updateClocks.splice(index, 1)
      this.setState({
         clocks: updateClocks
      });
   }

   render() {
      let optionItems = Timezones.map((zone) =>
         <option value={zone.Timezone} key={zone.Timezone} onChange={this.handleChange}>{zone.Country} ({zone.Timezone})</option>
      );

      let clocks = this.state.clocks.map((zone) =>
         <WorldClock {...zone} key={zone.Timezone} removeClick={() => this.removeClick(zone.Timezone)} />
      )

      { document.body.style.backgroundColor = "lightblue" }
      return (
         <>
            <center>
               <h1> World Clock</h1>
               <div className="container1">
                  <h2>Choose a timezone</h2>
                  <select className="form-input" value={this.state.selectedClock} onChange={this.hChange}>
                     {optionItems}
                  </select>
                  <button onClick={this.addTimeZone} className="form-btn"> SEE TIME</button>
               </div>
               <div>
                  {clocks}</div>


            </center >
         </>
      );
   }
}

export default World;