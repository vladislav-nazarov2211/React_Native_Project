import { Text, View, Image, TouchableOpacity } from 'react-native';
import heart from "../../img/heart.png"
import redHeart from "../../img/redHeart.png"
import cross from "../../img/cross.png"
import { useDispatch } from 'react-redux';
import { toggleFavouritesCard, deleteCard } from '../../redux/features/cards/cardsSlice';
import { styles } from './CardsStyles'

export const Card = (props) => {
  	const dispatch = useDispatch()
	
	return (
		<View style={styles.item}>
			<View style={styles.imgWrapper}>
				<Image source={{uri: props.image}} style={styles.img}></Image>
			</View>
			<Text style={styles.description}>{props.title}</Text>
			<View style={styles.btns}>
				<TouchableOpacity onPress={() => {dispatch(toggleFavouritesCard(props.id))}}>
					<View style={styles.heartWrapper}>
						{props.isLike ? 
							<Image source={redHeart}></Image>
						:
							<Image source={heart}></Image>
						}
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {dispatch(deleteCard(props.id))}}>
					<Image source={cross}></Image>  
				</TouchableOpacity>
			</View>
		</View>		
	);
}

