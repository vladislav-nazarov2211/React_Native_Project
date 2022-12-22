import { View, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Card } from '../Card/Card';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { styles } from './MainSectionStyles'
import { fetchCards } from '../../redux/features/cards/cardsSlice';

export const MainSection = ({navigation}) => {
    const dispatch = useDispatch()
    const cards = useSelector((state) => state.cards.cardsArray)
	const isLoading = useSelector((state) => state.cards.isLoading)
    const btnFavourites = useSelector((state) => state.cards.btnFavourites)

	useEffect(() => {
		dispatch(fetchCards())
	}, [])

	if (isLoading) {
		return (
		<View style={styles.loader}>
			<ActivityIndicator size="large" />
		</View>
		)
	}

	return (
		<View style={styles.items}>
			<FlatList 
				refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => {dispatch(fetchCards())}} tintColor={'#b3b3b3'} />}
				data={cards}
				renderItem={({item}) => {
					if (btnFavourites) { 
						if (item.isLike === true) {
							return (
								<TouchableOpacity onPress={() => navigation.navigate('OpenedCard', {id: item.id, imageCard: item.image, title: item.title, complexName: item.complex_name, square: item.square, floor: item.floor })}>
									<Card image={item.image} title={item.title} id={item.id} isLike={item.isLike} />
								</TouchableOpacity>
							)
						}  
					} else {
						return (
							<TouchableOpacity onPress={() => navigation.navigate('OpenedCard', {id: item.id, imageCard: item.image, title: item.title, complexName: item.complex_name, square: item.square, floor: item.floor })}>
								<Card image={item.image} title={item.title} id={item.id} isLike={item.isLike} />			
							</TouchableOpacity>
						)
					}
				}}
			/>
		</View>
	);
}

