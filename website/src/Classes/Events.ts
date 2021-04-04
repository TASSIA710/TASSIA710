// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {EventType} from "../Types";
import {App} from "@tassilo/boiling-react";

export class Events {

	private static loaded: EventType = EventType.NONE;

	public static GetActualEvent(): EventType {
		return EventType.XMAS;
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
		if (event === EventType.NONE) return;
		App.Logger().Info("Loading event " + event + "...");
		switch (event) {
			case EventType.WINTER: /* TODO */ break;
			case EventType.XMAS: Events.LoadXMas(); break;
			case EventType.NEW_YEARS: /* TODO */ break;
			case EventType.EASTER: /* TODO */ break;
			case EventType.GAY_PRIDE: Events.LoadGayPride(); break;
		}
		App.Logger().Info("Event " + event + " has been loaded!");
	}

	private static LoadXMas() {
		document.body.classList.add("event-xmas");
	}

	private static LoadGayPride() {
		document.body.classList.add("event-gay-pride");
	}



	private static UnloadEvent(event: EventType) {
		if (event === EventType.NONE) return;
		App.Logger().Info("Unloading event " + event + "...");
		switch (event) {
			case EventType.WINTER: /* TODO */ break;
			case EventType.XMAS: Events.UnloadXMas(); break;
			case EventType.NEW_YEARS: /* TODO */ break;
			case EventType.EASTER: /* TODO */ break;
			case EventType.GAY_PRIDE: Events.UnloadGayPride(); break;
		}
		App.Logger().Info("Event " + event + " has been unloaded!");
	}

	private static UnloadXMas() {
		document.body.classList.remove("event-xmas");
	}

	private static UnloadGayPride() {
		document.body.classList.remove("event-gay-pride");
	}

}
