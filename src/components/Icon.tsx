import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import fontData from "../../assets/fonts/icomoon.ttf";
import fontSelection from "../../assets/fonts/selection.json";

const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,
    "IconMoon",
    fontData
);

type IconProps = {
    iconName: string;
    size?: number;
    color?: string;
};

/**
 * アイコンフォント読み込み
 *
 * @returns アイコンフォント
 */
export const Icon = (props: IconProps): JSX.Element | null => {
    const { iconName, size, color } = props;

    const [fontLoaded] = useFonts({
        IcoMoon: fontData,
    });

    if (!fontLoaded) {
        return null;
    }

    return <CustomIcon name={iconName} size={size} color={color} />;
};
