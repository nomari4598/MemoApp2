import { Text, View, StyleSheet } from "react-native";

/**
 * 画面上に表示されるコンポーネントの母体
 * ※exportの仕方や書き方はこのファイルに限ってはこの通りに記載し、変更しないこと
 *
 * @returns 画面構成の母体
 */
const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>
            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2023年10月1日 10:00</Text>
                    </View>
                    <Text>X</Text>
                </View>
            </View>
            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2023年10月1日 10:00</Text>
                    </View>
                    <Text>X</Text>
                </View>
            </View>
            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2023年10月1日 10:00</Text>
                    </View>
                    <Text>X</Text>
                </View>
            </View>
            <View>
                <Text>+</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Index;
