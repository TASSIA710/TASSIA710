// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {App} from "@tassilo/boiling-react";
import {ConsoleCommand} from "../../Classes";

import {EventCommand} from "./Commands/EventCommand";
import {HelpCommand} from "./Commands/HelpCommand";

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

	public static RegisterCommands() {
		App.Logger().Info("Registering Console Commands...");

		Console.RegisterCommand(new EventCommand());
		Console.RegisterCommand(new HelpCommand());

		App.Logger().Info("Registered " + Object.keys(Console.commands).length + " commands.");
	}



	public static async RunCommandPure(cmdString: string, output: ConsoleOutFeedback): Promise<void> {
		// Push feedback
		Console.feedback = output

		// Parse cmd string
		cmdString = cmdString.trim();
		const splitIndex = cmdString.indexOf(" ");
		const cmd: string = cmdString.substring(0, splitIndex !== -1 ? splitIndex : cmdString.length);
		const argsStr = cmdString.substring(cmd.length).trim();
		const args: string[] = argsStr === "" ? [] : argsStr.split(" ");
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
			Console.Error("system", "Unknown command. Type 'help' for a list of available commands.");
			return;
		}

		// Execute command
		const status = await command.execute(args, flags);
		if (status !== 0) {
			Console.Error("system", "Program '" + command.Name + "' exited with non-zero exit code: " + status);
		}
	}



	public static Print(user: string, message: string) {
		if (Console.feedback != null) {
			Console.feedback(user, message);
		} else {
			throw new Error("No active feedback for console!");
		}
	}

	public static Warning(user: string, message: string) {
		Console.Print(user, "[WARNING] " + message);
	}

	public static Error(user: string, message: string) {
		Console.Print(user, "[ERROR] " + message);
	}

}
