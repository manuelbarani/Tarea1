import * as React from 'react';
import styles from './Topbar.module.scss';
import { Link } from 'react-router-dom';

export default (class Topbar extends React.PureComponent {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<div className={styles.main}>
				<ul className={styles.list}>
					
					<Link className={styles.item} to="/inicio">
						<li className={styles.item}>Inicio</li>
					</Link>
					<Link className={styles.item} to="/Boards">
						<li className={styles.item}>Boards</li>
					</Link>
				</ul>
			</div>
		);
	}
});
