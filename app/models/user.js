
var User = DS.Model.extend({
 firstName: DS.attr(),
 lastName: DS.attr(),
 tagline: DS.attr(),
 location: DS.attr(),
 distanceFromMe: DS.attr(),
 displayName: DS.attr(),
 sexPreference: DS.attr(),
 globalRating: DS.attr(),
 avatar: DS.belongsTo('avatar')
});

export default User;