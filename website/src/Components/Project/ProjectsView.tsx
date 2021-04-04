// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {ProjectCard} from "../../Components";
import {Website} from "../../Classes";

export class ProjectsView extends Component {

	public render() {
		const projects = Website.PROJECTS.sort((a,b) => {

			if (a.IsAbandoned && !b.IsAbandoned) return 1;
			if (!a.IsAbandoned && b.IsAbandoned) return -1;

			if (a.IsArchived && !b.IsArchived) return 1;
			if (!a.IsArchived && b.IsArchived) return -1;

			if (a.IsScratch && !b.IsScratch) return 1;
			if (!a.IsScratch && b.IsScratch) return -1;

			if (a.IsFork && !b.IsFork) return 1;
			if (!a.IsFork && b.IsFork) return -1;

			return a.Name.localeCompare(b.Name);
		});

		const cards: JSX.Element[] = [];

		for (let i = 0; i < projects.length; i++) {
			cards[i] = <ProjectCard project={projects[i]} />;
		}

		return <div className="projects-view container">
			<div className="row g-5">{cards}</div>
		</div>;
	}

}
