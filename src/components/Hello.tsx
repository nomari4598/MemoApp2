import { StyleSheet, Text, View } from "react-native";
import type { TextStyle } from "react-native";

type HelloProps = {
    bang?: boolean;
    children: string;
    style?: TextStyle;
};

export const Hello = (props: HelloProps): JSX.Element => {
    const { bang, children, style } = props;

    return (
        <View>
            <Text style={[styles.text, style]}>
                Hello {children}
                {bang === true ? "!" : ""}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        backgroundColor: "blue",
        fontSize: 40,
        fontWeight: "bold",
        padding: 16,
    },
});
