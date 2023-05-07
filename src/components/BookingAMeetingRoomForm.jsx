import "./BookingAMeetingRoomForm.css"
import { collectFormData } from "../scripts/collectFormData";

const BookingAMeetingRoomForm = () => {

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

      <form action="" method="post" name="BookingAMeetingRoomForm">
        <h1 className="formTitle">Форма бронирования переготоврной</h1>

        <div className="towerAndFloor">

          <div className="towerWrapper">
            <label htmlFor="tower">Башня</label>
            <input id="tower" list="towers" name="towers" placeholder="А или Б" />
            <datalist id="towers">
              <option value="А"></option>
              <option value="Б"></option>
            </datalist>
          </div>

          <div className="floorWrapper">
            <label htmlFor="floor">Этаж</label>
            <input
              id="floor"
              list="floors"
              name="floors"
              placeholder={`От ${arrOfFloors[0].props.value} до ${arrOfFloors[arrOfFloors.length - 1].props.value}`} />
            <datalist id="floors">
              {arrOfFloors}
            </datalist>
          </div>
        </div>

        <div className="meetingRoomAndDateAndTime">

          <div className="meetingRoomWrapper">
            <label htmlFor="meetingRoom">Переговорная комната на этаже</label>
            <input
              id="meetingRoom"
              list="meetingRooms"
              name="meetingRooms"
              placeholder={`От ${arrOfMeetingRoomsCountOnFloor[0].props.value} до ${arrOfMeetingRoomsCountOnFloor[arrOfMeetingRoomsCountOnFloor.length - 1].props.value}`} />
            <datalist id="meetingRooms">
              {arrOfMeetingRoomsCountOnFloor}
            </datalist>
          </div>

          <div className="dateAndTimeWrapper">
            <label htmlFor="dateAndTime">Дата и время</label>
            <input type="datetime-local" id="dateAndTime" name="datesAndTime" placeholder='Дата и время' />
          </div>
        </div>

        <div className="commentWrapper">
          <label className="fontWeight600" htmlFor="comment">Ваш комментарий</label>
          <textarea
            name="comment"
            id="comment"
            className="commentWrapper__textarea"
            cols="30" rows="5"
          ></textarea>
        </div>

        <div className="btnsWrapper">
          <button type="submit" className='btn' onClick={(e) => collectFormData(e)}>Отправить</button>
          <button type="reset" className='btn'>Очистить</button>
        </div>
      </form>
    </div>
  );
}

export default BookingAMeetingRoomForm;