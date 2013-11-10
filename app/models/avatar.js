var Avatar = DS.Model.extend({
             url: DS.attr('string'),
             focusCenter: DS.attr(),
             focusWidth: DS.attr(),
             width: DS.attr(),
             height: DS.attr()
         });

export default Avatar;