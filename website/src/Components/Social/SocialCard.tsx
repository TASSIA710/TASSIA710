// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";

interface SocialCardProperties {
	icon: string;
	name: string;
	color: string;
	description: string;
}

export class SocialCard extends Component<SocialCardProperties> {

	public render() {
		return <div className="col-6">
			<div className="social-card" style={{background: this.props.color}}>
				<img src={this.props.icon} alt="logo" />
				<div className="social-info">
					<div className="social-title">{this.props.name}</div>
					<div className="social-description">{this.props.description}</div>
				</div>
			</div>
		</div>;
	}

}
