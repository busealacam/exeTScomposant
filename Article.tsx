import {Text, View} from 'react-native';

type ArticleProps = {
    title: string;
    text: string;
}

let Article = ({title, text}: ArticleProps): JSX.Element => 
    <View>
        <Text>{title} </Text>
        <Text>{text} </Text>
    </View>
        
export default Article;
