async function fetchNews() {
    try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  (async () => {
    try {
      const newsList = await fetchNews();
      const newsListElement = document.getElementById('newsList');
  
      newsList.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
  
        const title = document.createElement('div');
        title.classList.add('news-title');
        title.textContent = news.title;
  
        const summary = document.createElement('div');
        summary.classList.add('news-summary');
        summary.textContent = news.summary;
  
        const source = document.createElement('div');
        source.classList.add('news-source');
        source.textContent = `Source: ${news.news_site}`;
  
        const published = document.createElement('div');
        published.classList.add('news-published');
        published.textContent = `Published at: ${news.published_at}`;
  
        const image = document.createElement('img');
        image.classList.add('news-image');
        image.src = news.image_url;
        image.alt = news.title;
  
        newsItem.appendChild(title);
        newsItem.appendChild(summary);
        newsItem.appendChild(source);
        newsItem.appendChild(published);
        newsItem.appendChild(image);
  
        newsListElement.appendChild(newsItem);
      });
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  })();
  