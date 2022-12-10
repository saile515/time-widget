import React from "react-native";
import { ReactNode } from "react";
import WidgetComponent from "./WidgetComponent";

type TextSize = "smaller" | "small" | "normal" | "large" | "larger";

export default class Text extends WidgetComponent {
	text: string;
	size: TextSize;

	constructor(text: string, size?: TextSize) {
		super();
		this.text = text;
		this.size = size || "normal";
	}

	getNativeComponent(): ReactNode {
		return (
			<React.Text
				key={this.id}
				className={`font-rounded text-zinc-900 dark:text-zinc-50 ${
					this.size == "smaller"
						? "text-xs"
						: this.size == "small"
						? "text-sm"
						: this.size == "normal"
						? "text-base"
						: this.size == "large"
						? "text-lg"
						: this.size == "larger"
						? "text-xl"
						: ""
				}`}>
				{this.text}
			</React.Text>
		);
	}
}
