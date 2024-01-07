import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Header } from "../../components/Header";
import { CircleButton } from "../../components/CircleButton";
import { Icon } from "../../components/Icon";
import { router } from "expo-router";

const Detail = (): JSX.Element => {
    const {
        container,
        memoHeader,
        memoDate,
        memoTitle,
        memoBody,
        memoBodyText,
        circleButton,
    } = styles;

    const handlePress = (): void => {
        router.push("memo/Edit");
    };

    return (
        <View style={container}>
            <Header />
            <View style={memoHeader}>
                <Text style={memoTitle}>買い物リスト</Text>
                <Text style={memoDate}>2023年10月1日 10:00</Text>
            </View>
            <View>
                <ScrollView style={memoBody}>
                    <Text style={memoBodyText}>
                        テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                        ててつてすううつすえううせううえせせつぇつぇうう
                    </Text>
                </ScrollView>
            </View>
            <CircleButton viewStyle={circleButton} onPress={handlePress}>
                <Icon iconName="pencil" size={40} color="#ffffff" />
            </CircleButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    memoHeader: {
        backgroundColor: "#467fd3",
        height: 96,
        justifyContent: "center",
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: "#ffffff",
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
    },
    memoDate: {
        color: "#ffffff",
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#000000",
    },
    circleButton: {
        top: 160,
        bottom: "auto",
    },
});

export default Detail;
