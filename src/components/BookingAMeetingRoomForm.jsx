import "./BookingAMeetingRoomForm.css"
import "./BookingAMeetingRoomForm.media.css"
import { validateBookingAndMeetingFormHandle } from "../scripts/validateBookingAndMeetingForm";
import { useEffect } from "react";

const BookingAMeetingRoomForm = () => {

  function upperCaseTowerInput() {
    document.querySelector('.towerWrapper__tower').addEventListener('input', function () {
      this.value = this.value.toUpperCase()
    })
  }

  useEffect(() => {
    upperCaseTowerInput();
  }, [])

  let arrOfFloors = [];
  let arrOfMeetingRoomsCountOnFloor = [];

  function floorsCount() {
    for (let i = 3; i <= 27; i++) {
      arrOfFloors.push(<option key={i} value={i}></option>);
    }
  };
  floorsCount();

  function meetingRoomsCountOnFloor() {
    for (let i = 0; i <= 10; i++) {
      arrOfMeetingRoomsCountOnFloor.push(<option key={i} value={i}></option>);
    }
  };
  meetingRoomsCountOnFloor();


  return (
    <div className="formWrapper">

      <form autoComplete="off" className="bookingAndMeetingRoomForm" action="" method="post" name="BookingAndMeetingRoomForm">
        <h1 className="formTitle">Форма бронирования переготоврной</h1>

        <div className="towerAndFloor">

          <div className="towerWrapper">
            <div className="tower__errorBlock"></div>
            <div className="tower__titleElWrapper">
              <label htmlFor="tower">Башня</label>
              <input className="towerWrapper__tower" list="towers" name="towers" placeholder="А или Б" />
            </div>
            <datalist id="towers">
              <option value="А"></option>
              <option value="Б"></option>
            </datalist>
          </div>

          <div className="floorWrapper">
            <div className="floor__errorBlock"></div>
            <div className="floor__titleElWrapper">
              <label htmlFor="floor">Этаж</label>
              <input
                className="floorWrapper__floor"
                list="floors"
                name="floors"
                placeholder={`От ${arrOfFloors[0].props.value} до ${arrOfFloors[arrOfFloors.length - 1].props.value}`} />
            </div>
            <datalist id="floors">
              {arrOfFloors}
            </datalist>
          </div>
        </div>

        <div className="meetingRoomAndDateAndTime">

          <div className="meetingRoomWrapper">
            <div className="meetingRoom__errorBlock"></div>
            <div className="meetingRoom__titleElWrapper">
              <label htmlFor="meetingRoom">Переговорная комната на этаже</label>
              <input
                className="meetingRoomWrapper__meetingRoom"
                list="meetingRooms"
                name="meetingRooms"
                placeholder={`От ${arrOfMeetingRoomsCountOnFloor[0].props.value} до ${arrOfMeetingRoomsCountOnFloor[arrOfMeetingRoomsCountOnFloor.length - 1].props.value}`} />
            </div>
            <datalist id="meetingRooms">
              {arrOfMeetingRoomsCountOnFloor}
            </datalist>
          </div>

          <div className="dateAndTimeWrapper">
            <div className="dateAndTime__errorBlock"></div>
            <div className="dateAndTime__titleElWrapper">
              <label htmlFor="dateAndTime">Дата и время</label>
              <input type="datetime-local" className="dateAndTimeWrapper__dateAndTime" name="datesAndTime" placeholder='Дата и время' />
            </div>
          </div>
        </div>

        <div className="commentWrapper">
          <label className="fontWeight600" htmlFor="comment">Ваш комментарий</label>
          <textarea
            name="comment"
            className="commentWrapper__textarea"
            cols="30" rows="5"
          ></textarea>
        </div>

        <div className="btnsWrapper">
          <button type="submit" className='btn' onClick={(e) => validateBookingAndMeetingFormHandle(e)}>Отправить</button>
          <button type="reset" className='btn'>Очистить</button>
        </div>
      </form>
    </div>
  );
}

export default BookingAMeetingRoomForm;