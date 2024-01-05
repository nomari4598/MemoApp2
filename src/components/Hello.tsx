import { StyleSheet, Text, View } from "react-native";

type HelloProps = {
    children: string;
};

export const Hello = (props: HelloProps): JSX.Element => {
    const { children } = props;

    return (
        <View>
            <Text style={styles.text}>Hello {children}</Text>
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
