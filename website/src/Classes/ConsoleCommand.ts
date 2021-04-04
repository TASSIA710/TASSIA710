// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Console} from "../Classes";

export abstract class ConsoleCommand {

	public ID: number | null = null;
	public readonly Name: string;
	public readonly Description: string;

	protected constructor(name: string, description: string) {
		this.Name = name;
		this.Description = description;
	}

	public Print(line: string) {
		Console.Print(this.Name, line);
	}

	abstract execute(args: string[], flags: any): Promise<number>

}
