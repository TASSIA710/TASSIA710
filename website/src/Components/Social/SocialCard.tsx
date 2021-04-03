// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {Link} from "../../Components";

interface SocialCardProperties {
	icon: string;
	social: string;
	name: string;
	description: string;
}

export class SocialCard extends Component<SocialCardProperties> {

	public render() {
		const className = "social-card social-card-" + this.props.social;
		const link = "/social/" + this.props.social + "/";

		return <Link href={link} newTab={true} className="social-card-link col-6">
			<div className={className}>
				<img src={this.props.icon} alt="logo" />
				<div className="social-info">
					<div className="social-title">{this.props.name}</div>
					<div className="social-description">{this.props.description}</div>
				</div>
			</div>
		</Link>;
	}

}
