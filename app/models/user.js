var User = DS.Model.extend({
 firstName: DS.attr('string'),
 lastName: DS.attr('string'),
 avatar: DS.belongsTo('avatar')
});

export default User;