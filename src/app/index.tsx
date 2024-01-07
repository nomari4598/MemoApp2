import { Redirect } from "expo-router";

/**
 * 画面上に表示されるコンポーネントの母体
 * ※exportの仕方や書き方はこのファイルに限ってはこの通りに記載し、変更しないこと
 *
 * @returns 画面構成の母体
 */
const Index = (): JSX.Element => {
    return <Redirect href="auth/Login" />;
};

export default Index;
