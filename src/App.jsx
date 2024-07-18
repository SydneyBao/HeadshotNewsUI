import { useState, useEffect } from 'react'
import { getArticlesFirestore } from './functions'
import { NavBar } from './components/NavBar';
import { NewsItem } from './components/NewsItem';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const res = await getArticlesFirestore();
      setArticles(res);
    } catch (error) {
      console.error("error fetching articles", error);
    }
  };

  const getOtherArticles = () => (
    <div className="row justify-content-center align-items-start row-cols-3 row-cols-med-2 cols-sm-1">
      {articles.map((news) => (
        <NewsItem key={news.url} title={news.title} imageSrc={news.image} url={news.url} source={news.source}/>
      ))}
    </div>
  );

  console.log(articles?.length);

  return (
    <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
      <NavBar/>
      <div className="p-3">
        <div className="container-sm py-5">
          {articles.length > 0 ? (
            <div className="mt-6 pt-6">
              {getOtherArticles()}
            </div>
          ) : (
            <p className="pt-4">
              Unfortunately, there hasn't been any recent news.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App