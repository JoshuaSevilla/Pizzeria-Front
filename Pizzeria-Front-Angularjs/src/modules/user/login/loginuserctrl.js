import { App } from '../../module';

export class LoginUserCtrl {
    constructor(state, loginService) {
        this.loginService = loginService;
        this.state = state;
        this.user = {
            email: null,
            password: null,
            grant_type: "password",
        };
    }
    loginUser() {
        let self = this;
        this.loginService.login(this.user)
            .then(function () {
                //self.state.go('userlist')
                
            })
    };
}


LoginUserCtrl.$inject = ['$state', 'loginService'];
App.controller('loginUserCtrl', LoginUserCtrl);