const getAllPosts = require('./../model/queries/getAllPosts');

exports.get = (req, res) => {
  // console.log(req.session);
  if(req.session.length>0){
  
    const { username, loggedIn } = req.session;
    getAllPosts()
    .then((queryRes) => {
      const posts = JSON.parse(JSON.stringify(queryRes));
      console.log(username);
      res.render('home', { posts, username, loggedIn });
    })
    .catch((error) => {
      console.log(error);
    });
   
  }else{
    getAllPosts()
    .then((queryRes) => {
      const posts = JSON.parse(JSON.stringify(queryRes));
      res.render('home', { posts });
    })
    .catch((error) => {
      console.log(error);
    });
  }


};
