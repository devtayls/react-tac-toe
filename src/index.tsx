import * as React from "react";
import * as ReactDOM from "react-dom";
import Game from './components/game'
import './index.css';

class App extends React.Component{
    render() {
        return(
            <div>
                <Game />
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
