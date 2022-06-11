// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	collection,
	query,
	where,
	getDocs,
	getFirestore,
	doc,
	setDoc,
} from "firebase/firestore";
import { getStorage, connectStorageEmulator, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAEppVj2a4Q3HgfSTtGd5qIjIzQ9woyBUg",
	authDomain: "beta-tracker-4cff4.firebaseapp.com",
	projectId: "beta-tracker-4cff4",
	storageBucket: "beta-tracker-4cff4.appspot.com",
	messagingSenderId: "1011194700839",
	appId: "1:1011194700839:web:8129427d72c2f431901a02",
};

// eslint-disable-next-line
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();
export const storageRef = ref(storage);
connectStorageEmulator(storage, "localhost", 9199);

export async function getLeaderboard(setLeaderboard: any) {
	console.log("Getting Leaderboard");
	const q = query(collection(db, "breakout"), where("show", "==", true));

	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		console.log("Got Data");
	});
}

export async function uploadScore(
	name: string,
	score: number,
	changeName: Function,
	reloadRef: any
) {
	//window.location.href = reloadRef;
	if (name === "") {
	} else {
		console.log("Uploading: " + name + ", " + score);
		try {
			await setDoc(doc(db, "breakout", name), {
				name: name,
				score: score,
				show: true,
			});
			changeName("");
		} catch (e) {
			console.error("Error uploading score: ", e);
		}
	}
}
