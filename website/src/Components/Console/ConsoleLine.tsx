// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";

interface ConsoleLineProperties {
	user: string;
	content: string;
	system: boolean;
}

export class ConsoleLine extends Component<ConsoleLineProperties> {

	public render() {
		return <div className="con-out-line">
			<span className={this.props.system ? "con-out-system" : "con-out-user"}>{this.props.user}</span>
			<span className="con-out-helper">&gt;</span>
			<span className="con-out-content">{this.props.content}</span>
		</div>;
	}

}
