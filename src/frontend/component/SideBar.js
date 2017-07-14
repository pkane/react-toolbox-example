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

			<div className={styles.sideBar}>
			  	<AppBar title="AppBar">
			  	</AppBar>
			  	{this.renderCardContent(this.props.project)}
				<Button
					label="Close Drawer"
					onClick={this.handleToggle}
				/>
			</div>
		);
	}
}

SideBar.propTypes = {
    active: React.PropTypes.bool.isRequired,
    project: React.PropTypes.object
};
