
var _test = {};

_test.profiles = [
    {gender:'male',name:'alex2',location:'Houston',email:'aallen@blazinweb.com',username:'blaze',img:'https://i0.wp.com/slack.global.ssl.fastly.net/7fa9/img/avatars/ava_0012-512.png?ssl=1'} ,
    {gender:'male',name:'@sunzhx',location:'Houston',email:'sunzhx.js@gmail.com',username:'sunzhx',img:'https://secure.gravatar.com/avatar/3f244274ede6c91a956b06feccf7a0ff.jpg?s=512&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F7fa9%2Fimg%2Favatars%2Fava_0000-512.png'} ,
];
_test.messages = {
    old:[
        {profile:_test.profiles[0],content:'hello world'} ,
        {profile:_test.profiles[1],content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'} ,
        {profile:_test.profiles[0],content:'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} ,
    ] ,
    _new :[
        {profile:_test.profiles[Math.floor(Math.random() * 2)],content:'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'} ,
        {profile:_test.profiles[Math.floor(Math.random() * 2)],content:'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'} ,
        {profile:_test.profiles[Math.floor(Math.random() * 2)],content:'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'} ,
        {profile:_test.profiles[Math.floor(Math.random() * 2)],content:'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} ,
    ]
};

export { _test as default }