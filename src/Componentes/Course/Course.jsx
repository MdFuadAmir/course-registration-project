import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
const Course = ({
  course,
  handleMarkAsRead,
  handleTotalPrice,
  handleTotalCradit,
  handleTotalRemainingHr,
}) => {
  const { cover_img, title, description, price, credit } = course;
  return (
    <div>
      <div className="bg-[#fff] p-4 rounded-lg">
        <img className="w-full" src={cover_img} alt="course cover image" />
        <h2 className="text-[#1C1B1B] py-3 text-lg font-medium">{title}</h2>
        <p className="text-[#1C1B1B99]">{description}</p>
        <div className="flex justify-between mt-4 mb-6 items-center">
          <div className="flex items-center">
            <span className="mr-2">
              <FiDollarSign className="w-8 h-6"></FiDollarSign>
            </span>
            <p className="text-[#1C1B1B99]">Price: {price}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <FaBookOpen className="w-5 h-5"></FaBookOpen>
            </span>
            <p className="text-[#1C1B1B99]">Credit: {credit}hr</p>
          </div>
        </div>
        <button
          onClick={() => {
            handleMarkAsRead(course);
            handleTotalPrice(course?.price);
            handleTotalCradit(course?.credit);
            handleTotalRemainingHr(course?.credit);
          }}
          className="w-full bg-[#2F80ED] p-2 text-lg font-bold text-[#fff] rounded-lg"
        >
          Select
        </button>
      </div>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
  handleTotalPrice: PropTypes.func.isRequired,
  handleTotalCradit: PropTypes.func.isRequired,
  handleTotalRemainingHr: PropTypes.func.isRequired,
};
export default Course;
