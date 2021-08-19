Blockly.Arduino.armed = function() {
  var value_NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'drone.changeArmingState(true);'
             + '\ndelay(2000);\n';
  return code;
};