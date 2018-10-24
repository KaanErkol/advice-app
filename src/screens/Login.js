import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as AdviceActions from '../actions/AdviceActions';

class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.advice.value }</Text>
        <Button title="Click For Advices" onPress={() => this.props.getAdvice()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10
  }
});


const mapStateToProps = (state) => ({
  advice: state.advice
});

const mapDispatchToProps = (dispatch) => ({
  getAdvice: () => dispatch(AdviceActions.getAdvice())
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);