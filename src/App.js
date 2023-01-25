/* eslint-disable react/jsx-pascal-case */
/*Version 0.3*/
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import "@aws-amplify/ui-react/styles.css";
// import { API, Storage, Auth } from 'aws-amplify';
// import {
//   Button,
//   Flex,
//   Heading,
//   Image,
//   Text,
//   TextField,
//   View,
//   //withAuthenticator,
//   Authenticator
// } from '@aws-amplify/ui-react';
// import awsconfig from "./aws-exports";
//Multi Page
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AddInsurance from './pages/AddInsurance/AddInsurance';
import AddPersonal from './pages/AddPersonal/AddPersonal';
import AddLegacyManager from './pages/AddLegacyManager/AddLegacyManager';
import AddFuneral from './pages/AddFuneral/AddFuneral';
import AddOrder from './pages/AddOrder/AddOrder';
import AddRecieverLeacy from './pages/AddRecieverLeacy/AddRecieverLeacy';
import AddAssignLeacy from './pages/AddAssignLeacy/AddAssignLeacy';
import AddProperty from './pages/AddProperty/AddProperty';
import AddPropertyDetail from './pages/AddProperty/AddPropertyDetail';
// detail property
import Property_home from './pages/AddProperty/Detail/Property_home';
import Property_region from './pages/AddProperty/Detail/Property_region';
import Property_car from './pages/AddProperty/Detail/Property_car';
import Property_bookbank from './pages/AddProperty/Detail/Property_bookbank';
import Property_luxury from './pages/AddProperty/Detail/Property_luxury';
import Property_art from './pages/AddProperty/Detail/Property_art';
import Property_nft from './pages/AddProperty/Detail/Property_nft';
import Property_gold from './pages/AddProperty/Detail/Property_gold';
//
import AddDocument from './pages/AddDocument/AddDocument';
// import About from "./pages/About";
import PremiumPage from './pages/PremiumPage';
import PremiumPage2 from './pages/PremiumPage_2';
//Title page

import {Helmet, HelmetProvider} from 'react-helmet-async';

import Navbar from './Navbar/NavBar.jsx';

function App() {
	// const [loggedIn, setLoggedIn] = useState(false);

	// Amplify.configure(awsconfig);

	// const assessLoggedInState = () => {
	//   Auth.currentAuthenticatedUser()
	//     .then((sess) => {
	//       console.log("logged in");
	//       setLoggedIn(true);
	//     })
	//     .catch(() => {
	//       console.log("not logged in");
	//       setLoggedIn(false);
	//     });
	// };

	// useEffect(() => {
	//   assessLoggedInState();
	// }, []);

	// const signOut = async () => {
	//   try {
	//     await Auth.signOut();
	//     setLoggedIn(false);
	//   } catch (error) {
	//     console.log("error signing out: ", error);
	//   }
	// };

	return (
		<HelmetProvider>
			<div className='App'>
				<Helmet>
					<meta charSet='utf-8' />
					<title>alRIGHTs.co</title>
				</Helmet>

				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/Register' element={<Register />}></Route>
						<Route path='/Login' element={<Login />}></Route>
						<Route path='/ForgotPassword' element={<ForgotPassword />}></Route>
						<Route path='/Home' element={<Dashboard />}></Route>
						<Route path='/AddInsurance' element={<AddInsurance />}></Route>
						<Route path='/AddPersonal' element={<AddPersonal />}></Route>
						<Route path='/AddLegacyManager' element={<AddLegacyManager />}></Route>

						<Route path='/AddFuneral' element={<AddFuneral />}></Route>
						<Route path='/AddOrder' element={<AddOrder />}></Route>
						<Route path='/AddRecieverLeacy' element={<AddRecieverLeacy />}></Route>
						{/* new router */}
						<Route path='/AddProperty' element={<AddProperty />}></Route>
						<Route path='/AddPropertyDetail' element={<AddPropertyDetail />}></Route>
						<Route path='/Property_home' element={<Property_home />}></Route>
						<Route path='/Property_region' element={<Property_region />}></Route>
						<Route path='/Property_car' element={<Property_car />}></Route>
						<Route path='/Property_bookbank' element={<Property_bookbank />}></Route>
						<Route path='/Property_luxury' element={<Property_luxury />}></Route>
						<Route path='/Property_art' element={<Property_art />}></Route>
						<Route path='/Property_nft' element={<Property_nft />}></Route>
						<Route path='/Property_gold' element={<Property_gold />}></Route>
						{/* <Route path="/AddAssignLeacy" element={<AddAssignLeacy />}></Route>
            <Route path="/AddDocument" element={<AddDocument />}></Route>
            <Route path="/PremiumPage2"element={<PremiumPage2 />}></Route>
            <Route path="/PremiumPage"element={<PremiumPage />}></Route> */}
						{/* <Route path="/About"element={<About />}></Route> */}

						{/* <Route path="/about" element={<About />}></Route>
          <Route path="/premium" element={<PremiumPage />}></Route>
          <Route path="/premium_2" element={<PremiumPage2 />}></Route> */}
					</Routes>
				</Router>
			</div>
		</HelmetProvider>
	);
}

export default App;
