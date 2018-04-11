import { App } from '../../module';
import { BaseService } from '../../baseservice';

export class UserService extends BaseService {
    constructor(http, resolveUrl) {
        super(http, resolveUrl, 'api/Account/Register');
    }

    get(id) {
        return this.http.get(
            super.getRouteById(id)
        );
    }
    getAll() {
        return this.http.get(
            super.getRoute()
        );
    }
    create(user) {
        // in the development database (json-server)
        // we do not store the images
        if(user.img) delete user.img;
        return this.http.post(
            super.getRoute(),
            user
        );

        $http({
            method: 'POST',
            url: super.getRoute(),
            //headers: { 'Content-Type': "application/x-www-form-urlencoded" },
            data: JSON.stringify(this.user)
        }).then(function successCallback(response) {
            console.log('success');
            respuesta = JSON.parse(response);
        }, function errorCallback(response) {
            console.log('error');
            console.log(response);
        });
    

        /*
        return this.http({
            method: 'POST',
            // set content-type to undefined so it is automatically selected
            headers: { 'Content-Type': undefined },
            url: super.getRoute(),
            data: {
                name: pizza.name,
                ingredients: pizza.ingredients,
                image: pizza.img,
            },
            transformRequest: function (data, headersGetter) {
                let formData = new FormData();
                angular.forEach(data, function (value, key) {
                    if (key === 'image' && value) {
                        formData.append(key, value, value.name);
                    }
                    else formData.append(key, value);
                });
                return formData;
            }
        });
        */
    }
   
    
}
UserService.$inject = ['$http', 'resolveUrl'];
App.service('userService', UserService);