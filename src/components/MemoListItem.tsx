import { View, Text, StyleSheet } from "react-native";

/**
 * メモリスト内の要素
 *
 * @returns メモリスト内の要素
 */
export const MemoListItem = (): JSX.Element => {
    const { memoListItem, memoListItemDate, memoListItemTitle } = styles;

    return (
        <View style={memoListItem}>
            <View>
                <Text style={memoListItemTitle}>買い物リスト</Text>
                <Text style={memoListItemDate}>2023年10月1日 10:00</Text>
            </View>
            <Text>X</Text>
        </View>
    );
};

// 高さ関連の数値はpx換算
const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.15)",
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: "#848484",
    },
});
