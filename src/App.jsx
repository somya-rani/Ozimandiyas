import { h, Component} from 'preact';
import { Router, Route } from 'preact-router';
import MainPage from './MainPage.mjs';
import Login from './index.jsx';


export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={MainPage} />
                <Route path="/login" component={Login} />
            </Router>
        );
    }
} 