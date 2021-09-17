import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

class FirebaseService {
	static instance:FirebaseService;
	static app:FirebaseApp;

	private constructor() {}

	static init():FirebaseApp {
		if (!FirebaseService.instance && !FirebaseService.app) {
			const config = {
				apiKey: "AIzaSyDBavRAyfNqppxkIYxluMF5aKldci9cZuA",
				authDomain: "ermanager-600ab.firebaseapp.com",
				projectId: "ermanager-600ab",
				storageBucket: "ermanager-600ab.appspot.com",
				messagingSenderId: "959652140523",
				appId: "1:959652140523:web:73467b527d4088f4f675ae",
				measurementId: "G-EQTQJ08H0L"
			};
	
			const app = getApps().length === 0 ? initializeApp(config) : getApp();
			getAnalytics(app);

			FirebaseService.instance = new FirebaseService();
			FirebaseService.app = app;
		}

		return FirebaseService.app;
	}
}

export default FirebaseService.init();