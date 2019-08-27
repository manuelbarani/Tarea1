import React from 'react';
import { Route, Redirect, withRouter, Switch, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Topbar from './components/Topbar/Topbar';
import Home from './screens/Home/Home';
import Boards from './screens/Boards/Boards'

export default withRouter(
	class App extends React.PureComponent {
		render() {
			return (
				<div>
					<Topbar />
					<Switch>
						<RouteWithTitle exact title="Inicio" path="/inicio" component={Home} />
						<RouteWithTitle exact title="Boards" path="/Boards" component={Boards} />
						<Redirect to={'/inicio'} />
					</Switch>
				</div>
			);
		}
	}
);

export const RouteWithTitle = ({ title, render, component: Comp, ...props }) => (
	<Route {...props} render={(p) => <DocumentTitle title={title}>{render ? render(p) : <Comp {...p} />}</DocumentTitle>} />
);
