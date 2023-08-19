
import { useNavigate } from 'react-router-dom';
import './Bookingcard.css'
export default function Bookingcard() {
  const navigate = useNavigate()
  return (
    <div className="bookingcard">
      <div className="inner">
        <div className="location">
          <label>Location</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select location</option>
            <option value="1">Pune</option>
            <option value="2">Mumbai</option>
            <option value="2">Bangalore</option>
          </select>
        </div>

        <div className="hotelname">
          <label>Hotel</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Hotel Grand</option>
            {/* <option value="1">Hotel Grand</option> */}
          </select>
          {/* <button type="button" class="btn">Book Now</button> */}
          <button type="button" onClick={()=> navigate('/res')} className="btn btn-light bookbutton">
            Book now !
          </button>
        </div>
      </div>
    </div>
  );
}
