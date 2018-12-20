const target = {};

target.url = 'https://sample/';
target.pages = [
  {
    name: 'top',
    url: 'index.html'
  },
  {
    name: 'sample1',
    url: 'sample1.html'
  },
  {
    name: 'sample2',
    url: 'sample2.html'
  }
];
target.login = {
  enable: true,
  user: "sample",
  user_input: "#input-login-id",
  pwd: "sample",
  pwd_input: "#input-login-pw",
  submit_form: "#form-login",
  login_form: ".login",
  logIn: function(client){
    if(this.enable && client.isExisting(this.login_form)){
      client
        .click(this.login_form)
        .waitForVisible(this.user_input, 1000)
        .setValue(this.user_input, this.user)
        .setValue(this.pwd_input, this.pwd)
        .submitForm(this.submit_form);
    }
  }
};


module.exports = target;