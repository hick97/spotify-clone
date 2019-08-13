import Reactrotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

// Checking development mode
if (process.env.NODE_ENV === 'development') {
  const tron = Reactrotron.configure()
    // Put middlewares
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  // Clean up the Reactotron store on restart
  tron.clear();

  // Setting a global variable to debug
  console.tron = tron;
}
