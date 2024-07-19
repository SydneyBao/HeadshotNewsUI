import { getDocs, collection, query, orderBy } from "@firebase/firestore/lite";
import { db } from "./main";

export async function getArticlesFirestore() {
    const q = query(collection(db, "news"), orderBy("title", "asc")); 
    const querySnapshot = await getDocs(q);
    
    const articles = [];
    querySnapshot.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() });
    });

    return articles;
}