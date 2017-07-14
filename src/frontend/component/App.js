import React, { Component } from 'react';
import AppCard from './AppCard.js';      // AppBar with simple overrides
import MainNavBar from './MainNavBar.js';      // AppBar with simple overrides
import SideBar from './SideBar.js';
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import CuteBeaverIcon from './CuteBeaverIcon.js'
import styles from './App.css';

export default class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Project Dashboard',
			sidebar: {
				isActive: true
			},
			projects: [
				{
					title: 'Project 1',
					avatar: <CuteBeaverIcon width={49} height={49} />,
					id: 1,
					owner: 'Paul',
					last_edit: '10-09-15'
				},
				{
					title: 'Project 2',
					avatar: <CuteBeaverIcon width={49} height={49} />,
					id: 2,
					owner: 'John',
					last_edit: '10-09-15'
				},
				{
					title: 'Project 3',
					avatar: <CuteBeaverIcon width={49} height={49} />,
					id: 3,
					owner: 'Sally',
					last_edit: '10-09-15'
				}
			],
			selectedProject: null
		}
	}

    renderCards() {
        if (this.state.projects.length < 1) {
            return <p>No projects to show.</p>
        }
    	return this.state.projects.map((project)=> {
    		return(
	        	<AppCard project={project} key={project.id} />
    		)
        });
        return <p>Loading...</p>
    }

	render() {
		return(
			<div>
				<MainNavBar title={this.state.title} />
				<SideBar active={this.state.sidebar.isActive} project={this.state.selectedProject} />
				<div className={styles.dashboardWrapper}>
					<section className={styles.dashboard}>
						<div className={styles.dashboardHeader}></div>
						<section className={styles.cardList}>
							{this.renderCards()}
						</section>
				  	</section>
				</div>
			</div>
		);
	}
}
