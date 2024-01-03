import './App.css'
import PropTypes from 'prop-types';

const text =
  "We offer a wide range of exquisite jewelry pieces that are perfect for any occasion. Our collection includes necklaces, bracelets, earrings, and rings that are crafted from high-quality materials such as gold, silver, and precious stones.";

function App() {
  return (
    <div>
      <Sec order={"left"} color="blue" />
      <Sec order={"right"} />
    </div>
  )
}

function Sec({ order, color }) {

  return (
    < section className={`grid gap-8 md:grid-cols-2 md:items-center md:text-left ${color === "blue" ? "sm:max-xl:bg-blue-100" : "sm:max-xl:bg-red-100"}`}>

      < div className={order === "right" ? "md:order-last" : ""
      }>
        <img
          src="https://wallpapercave.com/wp/wp2858551.jpg"
          alt="nature"
          className="w-full rounded-2xl"
        />
      </ div>
      <div className={order === "right" ? "md:text-right" : ""}>
        <h1 className="text-4xl mb-2">Welcome to our jewelry store!</h1>
        <p>{text}</p>
      </div>
    </section >
  );
}

Sec.propTypes = {
  order: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default App
