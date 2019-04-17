import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'; 
import { action } from '@ember/object';

export default class TweetComponent extends Component {
    @action 
	deleteTweet(id){
		let x = this.args.onDelete(id);
	}
}
