// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {ConsoleCommand} from "../Classes";
import {stat} from "fs";

type ConsoleOutFeedback = (user: string, line: string) => void

export class Console {

	private static readonly commands: {[key: string]: ConsoleCommand} = {};
	private static user: string = "anonymous";
	private static feedback: ConsoleOutFeedback | null = null;



	public static SetUser(user: string) {
		Console.user = user;
	}

	public static GetUser(): string {
		return Console.user;
	}



	public static RegisterCommand(command: ConsoleCommand) {
		command.ID = Object.keys(Console.commands).length + 1;
		Console.commands[command.Name.toLowerCase()] = command;
	}



	public static async RunCommandPure(cmdString: string, output: ConsoleOutFeedback): Promise<void> {
		// Push feedback
		Console.feedback = output

		// Parse cmd string
		const cmd: string = cmdString;
		const args: string[] = [];
		const flags: any = {};
		// TODO

		// Run command
		await Console.RunCommand(cmd, args, flags);

		// Pop feedback
		Console.feedback = null
	}

	public static async RunCommand(cmd: string, args: string[], flags: any): Promise<void> {
		// Find command
		const command = Console.commands[cmd.toLowerCase()];

		// Unknown command?
		if (command == null) {
			Console.Print("system", "[ERROR] Unknown command. Type 'help' for a list of available commands.");
			return;
		}

		// Execute command
		const status = await command.execute(args, flags);
		if (status !== 0) {
			Console.Print("system", "[ERROR] Program '" + command.Name + "' exited with non-zero exit code: " + status);
		}
	}



	public static Print(user: string, message: string) {
		if (Console.feedback != null) {
			Console.feedback(user, message);
		} else {
			throw new Error("No active feedback for console!");
		}
	}

}
