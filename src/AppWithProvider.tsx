import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

function AppWithProvider()  {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithProvider;
