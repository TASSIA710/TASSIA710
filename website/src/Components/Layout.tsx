// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {Footer, Header} from "../Components";

interface LayoutProperties {
	superTab: string;
}

export class Layout extends Component<LayoutProperties> {

	public render() {
		return <div>
			<Header tab={this.props.superTab} />
			{this.props.children}
			<Footer />
		</div>;
	}

}
