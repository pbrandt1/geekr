var User = DS.Model.extend({
             firstName: DS.attr('string'),
             lastName: DS.attr('string')
            // picture: DS.belongsTo('avatar')
});

export default User;