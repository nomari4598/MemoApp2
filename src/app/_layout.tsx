import { Stack } from "expo-router";

/**
 * 使用媒体の画面に対して画面描画させるためのコンポーネント
 * ※exportの仕方や書き方はこのファイルに限ってはこの通りに記載し、変更しないこと
 *
 * @returns
 */
const Layout = (): JSX.Element => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#467FD3",
                },
                headerTintColor: "#ffffff",
                headerTitle: "Memo App",
                headerTitleStyle: {
                    fontSize: 22,
                    fontWeight: "bold",
                },
                headerBackTitle: "Back",
            }}
        />
    );
};

export default Layout;
