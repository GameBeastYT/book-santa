import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DonateScreen extends React.Component {

    constructor() {
        super()
        this.state = { requested_book_list: [] }
    }

    get_requested_book_list = () => {
        this.requestRef = db.collection('requested_books')
            .onSnapshot(snapshot => {
                var requested_book_list = snapshot.docs.map(document => { document.data() })
                this.setState({ requested_book_list: requested_book_list })
            })
    }

    componentDidMount() {
        this.get_requested_book_list()
    }

    renderItem = ({ item, i }) => {
        return (
            <ListItem key={i}
            title = {item.book_name}
            subtitle = {item.description}
            titleStyle = {{color: 'black', fontWeight: 'bold'}}
            rightElement = {<TouchableOpacity>
                <Text>
                    View
                </Text>
            </TouchableOpacity>}
            bottomDivider />


        )
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.requested_book_list === 0 ? (<Text>
                        Request list is empty
                    </Text>) : (<FlatList keyExtractor={(item, index) => { index.toString() }}
                        data={this.state.requested_book_list}
                        renderItem={this.renderItem()} />)
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 1,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        borderWidth: 1,
        width: 200,
        height: 30
    }
})
