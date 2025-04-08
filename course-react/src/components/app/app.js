import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MainPage, ComicsPage } from '../pages'
import AppHeader from "../appHeader/AppHeader";

// import TestHook from "../testHooks/testHook";


const App = () => {


    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage />
                        </Route>
                    </Switch>
                </main>
                {/* <TestApp /> */}
                {/* <TestHook /> */}
            </div>
        </Router>
    )
}

export default App;