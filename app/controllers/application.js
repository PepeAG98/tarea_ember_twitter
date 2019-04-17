import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    @action
	onSubmit (description) {
		let post = this.store.createRecord('draft_tweet', {
			userName: "Pepe",
			description: description,
			createdAt: "2019-04-01"
        });
        post.save();
    }
    
    @action
	onDelete(id){
		let borrar = this.store.findRecord('draft_tweet', id).then(function(borrar) {
  		borrar.destroyRecord();
		});
	}
}
