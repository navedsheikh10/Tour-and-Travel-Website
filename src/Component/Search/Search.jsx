import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Search.css'
AOS.init();
const Search = () => {
  return (
    <div id='book' className="search">
      <div className="container">
        <div className="left"data-aos="fade-up">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at Sandals Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and PADI® certified
            scuba diving at most resorts. If you are planning a wedding, Sandals
            is the leader in Caribbean destination weddings and honeymoon
            packages.
          </p>
          <div className="boxes">
          <div className="first-box">
            <div>
              <img src="./Images/gold.png" alt="" style={{marginRight:'1rem'}} />
            </div>
            <div>
              <h3>WORLD'S LEADING</h3>
              <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="Second-box">
            <div>
              <h3>NO ONE INCLUDES MORE</h3>
              <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              <button style={{margin:'2px'}}>View Packages</button>
            </div>
          </div>
          </div>
        </div>
        <div className="right"data-aos="fade-up">
            <div className="promo">
                <div className="save">Get An Additional 7% off</div>
                <div className="timer">12 hours left</div>
                <div className="offers">View All Current Offers</div>
            </div>
            {/* <Card></Card> */}
            <form> 
            <div className="places-wrap">
                <label className="destination" >Destination</label>
                <select style={{width:'16rem',border:'.5px solid green',fontWeight:'bolder',cursor:'pointer',padding:'3px'}}>
                    <option value="1">Swat</option>
                    <option value="1">Malam Jaba</option>
                    <option value="1">Hunza</option>
                    <option value="1">kashmir</option>
                    <option value="1">Babusar Top</option>
                    <option value="1">Naran</option>
                </select>
            </div>
            <div className="date">
                <div className="date-wrap" style={{width:'8rem'}}>
                    <label>Check</label>
                    <input type="date" name="" id="" />
                </div>
                <div className="date-wrap" style={{width:'8rem'}}>
                    <label>Check </label>
                    <input type="date" name="" id="" />
                </div>

            </div>
            <button style={{marginTop:'.5rem',width:'17rem'}}>Rates & Availibilties</button>

            </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
