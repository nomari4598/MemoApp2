import { View, Text, StyleSheet } from "react-native";

type SubmitButtonProps = {
    displayLabelValue: string;
};

export const SubmitButton = (props: SubmitButtonProps): JSX.Element => {
    const { displayLabelValue } = props;
    const { button, buttonLabel } = styles;

    return (
        <View style={button}>
            <Text style={buttonLabel}>{displayLabelValue}</Text>
        </View>
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
