import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppProfileRoute extends Route {
    model(params) {
		return hash({
			user: this.store.peekRecord('user', params.user_id),
			tweets: this.store.query('tweet', {user_id: params.user_id})
		});
		
	}
}
