var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send', (req, res) => {
  console.log(req.body);
  let transporter = req.app.get('mailTool');
  let { mailcontent, target } = req.body;
  console.log(mailcontent, target);
  let mailOptions = {
    from: 'iamlegend@mibgalaxy.com',
    to: target,
    subject: 'Send Send Send By Node server',
    html: `${mailcontent}`,
  }
  transporter.sendMail(mailOptions, function(error, info){
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
