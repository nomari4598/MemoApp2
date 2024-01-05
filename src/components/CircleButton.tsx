import { View, Text, StyleSheet } from "react-native";

type CircleButtonProps = {
    children: string;
};

/**
 * メモ登録ボタン
 *
 * @returns メモ登録ボタン
 */
export const CircleButton = (props: CircleButtonProps): JSX.Element => {
    const { children } = props;
    const { circleButton, circleButtonLabel } = styles;

    return (
        <View style={circleButton}>
            <Text style={circleButtonLabel}>{children}</Text>
        </View>
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
