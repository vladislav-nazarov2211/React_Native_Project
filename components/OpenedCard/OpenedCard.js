import { Text, View, Image, ActivityIndicator } from 'react-native';
import { styles } from './OpenedCardStyles'
import { useEffect } from 'react';
import { fetchObj } from '../../redux/features/cards/cardsSlice'
import { useDispatch, useSelector } from 'react-redux';

export const OpenedCard = ({route}) => {
    const isLoading = useSelector((state) => state.cards.isLoading)
    const {id, imageCard, title, complexName, square, floor} = route.params
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchObj())   
    }, [])

    if (isLoading) {
		return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
		)
	}

	return (
        <View style={styles.item}>
            <View style={styles.imgWrapper}>
                <Image source={{uri: imageCard}} style={styles.img}></Image>
            </View>
            <View>
                <Text style={styles.description}>Тип: {title}</Text>
                <Text style={styles.description}>Комплекс: {complexName}</Text>
                <Text style={styles.description}>Площадь кв. м: {square}</Text>
                <Text style={styles.description}>Этаж: {floor}</Text>
            </View>
        </View>        		
	);
}


