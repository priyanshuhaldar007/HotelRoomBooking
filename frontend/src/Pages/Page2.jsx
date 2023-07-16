// import vie from '../assets/img/vie.jpg'
import  '../assets/Styles/styles.css'
export default function Page2() {
  return (
    <div className='TxtImg'>
        <div className="Text">
            <div className="heading">About DK Trravels</div>
            <div className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore, cum dolorem, qui, explicabo dolore a aspernatur vero cumque eligendi illum impedit. At, odio vel! Vitae nulla ipsam tempora? Esse.
            </div>
            <div className="button"><button>View Hotels</button></div>
            <div className="num">
                <h2 id='one'>20+</h2>
                <h2 id='two'>120+</h2>
                <h2 id='three'>10k+</h2>
            </div>
        </div>
        <div className="img">
        {/* <img src={vie} alt =""/> */}
        </div>
      
    </div>
  )
}