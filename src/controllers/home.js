const getAllPosts = require('./../model/queries/getAllPosts');

exports.get = (req, res) => {
  getAllPosts()
    .then((queryRes) => {
      const parsed_query_res = JSON.parse(JSON.stringify(queryRes));
      res.render('home', { parsed_query_res });
    })
    .catch((error) => {
      console.log(error);
    });
};
