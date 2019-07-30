import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./store";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// mock some data first to get a render working
// play around with initial state to see what renders / get it to where you want it
export class Counter extends Component {
  // componentDidMount() {
  // }

  handleIncrement = () => {
    // console.log("is clicked?");
    this.props.onIncrementClick(this.props.counter);
  };

  handleDecrement = () => {
    this.props.onDecrementClick(this.props.counter);
  };

  render() {
    const counter = this.props.counter;
    return (
      <View>
        <Text>Counter = {counter}</Text>
        <Button onPress={this.handleIncrement}
          title="Increment"
          buttonStyle={styles.button}
        />
        <Button onPress={this.handleDecrement}
          title="Decrement"
          buttonStyle={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    button: {
       backgroundColor: '#ff1493',
       borderColor: '#ff1493',
    //    borderWidth: 5,
       borderRadius: 15       
    }
 })


const mapState = store => {
  return { counter: store.counter };
};

const mapDispatch = dispatch => {
  return {
    onIncrementClick: () => {
      dispatch(increment());
    },
    onDecrementClick: () => {
      dispatch(decrement());
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Counter);
