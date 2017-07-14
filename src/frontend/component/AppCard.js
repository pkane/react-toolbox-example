import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import theme from './AppCard.css';

export default class AppCard extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {active: true};
	}

	handleToggle() {
		this.setState({active: !this.state.active});
	}

	render() {
		return (
			<Card key={this.props.project.id} theme={theme}>
				<div className={theme.avatar}>
					{this.props.project.avatar}
				</div>
			    <CardTitle className={theme.cardTitle}
					title={this.props.project.title}
					subtitle={"Last edit:" + this.props.project.last_edit }
			    />
		  	</Card>
		);
	}
}

AppCard.propTypes = {
    project: React.PropTypes.object.isRequired
};
