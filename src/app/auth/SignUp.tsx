import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { SubmitButton } from "../../components/SubmitButton";
import { Link, router } from "expo-router";
import { useRef } from "react";

const SignUp = (): JSX.Element => {
    const { container, inner, title, input, footer, footerLink, footerText } =
        styles;

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handlePress = (): void => {
        // 会員登録
        router.push("memo/List");
    };

    return (
        <View style={container}>
            <View style={inner}>
                <Text style={title}>Sign Up</Text>
                <TextInput
                    style={input}
                    ref={emailRef}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                />
                <TextInput
                    style={input}
                    ref={passwordRef}
                    autoCapitalize="none"
                    secureTextEntry
                    placeholder="Password"
                    textContentType="password"
                />
                <SubmitButton
                    displayLabelValue="Submit"
                    onPress={handlePress}
                />
                <View style={footer}>
                    <Text style={footerText}>Already registered?</Text>
                    {/* Linkタブに子要素を含めるためにはasChildが必須 */}
                    <Link href="auth/Login" asChild replace>
                        <TouchableOpacity>
                            <Text style={footerLink}>Log In</Text>
                        </TouchableOpacity>
                    </Link>
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

export default SignUp;
