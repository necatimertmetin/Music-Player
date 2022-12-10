document.getElementById("volume-slider").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #a398fe 0%, #82CFD0 ' + value + '%, transparent ' + value + '%, transparent)'
  };