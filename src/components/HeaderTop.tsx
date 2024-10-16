import { FaGithub, FaLinkedin } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-300 hidden sm:block">
      <div className="cantainer py-4">
        <div className="flex justify-between items-center">
          <div className="hidden  lg:flex gap-1">
            <div className="header_top_icon_wraper">
              <FaGithub />
            </div>
            <div className="header_top_icon_wraper">
              <FaLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHOPPING</b>THIS WEEK ORDER OVER -$55
          </div>
          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD">USD</option>
              <option value="RS">RS</option>
            </select>
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="currency"
              id="currency"
            >
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
