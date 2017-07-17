import React, { Component, PropTypes } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import {Button} from 'react-toolbox/lib/button';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import styles from './SideBar.css';

export default class SideBar extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {active: true};
	}

	handleToggle() {
		this.setState({active: !this.state.active});
	}

	renderCardContent(project) {
		if (!project) return;

		if (!project.title) return (
			<p>Select a project from the dashboard to view details.</p>
		)

		return (
			<List selectable ripple>
				<ListSubHeader caption='Project Details' />
				<ListItem
				  avatar={project.avatar}
				  caption={project.title}
				  legend={project.owner}
				/>
			</List>
		)
	}

	render() {

		return (

			<div className={styles.sideBar + ' ' + (this.state.active ? styles.active : styles.inactive)}>
			  	<AppBar title="AppBar">
			  	</AppBar>

			  	{this.renderCardContent(this.props.project)}
			  	<div className={styles.toggleButtonContainer}>
					<Button className={styles.toggleButton}
						label="Close Drawer"
						onClick={this.handleToggle.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

SideBar.propTypes = {
    project: React.PropTypes.object
};
