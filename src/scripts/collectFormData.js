export async function collectFormData(e) {
  e.preventDefault()

  const tower = document.getElementById('tower');
  const floor = document.getElementById('floor');
  const meetingRoom = document.getElementById('meetingRoom');
  const dateAndTime = document.getElementById('dateAndTime');
  const comment = document.getElementById('comment');

  const data = {
    tower: tower.value,
    floor: +floor.value,
    meetingRoom: +meetingRoom.value,
    dateAndTime: dateAndTime.value,
    comment: comment.value,
  };

  console.log(data);
}