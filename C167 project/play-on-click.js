AFRAME.registerComponent("play-on-click", {
    schema: {
        isPlaying: {type: "boolean", defualt: false}
    },

    init: function(){
        this.video.El = this.el.getAttribute("material").src;
        this.onClick = this.onClick.bind(this);
    },

    play: function(){
        window.addEventListener("click", this.onClick);
    },
    onClick: function(evt){
        if (!this.videoEl){
            return;
        }

        var isPlaying = this.el.getAttribute("play-on-click").isPLaying;

        this.el.object3D.visible = true;

        if (!isPlaying){
            this.el.setAttribute("play-on-click", {
                isPlaying: false
            });
            this.videoEl.pause();
        }
    }
  
});
