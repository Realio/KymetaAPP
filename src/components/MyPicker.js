import React from 'react'
import {Text, View, Picker}from 'react-native'

const Item = Picker.Item;

class MyPicker extends React.Component {
    static title = '<MyPicker>';
    static description =
      'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

    state = {
      selectedChamber: 'Hertz',
      selectedRun: 'Serial optimization',
      chambers: ['Hertz', 'Ellie', 'Brick'],
      runs: ['GAOptimization','Serial Optimization', 'First Pass', 'Mini Post Opt', 'Segment Check'],
      color: 'red',
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

    render() {
        return (
            <View>
              <Picker
                selectedValue={this.state.selectedChamber}
                onValueChange={ (val) => this.setChamber(val) }>
                  { this.state.chambers.map((chamber) => <Item label={chamber} value={chamber} />) }
              </Picker>
              <Picker
                selectedValue={this.state.selectedRun}
                onValueChange={ (val) => this.setRun(val) }>
                  { this.state.runs.map((run) => <Item label={run} value={run} />) }
              </Picker>
            </View>
       );
     };
}


module.exports = MyPicker;
