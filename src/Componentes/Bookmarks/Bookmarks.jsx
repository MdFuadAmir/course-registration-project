import PropTypes from "prop-types";

const Bookmarks = ({
  bookmarks,
  totalPrice,
  totalCradit,
  totalRemainingHr,
}) => {
  return (
    <div className="bg-[#fff] w-full h-fit lg:w-1/4 rounded-lg p-6">
      <h2 className="font-bold text-lg text-[#2F80ED]">
        Credit Hour Remaining {totalRemainingHr} hr
      </h2>
      <hr className="my-4" />
      <h1 className="text-[#1C1B1B] text-lg font-bold mb-5">Course Name</h1>
      <div className="text-[#1C1B1B99]">
        {bookmarks.map((books, idx) => (
          <li type="1" key={idx}>
            {books?.title}
          </li>
        ))}
      </div>
      <hr className="mt-6 mb-4" />
      <h2 className="text-lg text-[#1C1B1BCC] font-medium">
        Total Credit Hour : {totalCradit}
      </h2>
      <hr className="my-4" />
      <h2 className="text-lg text-[#1C1B1BCC] font-medium mb-6">
        Total Price: {totalPrice} USD
      </h2>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalCradit: PropTypes.number.isRequired,
  totalRemainingHr: PropTypes.number.isRequired,
};

export default Bookmarks;
