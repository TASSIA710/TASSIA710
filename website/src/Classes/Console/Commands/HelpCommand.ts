// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {ConsoleCommand} from "../ConsoleCommand";

export class HelpCommand extends ConsoleCommand {

	static readonly EXIT_TOO_MANY_ARGS = 1;

	public constructor() {
		super("help", "Shows a list of available commands.");
	}

	async execute(args: string[], flags: any): Promise<number> {
		if (args.length !== 0) {
			return HelpCommand.EXIT_TOO_MANY_ARGS;
		}

		return 0;
	}

}
