import { Text, View, TouchableOpacity } from 'react-native';
import { setBtnFavourites } from '../../redux/features/cards/cardsSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { styles } from './NavbarStyles'

export const Navbar = () => {
    const dispatch = useDispatch()
    const btnFavourites = useSelector((state) => state.cards.btnFavourites)
  
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>Apartments</Text>
            <TouchableOpacity onPress={() => {dispatch(setBtnFavourites())}}>
                <Text style={btnFavourites ? styles.activeBtn : styles.btn}>Избранное</Text>
            </TouchableOpacity>  
        </View>
    );
}

