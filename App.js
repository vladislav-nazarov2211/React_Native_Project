import { View } from 'react-native';
import { Navbar } from './components/Navbar/Navbar'
import { Navigation } from './components/Navigation'
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import { styles } from './AppStyles'

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

function App() {
	return (
			<View style={styles.container}>
				<Navbar />
				<Navigation />     
			</View>
	);
}


