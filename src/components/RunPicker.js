import React from 'react'
import {Text, View, Picker}from 'react-native'

const Item = Picker.Item;

class RunPicker extends React.Component {
    static title = '<RunPicker>';
    static description =
      'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

    state = {
      selectedRun: 'Choose:',
      runs: ['Choose:','GAOptimization', 'Post Optimization', 'First Pass', 'Segment Check', 'Mini Post Opt'],
      color: 'red',
      mode: Picker.MODE_DIALOG,
    };

    setRun(run) {
      this.setState({
        selectedRun: run
      })
    }

    render() {
        return (
          <View style ={{flexDirection: 'column', backgroundColor: 'powderblue'}}>
            <Text style={styles.pickerTextStyle}>Step2: What run are you using?</Text>
              <Picker
                selectedValue={this.state.selectedRun}
                onValueChange={ (val) => this.setRun(val) }>
                   { this.state.runs.map((run, idx) => <Item key={`run-${idx}`} label={run} value={run} />) }
              </Picker>
          </View>
       );
     };
}

const styles = {
  pickerTextStyle: {
    fontSize: 16,
    paddingTop: 15,
//    paddingLeft: 20
  }
};
module.exports = RunPicker;
