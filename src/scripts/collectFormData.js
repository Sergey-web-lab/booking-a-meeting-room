export async function collectFormData() {

  const tower = document.querySelector('.towerWrapper__tower');
  const floor = document.querySelector('.floorWrapper__floor');
  const meetingRoom = document.querySelector('.meetingRoomWrapper__meetingRoom');
  const dateAndTime = document.querySelector('.dateAndTimeWrapper__dateAndTime');
  const comment = document.querySelector('.commentWrapper__textarea');

  const data = {
    tower: tower.value,
    floor: +floor.value,
    meetingRoom: +meetingRoom.value,
    dateAndTime: dateAndTime.value,
    comment: comment.value,
  };

  console.log(data);
}