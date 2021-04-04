// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {EventType} from "../Types";
import {App} from "@tassilo/boiling-react";

export class Events {

	public static GetEvent(): EventType {
		return EventType.NONE;
	}



	public static LoadEvent(event: EventType) {
		App.Logger().Info("Loading event " + event + "...");
		switch (event) {
			case EventType.NONE: Events.LoadNone(); break;
			case EventType.XMAS_MONTH: /* TODO */ break;
			case EventType.XMAS_DAYS: /* TODO */ break;
			case EventType.NEW_YEARS: /* TODO */ break;
			case EventType.EASTER: /* TODO */ break;
			case EventType.GAY_PRIDE: Events.LoadGayPride(); break;
		}
		App.Logger().Info("Event " + event + " has been loaded!");
	}

	private static LoadNone() {
		// Do nothing
	}

	private static LoadGayPride() {
		document.body.classList.add("event-gay-pride");
	}



	public static UnloadEvent(event: EventType) {
		App.Logger().Info("Unloading event " + event + "...");
		switch (event) {
			case EventType.NONE: Events.UnloadNone(); break;
			case EventType.XMAS_MONTH: /* TODO */ break;
			case EventType.XMAS_DAYS: /* TODO */ break;
			case EventType.NEW_YEARS: /* TODO */ break;
			case EventType.EASTER: /* TODO */ break;
			case EventType.GAY_PRIDE: Events.UnloadGayPride(); break;
		}
		App.Logger().Info("Event " + event + " has been unloaded!");
	}

	private static UnloadNone() {
		// Do nothing
	}

	private static UnloadGayPride() {
		document.body.classList.remove("event-gay-pride");
	}

}
