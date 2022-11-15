import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdvdvEFk9YxucomOCGV0v3aPcq9VHt2dY",
  authDomain: "facebook-clone-yt-70415.firebaseapp.com",
  projectId: "facebook-clone-yt-70415",
  storageBucket: "facebook-clone-yt-70415.appspot.com",
  messagingSenderId: "993020480137",
  appId: "1:993020480137:web:9e894ab90b8db0d055d458",
};

// initialize하기 전에 이미 initialize되어 있는지 확인한다. 서버사이드 렌더링을 하기 때문에
// firebase에 실행 중인 게 있다면 유지하고, 아니면 초기화한다.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
