import React from 'react'
import {Text, View, Picker}from 'react-native'

const Item = Picker.Item;

class ChamberPicker extends React.Component {
    static title = '<ChamberPicker>';
    static description =
      'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

    state = {
      selectedChamber: 'Choose:',
      chambers: ['Choose:','Hertz', 'Ellie', 'Brick'],
      color: 'red',
      mode: Picker.MODE_DIALOG,
    };

    setChamber(chamber) {
      this.setState({
        selectedChamber: chamber
      })
    }

    render() {
        return (
          <View style ={{flexDirection: 'column', backgroundColor: '#003f77'}}>
            <Text style={styles.pickerTextStyle}>Step1: Which Chamber are you using?</Text>
              <Picker
                selectedValue={this.state.selectedChamber}
                onValueChange={ (val) => this.setChamber(val) }>
                 { this.state.chambers.map((chamber, idx) => <Item key={`chamber-${idx}`} label={chamber} value={chamber} />) }
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

module.exports = ChamberPicker;
