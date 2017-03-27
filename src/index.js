import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import BookList from'./containers/book_list';

class App extends Component {
	render()
	{
		return (
			<BookList/>
		);
	}
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

// put it in dom
ReactDom.render(<Provider store={createStoreWithMiddleware(reducers)}>
	<App/>
</Provider>, document.querySelector('.container'));