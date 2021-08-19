#include<myMAVLINK.h>

myMAVLINK drone;
void setup() {
  Serial.begin(57600);
  delay(3000);
  drone.sendHeartBeat();
  drone.setMode(22);   // 自稳（自稳0，定高2，auto3，留待5,guied4，nogps guied 20）
  drone.changeArmingState(true);
  delay(5000);
  drone.position_control(3, 0, 0, 5000);
  //drone.attitude_control(0, 0, 30, 0.8, 1000); 
  delay(2000);
  drone.setMode(9);
}

void loop() {

}
