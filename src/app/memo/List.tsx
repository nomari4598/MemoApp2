import { View, StyleSheet } from "react-native";
import { MemoListItem } from "../../components/MemoListItem";
import { CircleButton } from "../../components/CircleButton";
import { Icon } from "../../components/Icon";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { LogOutButton } from "../../components/LogOutButton";

/**
 * 画面上に表示されるコンポーネントの母体
 * ※exportの仕方や書き方はこのファイルに限ってはこの通りに記載し、変更しないこと
 *
 * @returns 画面構成の母体
 */
const List = (): JSX.Element => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <LogOutButton />;
            },
        });
    }, []);

    const handlePress = (): void => {
        router.push("memo/Create");
    };

    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon iconName="plus" size={40} color="#ffffff" />
            </CircleButton>
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

export default List;
