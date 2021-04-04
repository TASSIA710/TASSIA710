// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {Link} from "@tassilo/boiling-react";
import {Icons} from "../../Classes";
import {Project} from "../../Types";

interface ProjectCardProperties {
	project: Project;
}

export class ProjectCard extends Component<ProjectCardProperties> {

	public render() {
		const p = this.props.project;
		const link = "/projects/" + p.ProjectID + "/";

		const tags: JSX.Element[] = [];
		for (let i = 0; i < p.Tags.length; i++) {
			tags[i] = <span className="project-tag">{p.Tags[i]}</span>;
		}

		let hostedIcon: string;
		switch (p.Hosted) {
			case "github":
				hostedIcon = Icons.GITHUB;
				break;
			case "gitlab":
				hostedIcon = Icons.GITLAB;
				break;
		}

		let projectCardClass: string;
		if (p.IsVulnerable) {
			projectCardClass = "project-card project-card-danger";
		} else if (p.IsAbandoned || p.IsArchived) {
			projectCardClass = "project-card project-card-warning";
		} else if (p.IsScratch || p.IsFork) {
			projectCardClass = "project-card project-card-info";
		} else {
			projectCardClass = "project-card";
		}



		const status: JSX.Element[] = [];
		if (p.IsVulnerable) {
			status[status.length] = <span className="project-status project-status-danger">Vulnerable</span>;
		}
		if (p.IsAbandoned) {
			status[status.length] = <span className="project-status project-status-warning">Abandoned</span>;
		}
		if (p.IsArchived) {
			status[status.length] = <span className="project-status project-status-warning">Archived</span>;
		}
		if (p.IsFork) {
			status[status.length] = <span className="project-status project-status-info">Fork</span>;
		}
		if (p.IsScratch) {
			status[status.length] = <span className="project-status project-status-info">Scratch</span>;
		}



		return <Link href={link} className="project-card-link col-6">
			<div className={projectCardClass}>

				<div className="project-icons">
					<Link href={p.LanguageLink} newTab>
						<img src={p.LanguageIcon} alt="logo" />
					</Link>
					<Link href={p.HostedLink} newTab>
						<img src={hostedIcon} alt="logo" />
					</Link>
				</div>

				<div className="project-content">

					<div className="project-info">
						<div className="project-title">{p.Name}{status}</div>
						<div className="project-description">{p.Description}</div>
					</div>

					<hr/>

					<div className="project-tags">{tags}</div>

				</div>

			</div>
		</Link>;
	}

}
