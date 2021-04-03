// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import ReactDOM from "react-dom";
import {Layout} from "../Components";

export class Views {

	public static Render(element: JSX.Element, superTab: string) {
		Views.RenderPure(<Layout superTab={superTab}>{element}</Layout>)
	}

	public static RenderPure(element: JSX.Element) {
		ReactDOM.render(element, document.getElementById("root"));
	}

}
