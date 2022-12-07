import * as SplashScreen from "expo-splash-screen";

import { Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
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
		<View onLayout={onLayoutRootView} className="flex w-screen h-screen items-center justify-center bg-white">
			<Text className="font-rounded">Hello</Text>
			<StatusBar style="auto" />
		</View>
	);
}
