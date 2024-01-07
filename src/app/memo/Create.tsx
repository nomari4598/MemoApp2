import {
    View,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
} from "react-native";
import { Header } from "../../components/Header";
import { CircleButton } from "../../components/CircleButton";
import { Icon } from "../../components/Icon";
import { router } from "expo-router";

const Create = (): JSX.Element => {
    const { container, input, inputContainer } = styles;

    const handlePress = (): void => {
        router.back();
    };

    return (
        // KeyboardAvoidingView(iOS対応分)
        <KeyboardAvoidingView behavior="height" style={container}>
            <Header />
            <View style={inputContainer}>
                {/* multiline追加(iOS対応分) */}
                <TextInput multiline style={input} value="" />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon iconName="check" size={40} color="#ffffff" />
            </CircleButton>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1,
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        // Android対応分
        textAlignVertical: "top",
    },
});

export default Create;
