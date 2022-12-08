import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';

import Main from './MainStack';
import Auth from './AuthStack';



export default () => {
	
	const auth = localStorage.getItem("token");
	
	return (
		<NavigationContainer>
			{console.log(`index tsx: ${localStorage.getItem("token")}`)}
			{ 
 			auth == null  ? <Auth /> :<Main />
             
			 
			
 		  }	
		</NavigationContainer>
	);
};
