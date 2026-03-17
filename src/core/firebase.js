import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD90SkLA57LCNnPRCDp5-sA6x2lF0oasMc",
  authDomain: "comebiblia-43643.firebaseapp.com",
  projectId: "comebiblia-43643",
  storageBucket: "comebiblia-43643.firebasestorage.app",
  messagingSenderId: "704190300094",
  appId: "1:704190300094:web:0a726168ed731032d803ef",
  measurementId: "G-DZPX4SB193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
