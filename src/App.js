import { Calendar } from "./Calendar";

import "./App.scss";

function App() {
  return (
    <div className="Calendar">
      <div className="container Calendar__container">
        <div className="row">
          <div className="col-sm-8">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
