import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import theme from './AppCard.css';

export default class AppCard extends React.Component {

	constructor(props) {
	    super(props);
	}

	renderCardLinks(project) {
		let links = project.links.map((link)=> {
			let i = project.links.indexOf(link);
			return(
		    	<a key={i} onClick={()=>link.func(project)}>
		    		<FontIcon value={link.name} />
		    	</a>
			)
	    });

	    return links;
	}

	render() {
		return (
			<Card key={this.props.project.id} theme={theme} onClick={()=>this.props.onCardSelected(this.props.project)}>
				<div className={theme.avatar}>
					{this.props.project.avatar}
				</div>
			    <CardTitle className={theme.cardTitle}
					title={this.props.project.title}
					subtitle={"Last edit:" + this.props.project.last_edit }
			    />
			    <span>
			    	{this.renderCardLinks(this.props.project)}
			    </span>
		  	</Card>
		);
	}
}

AppCard.propTypes = {
    project: React.PropTypes.object,
    onCardSelected: React.PropTypes.func.isRequired,
    deleteProject: React.PropTypes.func,
	downloadProject: React.PropTypes.func
};
