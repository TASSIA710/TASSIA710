// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {ConsoleCommand} from "../ConsoleCommand";
import {Events} from "../../../Classes";
import {EventType} from "../../../Types";

export class EventCommand extends ConsoleCommand {

	public constructor() {
		super("event", "Manages events.");
	}

	async execute(args: string[], flags: any): Promise<number> {
		if (args.length === 0) {
			this.Print("Event '" + Events.GetLoadedEvent() + "' is currently loaded.");
			return 0;
		}

		if (args.length === 2 && args[0] === "set") {
			const event = EventType[args[1] as keyof typeof EventType];
			if (event == null) {
				this.Print("Event '" + args[1] + "' was not found.");
				return 1;
			}

			this.Print("Loading event " + event + "...");
			Events.SetEvent(event);
			this.Print("Event '" + event + "' has been loaded.");
			return 0;
		}

		return 1;
	}

}
