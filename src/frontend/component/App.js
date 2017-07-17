import React, { Component } from 'react';
import AppCard from './AppCard.js';
import MainNavBar from './MainNavBar.js';
import ProjectToolBar from './ProjectToolBar.js';
import SideBar from './SideBar.js';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Button } from 'react-toolbox/lib/button';
import CuteBeaverIcon from './CuteBeaverIcon.js'
import styles from './App.css';

export default class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Project Dashboard',
			toolbar: {
				links: [
					{
						name: 'search',
						text: '',
						style: {},
						btn: <Button icon='search' floating
		    				 	onClick={()=>{}} />
					},
					{
						name: 'sort',
						text: 'Sort',
						style: {float: 'right'},
						btn: <Dropdown auto
								source={[{ value: 'asc', label: 'Ascending' },
  										{ value: 'desc', label: 'Descending'},]}
  								value='Sort by last edit'
  								label='Sort by last edit'
  								onChange= {this.sortProjects.bind(this)} />
					}
				]
			},
			projects: [
				{
					title: 'Project 1',
					avatar: <CuteBeaverIcon width={60} height={60} />,
					id: 1,
					owner: 'Paul',
					last_edit: '01/22/16',
					links: [
						{ name : 'delete', func : this.deleteProject.bind(this) },
						{ name : 'file_download', func : this.downloadProject.bind(this) }
					]
				},
				{
					title: 'Project 2',
					avatar: <CuteBeaverIcon width={60} height={60} />,
					id: 2,
					owner: 'John',
					last_edit: '10/09/15',
					links: [
						{ name : 'delete', func : this.deleteProject.bind(this) },
						{ name : 'file_download', func : this.downloadProject.bind(this) }
					]
				},
				{
					title: 'Project 3',
					avatar: <CuteBeaverIcon width={60} height={60} />,
					id: 3,
					owner: 'Sally',
					last_edit: '9/05/15',
					links: [
						{ name : 'delete', func : this.deleteProject.bind(this) },
						{ name : 'file_download', func : this.downloadProject.bind(this) }
					]
				}
			],
			selectedProject: {}
		}
	}

    renderCards() {
    	let cards = this.state.projects.map((project)=> {
    		return(
	        	<AppCard project={project} key={project.id} onCardSelected={this.onCardSelected.bind(this)} />
    		)
        });

        cards.unshift(
			<Card key={0} className={styles.placeholderCard} onClick={this.createNewProject.bind(this)}>
			    <CardTitle className={styles.placeholderCardTitle}
					title={'Create new app'}
			    />
		  	</Card>
        )

        return cards;
    }

    searchProjects(array) {

    }

	sortProjects(dir) {
		let projects = this.state.projects;
		projects.sort(function(a,b) {
			if (dir === 'asc') {
	    		return new Date(a.last_edit).getTime() - new Date(b.last_edit).getTime();
			}
	    	return new Date(b.last_edit).getTime() - new Date(a.last_edit).getTime();
		});
        this.setState({
            projects : projects,
            sort: dir
        });
	}

    createNewProject() {

    }

    deleteProject(project) {
    	let projects = this.state.projects;
    	let index = projects.indexOf(project);

    	projects.splice(index, 1);
    	this.setState({projects: projects});
    }

    downloadProject(project) {
    	this.setState({selectedProject: project});
    }

    onCardSelected(project) {
    	this.setState({selectedProject: project});
    }

	render() {
		return(
			<div>
				<MainNavBar title={this.state.title} />
				<SideBar project={this.state.selectedProject} />
				<div className={styles.dashboardWrapper}>
					<section className={styles.dashboard}>
						<div className={styles.dashboardHeader}></div>
						<section className={styles.projectToolbar}>
							<ProjectToolBar toolbar={this.state.toolbar} projects={this.state.projects} />
						</section>
						<div className={styles.projectToolbar}></div>
						<section className={styles.cardList}>
							{this.renderCards()}
						</section>
				  	</section>
				</div>
			</div>
		);
	}
}
