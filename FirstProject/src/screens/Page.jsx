import{Text, View, StyleSheet} from 'react-native';
import { PageHeader } from '../components/Page/PageHeader';
import { PageContent } from '../components/Page/PageContent';

export default function Page() {
    return (
        <View style={styles.page}>
        <PageHeader/>
        <PageContent/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%'
    },
  });