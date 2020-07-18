let car = {
  maxSpeed: 280,
  update: speedChange,
};

car.update();

function speedChange() {
  console.log(car.maxSpeed);
}
