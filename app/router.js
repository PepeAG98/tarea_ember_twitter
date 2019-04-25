import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', {path: '/'}, function() {
    this.route('profile', {path: '/:user_id'});
  });
});

export default Router;
