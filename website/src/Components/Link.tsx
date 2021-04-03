// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";

interface LinkProperties {
	href: string;
	reload: boolean;
}

export class Link extends Component<LinkProperties> {

	public static defaultProps = {
		"reload": false,
	};

	public render() {
		return <a href={this.props.href}>{this.props.children}</a>;
	}

}
