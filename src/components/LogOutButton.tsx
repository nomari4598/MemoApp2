import { Link } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const LogOutButton = (): JSX.Element => {
    const { text } = styles;

    return (
        <Link href={"auth/Login"} asChild replace>
            <TouchableOpacity>
                <Text style={text}>ログアウト</Text>
            </TouchableOpacity>
        </Link>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: "rgba(255, 255, 255, 0.7)",
    },
});
