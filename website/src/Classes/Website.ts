// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Application, Route} from "@tassilo/boiling-react";
import {LoadRoutes} from "../Routes";
import {Console, Events} from "../Classes";

import {Tassilo} from "./Data/Me";
import * as Projects from "./Data/Projects";
import {Project} from "../Types";

export class Website extends Application {

	public static readonly SELF = Tassilo;

	public static readonly PROJECTS: Project[] = Object.values(Projects);



	public constructor() {
		super("Website", "1.0.0");
	}



	public LoadRoutes(): Route[] {
		return LoadRoutes();
	}

	public async Initialize(): Promise<void> {
		Console.RegisterCommands();
		Events.SetEvent(Events.GetActualEvent());
	}

}
