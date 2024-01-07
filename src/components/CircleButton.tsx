import { Text, StyleSheet, TouchableOpacity } from "react-native";
import type { ViewStyle } from "react-native";

type CircleButtonProps = {
    children: JSX.Element;
    viewStyle?: ViewStyle;
};

/**
 * メモ登録ボタン
 *
 * @returns メモ登録ボタン
 */
export const CircleButton = (props: CircleButtonProps): JSX.Element => {
    const { children, viewStyle } = props;
    const { circleButton, circleButtonLabel } = styles;

    return (
        <TouchableOpacity style={[circleButton, viewStyle]}>
            <Text style={circleButtonLabel}>{children}</Text>
        </TouchableOpacity>
    );
};

// 高さ関連の数値はpx換算
const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#467fd3",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 40,
        bottom: 40,
        // 以下iOS製品にしか機能しない
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        // 以下android製品にしか機能しない
        elevation: 8,
    },
    circleButtonLabel: {
        color: "#ffffff",
        fontSize: 40,
        lineHeight: 48,
    },
});
