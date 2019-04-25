import DS from 'ember-data';
//import { userInfo } from 'os';
const { Model, attr, belongsTo } = DS;

export default class TweetModel extends Model {
    //@attr('string') userName;
	@attr('string') description;
	//@attr('string') createdAt;
	@belongsTo('user') user;
}
