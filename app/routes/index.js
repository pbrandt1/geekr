var IndexRoute = Em.Route.extend({
	 setupController:function(controller,model){
	 	controller.set('content', this.store.find('user'));
	 }
});

export default IndexRoute;
