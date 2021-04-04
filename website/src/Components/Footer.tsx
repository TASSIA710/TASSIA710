// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {Link} from "@tassilo/boiling-react";

export class Footer extends Component {

	public render() {
		return <div className="page-footer">
			<div className="row">

				<div className="col align-left">
					<span>&copy; 2021 <Link href="/" newTab>Tassilo</Link></span>
				</div>

				<div className="col align-right">
					<span>Icons & Images by <Link href="https://icons8.com/" newTab>Icons8</Link>.</span>
				</div>

			</div>
		</div>;
	}

}
