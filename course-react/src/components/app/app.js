import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';
import TestApp from '../testApp/TestApp';
import SliderApp from '../testApp/Slider/Slider';
import SliderHoc from '../testApp/SliderHoc/SliderHoc';
import TestModal from '../testModal/testModal';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));

// import TestHook from "../testHooks/testHook";

const App = () => {

	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Suspense fallback={<Spinner />}>
						<Switch>
							<Route exact path="/">
								<MainPage />
							</Route>
							<Route exact path="/comics">
								<ComicsPage />
							</Route>
							<Route exact path="/comics/:comicId">
								<SingleComicPage />
							</Route>
							<Route path="*">
								<Page404 />
							</Route>
						</Switch>
					</Suspense>
				</main>
				{/* <TestApp /> */}
				{/* <TestHook /> */}
				{/* <SliderApp /> */}
				{/* <SliderHoc /> */}
				<TestModal />
			</div>
		</Router>
	)
}

export default App;