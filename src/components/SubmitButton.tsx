import { Text, StyleSheet, TouchableOpacity } from "react-native";

type SubmitButtonProps = {
    displayLabelValue: string;
    onPress?: () => void;
};

export const SubmitButton = (props: SubmitButtonProps): JSX.Element => {
    const { displayLabelValue, onPress } = props;
    const { button, buttonLabel } = styles;

    return (
        <TouchableOpacity style={button} onPress={onPress}>
            <Text style={buttonLabel}>{displayLabelValue}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#467fd3",
        borderRadius: 4,
        alignSelf: "flex-start",
        marginBottom: 24,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
});
