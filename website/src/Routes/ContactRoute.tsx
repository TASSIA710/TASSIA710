// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Route} from "@tassilo/boiling-react";
import {Views} from "../Classes/Views";

export class ContactRoute extends Route {

	public constructor() {
		super("Contact", /\/contact\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		Views.Render(<div/>, "contact");
	}

}
