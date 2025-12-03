
import sundorbon from "../../assets/assets/sundorbon.png";

const Spinner = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex justify-center items-center bg-base-100">
      <div className="overflow-hidden ">
        <img
          src={sundorbon}
          alt="Travel  Van"
          className="w-24 h-24 mb-4 rounded-full animate-bounce "
        />
      </div>
    </div>

  );
};

export default Spinner;
