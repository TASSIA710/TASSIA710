// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {Header} from "../Components";

export class Layout extends Component {

	public render() {
		return <div>
			<Header/>
			{this.props.children}
		</div>;
	}

}
