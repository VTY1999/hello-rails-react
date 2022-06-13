import React from "react"
import { Provider } from "react-redux";
import store from "../redux/configureStore.js";
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          
        </Routes>
        </BrowserRouter>
        </Provider>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string
};
export default App
