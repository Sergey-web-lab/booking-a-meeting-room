import { collectFormData } from "./collectFormData";

export async function validateBookingAndMeetingFormHandle() {

  formValidationAndGetFormValues()
  function formValidationAndGetFormValues() {

    let towersList = ['A', 'А', 'Б'];
    let floorsList = [];
    let meetingRoomsCountOnFloorList = [];

    for (let i = 3; i <= 27; i++) {
      floorsList.push(String(i));
    }
    for (let i = 0; i <= 10; i++) {
      meetingRoomsCountOnFloorList.push(String(i));
    }

    let BookingAndMeetingRoomForm = document.querySelector('.bookingAndMeetingRoomForm'),
      formValidity = true,
      inputTower = document.querySelector('.towerWrapper__tower'),
      inputFloor = document.querySelector('.floorWrapper__floor'),
      inputMeetingRoom = document.querySelector('.meetingRoomWrapper__meetingRoom'),
      inputDateAndTime = document.querySelector('.dateAndTimeWrapper__dateAndTime');

    let towerErrBlock = document.querySelector('.tower__errorBlock'),
      floorErrBlock = document.querySelector('.floor__errorBlock'),
      meetingRoomErrBlock = document.querySelector('.meetingRoom__errorBlock'),
      dateAndTimeErrBlock = document.querySelector('.dateAndTime__errorBlock');

    BookingAndMeetingRoomForm.onsubmit = function (e) {
      e.preventDefault();
      validateTower(towersList);
      validateFloor(floorsList);
      validateMeetingRoom(meetingRoomsCountOnFloorList);
      validateDateAndTime();
      if (formValidity) {
        collectFormData()
      }

      function validateTower(towersList) {
        let towerChecked = inputTower.value;
        let valid = towersList.indexOf(towerChecked) !== -1;

        if (valid) {
          inputTower.classList.remove('formErr');
          towerErrBlock.innerText = '';
        } else {
          inputTower.classList.add('formErr');
          formValidity = false;
          inputTower.focus();
          towerErrBlock.innerText = 'Пожалуйста, выберите башню из предложенных вариантов';
        }
      }

      function validateFloor(floorsList) {
        let floorChecked = inputFloor.value;
        let valid = floorsList.indexOf(floorChecked) !== -1;

        if (valid) {
          inputFloor.classList.remove('formErr');
          floorErrBlock.innerText = '';
        } else {
          inputFloor.classList.add('formErr');
          formValidity = false;
          inputFloor.focus();
          floorErrBlock.innerText = 'Пожалуйста, выберите этаж из предложенных вариантов';
        }
      }

      function validateMeetingRoom(meetingRoomsCountOnFloorList) {
        let meetingRoomChecked = inputMeetingRoom.value
        let valid = meetingRoomsCountOnFloorList.indexOf(meetingRoomChecked) !== -1;

        if (valid) {
          inputMeetingRoom.classList.remove('formErr');
          meetingRoomErrBlock.innerText = '';
        } else {
          inputMeetingRoom.classList.add('formErr');
          formValidity = false;
          inputMeetingRoom.focus();
          meetingRoomErrBlock.innerText = 'Пожалуйста, выберите этаж из предложенных вариантов';
        }
      }


      function validateDateAndTime() {
        let dateNow = new Date();
        let DateAndTime = new Date(inputDateAndTime.value);
        let valid = DateAndTime > dateNow;

        if (valid) {
          inputDateAndTime.classList.remove('formErr');
          dateAndTimeErrBlock.innerText = '';
        } else {
          inputDateAndTime.classList.add('formErr');
          formValidity = false;
          inputDateAndTime.focus();
          dateAndTimeErrBlock.innerText = 'Пожалуйста, укажите в поле "Дата и время" не прошедшую дату'
        }
      }
    }
  }
}