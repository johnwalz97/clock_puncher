let Nightmare = require('nightmare');
let nightmare = Nightmare({
  electronPath: require('./node_modules/electron'),
});


nightmare
  .goto('https://www.paycomonline.net/v4/ee/ee-login.php')
  .cookies.set({
    name: 'pcmEesq2',
    value: '42f60cd171bcfc7a7bfd8e67c535893cdddd52ae',
    path: '/v4/ee/',
    secure: true
  })
  .type('#txtlogin', '0M133A03X')
  .type('#txtpass', 'Pow54321')
  .type('#userpinid', '7771')
  .click('#btnSubmit')
  .wait(1000)
  .goto('https://www.paycomonline.net/v4/ee/ee-tawebclock.php?clockid=WEB00')
  .click('#cmdHideButtons')
  .click('#cmdpunchil')
  .end()
  .catch(function (error) {
    console.error(error);
  });
