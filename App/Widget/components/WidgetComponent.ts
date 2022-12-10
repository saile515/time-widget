import { ReactNode } from "react";
import uuid from "react-native-uuid";

export default class WidgetComponent {
	id: string;

	constructor() {
		this.id = uuid.v4() as string;
	}

	getNativeComponent(): ReactNode {
		return;
	}
}
