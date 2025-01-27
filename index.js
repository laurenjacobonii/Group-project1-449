 var colorPicker = new iro.ColorPicker('#picker');
 colorPicker.on('color:change', function(color) {
    // don't let the color saturation fall below 50!
    if (color.saturation < 50) {
      color.saturation = 50;
    }
  });

var colorPicker2 = new iro.ColorPicker("#picker2", {
    width: 320,
    color: "#f00"
  });

