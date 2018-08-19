import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import homeState from './state';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 40,
  },
  header: {
    fontWeight: '500',
    fontSize: 20,
    paddingBottom: 8,
  },
  valueText: {
    fontSize: 18,
    padding: 4,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
});

class Home extends Component {
  static propTypes = {
    data: PropTypes.shape({
      pressure: PropTypes.string,
      humidity: PropTypes.string,
      temp: PropTypes.string,
      temp_max: PropTypes.string,
      temp_min: PropTypes.string,
    }),
    error: PropTypes.string,
    isFetching: PropTypes.bool,
  };

  static defaultProps = {
    error: '',
    isFetching: false,
  };

  componentDidMount() {
    this.props.onFetchWeather();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    const {
      main: { pressure, humidity, temp, temp_max, temp_min },
    } = this.props.data;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Current weather in London:</Text>
        <Text style={styles.valueText}>Temp: {temp} C</Text>
        <Text style={styles.valueText}>Temp Max: {temp_max} C</Text>
        <Text style={styles.valueText}>Temp min: {temp_min} C</Text>
        <Text style={styles.valueText}>Humidity: {humidity} %</Text>
        <Text style={styles.valueText}>Pressure: {pressure} hPa</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { isFetching, data, error } = state.home;
  return {
    isFetching,
    data,
    error,
  };
};

const mapDispatchToProps = {
  onFetchWeather: homeState.actions.fetchWeather,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
