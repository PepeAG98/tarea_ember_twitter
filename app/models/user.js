import DS from 'ember-data';
import { tracked } from '@glimmer/tracking';

import sha1 from 'js-sha1'; // para poder crear un hash de 16bits por cada usuario y poder solicitar nustra imagen
import Identicon from 'identicon.js';
const { Model, attr, hasMany } = DS;

export default class UserModel extends Model {
    @attr('string') name;
    @attr('string') username;
    @attr('string') bio;
    @hasMany('tweet') tweets;

    get avatar() {//computer property 
        //console.log(this.username);
        let hash = sha1(this.username);
        let data = new Identicon(hash).toString();
        return `data:image/png;base64,${data}`;
        //console.log(hash);
        //return 'hola';
    }
}
