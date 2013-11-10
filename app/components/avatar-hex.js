var AvatarHexComponent = Em.Component.extend({
  tagName:'img',
  classNames: ['avatar', 'stupid', 'reaaaaaallllystupid'],
  attributeBindings:['style'],
  style:function(){
    return "background-image:url(assets/"+this.get('avatar.uri')+")";
  }.property()
});

export default AvatarHexComponent;