import React from 'react'
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { CATEGORIES } from '../../data/dummy-data'

const renderGridItem = (itemData) => { 
    return (
        <TouchableOpacity
            onPress={() => { 

            }}
        >
            <View style={styles.gridItem}> 
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const CategoriesScreen = () => {
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
