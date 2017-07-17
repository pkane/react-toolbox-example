import React, { Component, PropTypes } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import FontIcon from 'react-toolbox/lib/font_icon';
import styles from './ProjectToolBar.css';

export default class ProjectToolBar extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {active: true};
	}

	renderToolBarLinks(toolbar) {
		let links = toolbar.links.map((link)=> {
			let i = toolbar.links.indexOf(link);
			return(
		    	<span style={link.style} key={i}>
		    		{link.btn}
		    	</span>
			)
	    });

	    return links;
	}

	handleToggle() {
		this.setState({active: !this.state.active});
	}

	render() {

		return (
			<div className={styles.projectToolBar}>
				{this.renderToolBarLinks(this.props.toolbar)}
			</div>
		);
	}
}

ProjectToolBar.propTypes = {
	toolbar: React.PropTypes.object.isRequired,
    projects: React.PropTypes.array
};
