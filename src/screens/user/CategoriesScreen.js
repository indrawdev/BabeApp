import React from 'react'
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native'
import { CommonActions } from '@react-navigation/native';

import { CATEGORIES } from '../../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {

    const renderGridItem = (itemData) => { 
        return (
            <TouchableOpacity style={styles.gridItem}
                onPress={() => { 
                    navigation.dispatch(
                        CommonActions.navigate({
                            name: 'PostDetail',
                            params: {
                                categoryId: itemData.item.id
                            }
                        })
                    )
                }}
            >
                <View> 
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

CategoriesScreen.navigationOptions = {
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        width: '100%',
        padding: 10,
        alignItems: 'center'
    }
})

export default CategoriesScreen
