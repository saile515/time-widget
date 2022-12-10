import { View } from "react-native";
import WidgetComponent from "./components/WidgetComponent";

export interface WidgetData {
	name: string;
	id: string;
	components: WidgetComponent[];
}

export default function Widget(props: { data: WidgetData }) {
	return (
		<View className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-6">
			{props.data.components.map((component) => component.getNativeComponent())}
		</View>
	);
}
