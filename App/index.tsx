import * as SplashScreen from "expo-splash-screen";

import { Text, View } from "react-native";

import Editor from "./Editor/Editor";
import StaticText from "./Widget/components/StaticText";
import { StatusBar } from "expo-status-bar";
import Widget from "./Widget/Widget";
import { useCallback } from "react";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({ Nunito: require("../assets/font/static/Nunito-Bold.ttf") });

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) return null;

	return (
		<View
			onLayout={onLayoutRootView}
			className="flex w-full h-full items-center justify-center bg-zinc-100 dark:bg-zinc-800">
			<Text className="font-rounded text-zinc-900 dark:text-zinc-50">Hello</Text>
			<Widget
				data={{
					name: "Widget",
					id: "widget_1",
					components: [
						new StaticText("This is smaller text", "smaller"),
						new StaticText("This is small text", "small"),
						new StaticText("This is normal text", "normal"),
						new StaticText("This is large text", "large"),
						new StaticText("This is larger text", "larger"),
					],
				}}
			/>
			<Editor />
			<StatusBar style="auto" />
		</View>
	);
}
