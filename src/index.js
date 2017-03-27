import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import Navbar from'./components/navbar';
import MainContainer from './components/main_container'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <MainContainer/>
            </div>
        );
    }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

// put it in dom
ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
    , document.querySelector('#container'));