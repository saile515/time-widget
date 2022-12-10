import { TextInput, View } from "react-native";

import { useState } from "react";

export default function Editor() {
	const [value, setValue] = useState<string>("");

	return (
		<View className="w-full flex items-center">
			<TextInput
				className="w-10/12 h-32 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 android:font-mono ios:font-menlo p-4"
				multiline
				textAlignVertical="top"
				value={value}
				onChangeText={setValue}></TextInput>
		</View>
	);
}
