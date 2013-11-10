var Avatar = DS.Model.extend({
             uri: DS.attr(),
             focusCenter: DS.attr(),
             focusWidth: DS.attr(),
             width: DS.attr(),
             height: DS.attr()
         });

export default Avatar;