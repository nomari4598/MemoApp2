import { View, Text, StyleSheet } from "react-native";

/**
 * MemoAppヘッダー部分
 *
 * @returns MemoAppヘッダー部分
 */
export const Header = (): JSX.Element => {
    const { header, headerInner, headerTitle, headerRight } = styles;

    return (
        <View style={header}>
            <View style={headerInner}>
                <Text style={headerTitle}>Memo App</Text>
                <Text style={headerRight}>ログアウト</Text>
            </View>
        </View>
    );
};

// 高さ関連の数値はpx換算
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#467FD3",
        height: 104,
        justifyContent: "flex-end",
    },
    headerInner: {
        alignItems: "center",
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: "bold",
        color: "#ffffff",
    },
    headerRight: {
        position: "absolute",
        right: 16,
        bottom: 16,
        color: "rgba(255, 255, 255, 0.7)",
    },
});
