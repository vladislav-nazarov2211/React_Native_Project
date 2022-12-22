import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainSection } from './MainSection/MainSection'
import { OpenedCard } from './OpenedCard/OpenedCard'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={MainSection} options={{title: 'Список объектов'}} />
                <Stack.Screen name='OpenedCard' component={OpenedCard} options={{title: 'Описание объекта'}} />
            </Stack.Navigator>
        </NavigationContainer>   
    )
}