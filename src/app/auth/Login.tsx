import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Header } from "../../components/Header";
import { SubmitButton } from "../../components/SubmitButton";

const Login = (): JSX.Element => {
    const { container, inner, title, input, footer, footerLink, footerText } =
        styles;
    return (
        <View style={container}>
            <Header />
            <View style={inner}>
                <Text style={title}>Log In</Text>
                <TextInput style={input} value="Email address" />
                <TextInput style={input} value="Password" />
                <SubmitButton displayLabelValue="Submit" />
                <View style={footer}>
                    <Text style={footerText}>Not registered?</Text>
                    <TouchableOpacity>
                        <Text style={footerLink}>Sign up here!</Text>
                    </TouchableOpacity>
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
