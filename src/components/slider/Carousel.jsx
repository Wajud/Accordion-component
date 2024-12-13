import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import Brooklyn from "../../assets/gamepad.jpg";
import Macao from "../../assets/lady1.jpg";
import Navada from "../../assets/profile-11.jpg";
import Icecream from "../../assets/story-5.jpg";

const imageStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "20px",
  border: "1px solid #FFFFFF33",
  objectFit: "cover",
};

function CarouselGames() {
  return (
    <div className="relative flex bg-white shadow-lg overflow-y-clip h-[315px] items-center">
      <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden overflow-y-hidden">
        <Splide
          options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
              pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
              pauseOnFocus: true, // Do not pause scrolling when the carousel is focused
              rewind: true, // Rewind to start when the end is reached
              speed: 1, // Scrolling speed
            },
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: "445px", // Fixed width for each slide
            gap: "12px", // Gap between slides
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
          <SplideSlide>
            <img src={Brooklyn} alt="Poster Brooklyn" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Macao} alt="Poster Macao" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Navada} alt="Poster Navada" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Icecream} alt="Iced cream image" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Brooklyn} alt="Poster Brooklyn" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Macao} alt="Poster Macao" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Navada} alt="Poster Navada" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Icecream} alt="Iced cream image" style={imageStyle} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default CarouselGames;
