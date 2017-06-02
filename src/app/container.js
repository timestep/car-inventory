import { connect } from 'react-redux';
import { App } from './component';
import { carsSelector } from './selectors';

export const mapStateToProps = (state) => ({
  cars: carsSelector(state),
});

export const mapDispatchToProps = () => ({});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const AppContainer = connector(App);
