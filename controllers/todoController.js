exports.get = (req, res, next) => {
  const userid = req.params.userid;
  db.execute(`SELECT * FROM todo.tasks WHERE userid = ${userid} `)
    .then((result) => {
      res.status(200).json({
        result: result[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
