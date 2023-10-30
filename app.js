let arr = [];

// Progression 1: create a function and fetch the api using axios753b799a6b01f0d427b31a1227c2efad

function getData() {
  const getBlog = document.getElementById('blog');

  axios
    .get(
      'https://gnews.io/api/v4/top-headlines?category=general&apikey=e35b132c59bec1e420858ce61de3837d'
    )
    .then((res) => {
      console.log(res.data);

      const listOfArticles = res.data.articles;

      listOfArticles.forEach((article) => {
        console.log(article);
        const getArticle = document.createElement('div');
        getArticle.setAttribute('id', 'article');
        getArticle.setAttribute('class', 'article');

        const title = document.createElement('h3');
        const content = document.createElement('p');
        const img = document.createElement('img');

        title.innerText = article.title;
        content.innerText = article.content;
        img.setAttribute('src', article.image);

        getArticle.append(title);
        getArticle.append(img);
        getArticle.append(content);

        arr.push(getArticle);
      });

      arr.forEach((ele) => {
        getBlog.append(ele);
      });
    });
}
getData();
