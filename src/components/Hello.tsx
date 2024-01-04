import { Text, View } from "react-native";

type HelloProps = {
    children: string;
};

export const Hello = (props: HelloProps): JSX.Element => {
    const { children } = props;

    return (
        <View>
            <Text>Hello {children}</Text>
        </View>
    );
};
