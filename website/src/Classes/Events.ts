// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {EventType} from "../Types";
import {App} from "@tassilo/boiling-react";

export class Events {

	private static loaded: EventType = EventType.NONE;

	public static GetActualEvent(): EventType {
		return EventType.NONE;
	}

	public static GetLoadedEvent(): EventType {
		return Events.loaded;
	}

	public static SetEvent(event: EventType) {
		Events.UnloadEvent(Events.loaded);
		Events.loaded = event;
		Events.LoadEvent(Events.loaded);
	}



	private static LoadEvent(event: EventType) {
		App.Logger().Info("Loading event " + event + "...");
		switch (event) {
			case EventType.XMAS_MONTH: /* TODO */ break;
			case EventType.XMAS_DAYS: /* TODO */ break;
			case EventType.NEW_YEARS: /* TODO */ break;
			case EventType.EASTER: /* TODO */ break;
			case EventType.GAY_PRIDE: Events.LoadGayPride(); break;
		}
		App.Logger().Info("Event " + event + " has been loaded!");
	}

	private static LoadGayPride() {
		document.body.classList.add("event-gay-pride");
	}



	private static UnloadEvent(event: EventType) {
		App.Logger().Info("Unloading event " + event + "...");
		switch (event) {
			case EventType.XMAS_MONTH: /* TODO */ break;
			case EventType.XMAS_DAYS: /* TODO */ break;
			case EventType.NEW_YEARS: /* TODO */ break;
			case EventType.EASTER: /* TODO */ break;
			case EventType.GAY_PRIDE: Events.UnloadGayPride(); break;
		}
		App.Logger().Info("Event " + event + " has been unloaded!");
	}

	private static UnloadGayPride() {
		document.body.classList.remove("event-gay-pride");
	}

}
