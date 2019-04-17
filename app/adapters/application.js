/*import DS from 'ember-data';

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
}*/
import ActiveModelAdapter from 'active-model-adapter';

export default class ApplicationAdapter extends ActiveModelAdapter {
	host = "https://still-garden-88285.herokuapp.com/";
}
