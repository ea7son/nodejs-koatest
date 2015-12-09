var router = require('koa-router')();

router.get('/', function *(next) {
  this.body = 'this a users response!';
});
router.get('/info',function *(next){
  yield this.render('info',{
    username:"lily"
  })
});
module.exports = router;
