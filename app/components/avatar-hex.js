var AvatarHexComponent = Em.Component.extend({
  tagName:'img',
  classNames: ['avatar-hex', 'stupid', 'reaaaaaallllystupid'],
  attributeBindings:['style'],
  style:function(){
    var width = this.get('avatar.focusWidth');
    var center = this.get('avatar.focusCenter');
    var styles = [];
    styles.push("background-image:url(assets/"+this.get('avatar.uri')+")");
    styles.push('background-size: cover')
    styles.push("background-position:" + -(center.x - width/2) + "px " + -(center.y - width/2*22/19) + 'px');
    console.log(JSON.stringify([center, width]));
    return styles.join(';');
  }.property()
});

export default AvatarHexComponent;