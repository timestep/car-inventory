import { connect } from 'react-redux';
import { App } from './component';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = () => ({});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const AppContainer = connector(App);
