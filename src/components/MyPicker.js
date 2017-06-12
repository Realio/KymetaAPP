import React from 'react'
import {Text, View, Picker}from 'react-native'

const Item = Picker.Item;

class MyPicker extends React.Component {
    static title = '<MyPicker>';
    static description =
      'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

    state = {
      selectedChamber: null,
      selectedRun: null,
      selectedTimer: null,
      chambers: ['Please Choose a Chamber Type:', 'Hertz', 'Ellie', 'Brick'],
      runs: ['Please Choose a Run Type:','GAOptimization','Serial Optimization', 'First Pass', 'Mini Post Opt', 'Segment Check'],
      timers: ['How long will it run?:', '5m', '10m', '20m', '30m', '1h','4h'],
      color: 'blue',
      mode: Picker.MODE_DIALOG,
    };

    setChamber(chamber) {
      this.setState({
        selectedChamber: chamber
      })
    }

    setRun(run) {
      this.setState({
        selectedRun: run
      })
    }

    setTimer(timer) {
      this.setState({
        selectedTimer: timer
      })
    }

    render() {
      console.log(this.state)
        return (
            <View style ={{flexDirection: 'column', backgroundColor: '#003f77'}}>
              <Picker
                selectedValue={this.state.selectedChamber}
                onValueChange={ (val) => this.setChamber(val) }>
                  { this.state.chambers.map((chamber, idx) => <Item key={`chamber-z${idx}`} label={chamber} value={chamber} />) }
              </Picker>
              <Picker
                selectedValue={this.state.selectedRun}
                onValueChange={ (val) => this.setRun(val) }>
                  { this.state.runs.map((run, idx) => <Item key={'run-${idx}'} label ={run} value={run} />) }
              </Picker>
              <Picker
                selectedValue={this.state.selectedTimer}
                onValueChange={ (val) => this.setTimer(val) }>
                  { this.state.timers.map((timer, idx) => <Item key={'timer-${idx}'} label = {timer} value={timer} />) }
              </Picker>
              <Text>
              {this.state.selectedChamber}
              </Text><Text>
              {this.state.selectedRun}
              </Text><Text>
              {this.state.selectedTimer}
              </Text>
            </View>
       );
     };
}

const styles = {
containerStyle: {
  borderColor: '#ddd',
  padding: 5,
  backgroundColor: '#003f77',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  borderBottomWidth: 1,
  position: 'relative'
  },

pickerTextStyle: {
  color: '#FFFFFF',
  fontSize: 16,
  paddingTop: 15,
//    paddingLeft: 20
  }
};


module.exports = MyPicker;
