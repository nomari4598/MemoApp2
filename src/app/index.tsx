import { View, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { MemoListItem } from "../components/MemoListItem";
import { CircleButton } from "../components/CircleButton";

/**
 * 画面上に表示されるコンポーネントの母体
 * ※exportの仕方や書き方はこのファイルに限ってはこの通りに記載し、変更しないこと
 *
 * @returns 画面構成の母体
 */
const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton>+</CircleButton>
        </View>
    );
};

// 高さ関連の数値はpx換算
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
});

export default Index;
