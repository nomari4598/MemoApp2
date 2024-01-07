import { View, Text, StyleSheet, TextInput } from "react-native";
import { Header } from "../../components/Header";

const Login = (): JSX.Element => {
    const {
        container,
        inner,
        title,
        input,
        button,
        buttonLabel,
        footer,
        footerLink,
        footerText,
    } = styles;
    return (
        <View style={container}>
            <Header />
            <View style={inner}>
                <Text style={title}>Log In</Text>
                <TextInput style={input} value="Email address" />
                <TextInput style={input} value="Password" />
                <View style={button}>
                    <Text style={buttonLabel}>Submit</Text>
                </View>
                <View style={footer}>
                    <Text style={footerText}>Not registered?</Text>
                    <Text style={footerLink}>Sign up here!</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f4f8",
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
        marginBottom: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: "#dddddd",
        backgroundColor: "#ffffff",
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
    },
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
    footer: {
        flexDirection: "row",
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: "#000000",
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: "#467fd3",
    },
});

export default Login;
