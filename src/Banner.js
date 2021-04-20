import bg from './images/bg.jpg';
import name from './images/name.png';
import play from './images/play.png';

const Banner = () => {
    return (
        <div className="banner">
        <img src={bg} alt="mulanBG" className="bg" />
        <div className="content">
            <img src={name} className="movieTitle"  alt="title"/>
            <h4>
                <span>2020</span>
                <span><i>14+</i></span>
                <span>2hr 15mins</span>
                <span>Adventure</span>
            </h4>
            <p>
                A girl disguises as a male warrior and joins the imperial 
                army in order to prevent her sick father from being forced 
                to enlist as he has no male heir...
            </p>
            <div className="buttons">
                <a href="#"><i class="fa fa-play" aria-hidden="true"></i> Play</a>
                <a href="#"><i class="fa fa-plus" aria-hidden="true"></i> My Movies</a>
            </div>
        </div>
        <a class="play" onclick="toggleVideo()"><img src={play} alt="play"/>Watch Trailer</a>
    </div>
    )
}

export default Banner