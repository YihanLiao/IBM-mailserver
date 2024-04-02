var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Mail For Testing.' });
});

router.post('/send', (req, res) => {
  console.log(req.body);
  let mailTool = req.app.get('mailTool');
  let { mailcontent, target, subject } = req.body;
  console.log(mailcontent, target);
  let mailOptions = {
    to: target,
    subject: subject ?? 'Send By Node server',
    html: `${mailcontent}`,
  }
  mailTool.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(400).send({ code: "common.error", message: error });
    } else {
      console.log(info)
      res.json({ code: "common.success", message: info })
    }
  })
})

module.exports = router;
