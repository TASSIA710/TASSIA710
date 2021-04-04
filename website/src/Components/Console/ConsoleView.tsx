// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import React, {Component} from "react";
import {ConsoleLine} from "../../Components";
import {Console} from "../../Classes";

interface ConsoleViewProperties {
}

class ConsoleViewState {
	public lines: JSX.Element[] = [];
}

export class ConsoleView extends Component<ConsoleViewProperties, ConsoleViewState> {

	constructor(props: ConsoleViewProperties) {
		super(props);
		this.state = new ConsoleViewState();
		this.addLine("system", "Running TS-DOS v1.0.0 - (c) 2021 Tassilo <tassia710@gmail.com>");
		this.addLine("system", "Licensed under the MIT License.");
	}

	private static submitForm(event: React.FormEvent<HTMLFormElement>, view: ConsoleView) {
		event.preventDefault();
		const input = event.currentTarget.children.item(0) as HTMLInputElement;
		ConsoleView.submitCommand(input.value, view);
		input.value = "";
	}

	private static submitInput(event: React.FormEvent<HTMLInputElement>, view: ConsoleView) {
		event.preventDefault();
		ConsoleView.submitCommand(event.currentTarget.value, view);
		event.currentTarget.value = "";
	}



	private static submitCommand(cmdString: string, view: ConsoleView) {
		ConsoleView.commandFeedback(Console.GetUser(), cmdString, view, false);
		const feedback = (user: string, line: string) => ConsoleView.commandFeedback(user, line, view);
		Console.RunCommandPure(cmdString, feedback).catch(console.error);
	}

	private static commandFeedback(user: string, line: string, view: ConsoleView, system: boolean = true) {
		view.state.lines[view.state.lines.length] = <ConsoleLine user={user} content={line} system={system} />;
		view.setState(view.state);
	}



	public addLine(user: string, message: string, system: boolean = true) {
		const line = <ConsoleLine user={user} content={message} system={system} />;
		this.state.lines[this.state.lines.length] = line;
	}



	public render() {
		return <div className="console-view container">
			<div className="console">

				<pre className="console-output">
					{this.state.lines}
				</pre>

				<form onSubmit={event => ConsoleView.submitForm(event, this)}>
					<input type="text" className="console-input"
						   onSubmit={event => ConsoleView.submitInput(event, this)} />
				</form>

			</div>
		</div>;
	}

}
