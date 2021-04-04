// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {ProjectCard} from "../../Components";
import {Website} from "../../Classes";

export class ProjectsView extends Component {

	public render() {
		const cards: JSX.Element[] = [];

		for (let i = 0; i < Website.PROJECTS.length; i++) {
			cards[i] = <ProjectCard project={Website.PROJECTS[i]} />;
		}

		return <div className="projects-view container">
			<div className="row g-5">{cards}</div>
		</div>;
	}

}
