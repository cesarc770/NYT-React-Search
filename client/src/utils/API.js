import axios from "axios";

export default {
  //search API
  search: function(query, beginDate, endDate){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=74aec7c6ffc14c64896b7dce46be12e4&q="+query+"&begin_date="+beginDate+"&end_date="+endDate
    return axios.get(url);

  },
  // Gets all saved articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};