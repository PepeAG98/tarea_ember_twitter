import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class AppIndexController extends Controller {
    @action
	onSubmit (description) {
		let user = this.store.peekRecord('user', 1);
		let post = this.store.createRecord('tweet', {
			description: description,
		});
		post.set('user', user);
		
        post.save();
    }
    
    @action
	onDelete(id){
		let borrar = this.store.findRecord('draft_tweet', id).then(function(borrar) {
  		borrar.destroyRecord();
		});
	}
}
