import { Oval } from "react-loader-spinner";
import Input from "./Input";
import SectorOptions from "./SectorOptions";
import arrow from "../assets/images/letter_send 1.png";

const Form = ({
  btnText,
  fullName,
  sectorID,
  updateSector,
  handleTermsCheckbox,
  isDisabled,
  onSubmit,
  isLoading,
  sectors,
  setFullName,
  isTermsChecked,
}) => {
  return (
    <form
      action=""
      className="w-full sm:w-4/5 md:w-3/5 rounded-md bg-white mx-auto mt-10 p-8 sm:p-14 flex flex-col gap-10 overflow-hidden"
    >
      {/* name field  */}
      <Input name="Full Name" value={fullName} setValue={setFullName} />

      {/* sectors selectbox  */}
      <select
        className={`border-b whitespace-nowrap border-gray-300 block w-full rounded-md px-2 py-2 outline-none text-sm capitalize ${
          sectorID ? "text-dark" : "text-gray-400"
        }`}
        value={sectorID}
        onChange={updateSector}
      >
        <option value="" disabled>
          Choose a sector
        </option>
        <SectorOptions sectors={sectors} />
      </select>

      {/* agree to term checkbox */}
      <div className="flex items-center gap-2 text-sm">
        <button onClick={handleTermsCheckbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 13 14"
            fill="none"
          >
            <g clipPath="url(#clip0_1_771)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408H0ZM6.12907 10.1576L9.87133 5.39269L9.19533 4.84188L6.00427 8.90325L3.744 6.98511L3.18933 7.66304L6.12907 10.1585V10.1576Z"
                fill={isTermsChecked ? "#011C2A" : "#E0E0E0"}
              />
            </g>
            <defs>
              <clipPath id="clip0_1_771">
                <rect
                  width="13"
                  height="13.2407"
                  fill="white"
                  transform="translate(0 0.703705)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <label className="text-dark">Agree to terms</label>
      </div>

      {/* submit button  */}
      <div className="flex justify-end w-full">
        <button
          className={`w-full sm:w-1/3 h-[50px] bg-dark text-white rounded-lg relative ${
            isDisabled() ? "opacity-80 cursor-not-allowed" : ""
          }`}
          disabled={isDisabled()}
          onClick={onSubmit}
        >
          {isLoading ? (
            <Oval
              height={30}
              width={30}
              color="#fff"
              wrapperClass="flex justify-center"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          ) : (
            btnText
          )}
          <img
            src={arrow}
            className="absolute w-0 sm:w-32 left-1/3 -translate-x-1/2 top-[100% - 20px]"
          />
        </button>
      </div>
    </form>
  );
};

export default Form;
