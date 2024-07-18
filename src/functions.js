import { getDocs, collection } from "@firebase/firestore/lite";
import { db } from "./main";

export async function getArticlesFirestore() {
    const q = collection(db, "news");
    const querySnapshot = await getDocs(q);
    
    const articles = [];
    querySnapshot.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() });
    });

    return articles;
}