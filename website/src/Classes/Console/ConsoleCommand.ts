// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Console} from "../../Classes";

export abstract class ConsoleCommand {

	public ID: number | null = null;
	public readonly Name: string;
	public readonly Description: string;

	protected constructor(name: string, description: string) {
		this.Name = name;
		this.Description = description;
	}

	abstract execute(args: string[], flags: any): Promise<number>



	public Print(message: string) {
		Console.Print(this.Name, message);
	}

	public Warning(message: string) {
		Console.Warning(this.Name, message);
	}

	public Error(message: string) {
		Console.Error(this.Name, message);
	}

}
