'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = ReactNative;

var UIExplorerBlock = require('./UIExplorerBlock');

var alertMessage = 'Your Antenna has completed!!!!!!!!!';

class AlertExample extends React.Component {
 static title = 'Alert';

 static description = 'YO! ITS DONE.';

 render() {
   return (
     <UIExplorerBlock title={'Alert'}>
       <SimpleAlertExampleBlock />
     </UIExplorerBlock>
   );
 }
}

var styles = StyleSheet.create({
 wrapper: {
   borderRadius: 5,
   marginBottom: 5,
 },
 button: {
   backgroundColor: '#eeeeee',
   padding: 10,
 },
});

module.exports = Alert;
