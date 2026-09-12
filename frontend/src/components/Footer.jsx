import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1B1B1B] w-[100%] h-screen px-5 py-4 flex flex-col justify-between items-start md:flex-row md:h-[400%]">
        <div className="flex flex-col justify-center items-start gap-10">
          <p className="text-[#A7A8A1] text-2xl">MAIN MENU </p>
          <div className="flex flex-col justify-start items-start gap-6">
            <Link to="/" className="flex items-center">
              <span className=" text-[#A7A8A1] text-xl">HOME</span>
            </Link>

            <Link to="/shop" className="flex items-center">
              <span className=" text-[#A7A8A1] text-xl">SHOP</span>
            </Link>

            <Link to="/cart" className="flex relative">
              <div className="flex items-center">
                <span className=" text-[#A7A8A1] text-xl ">Cart</span>{" "}
              </div>
            </Link>

            <Link to="/favorite" className="flex relative">
              <div className="flex justify-center items-center">
                <span className=" text-[#A7A8A1] text-xl">Favorites</span>{" "}
              </div>
            </Link>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <FaFacebookF className="text-[#A7A8A1]" />
            <FaInstagram className="text-[#A7A8A1]" />
            <FaTiktok className="text-[#A7A8A1]" />
            <FaWhatsapp className="text-[#A7A8A1]" />
          </div>
          <p className="text-[#A7A8A1] ">2026 - RAMAN FRAGRANCES</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <p className="text-[#A7A8A1] text-2xl">MORE INFORMATION </p>
          <div className="flex flex-col justify-start items-start gap-6">
            <span className=" text-[#A7A8A1] text-xl">SEARCH</span>
            <span className=" text-[#A7A8A1] text-xl">REFUND POLICY</span>
            <span className=" text-[#A7A8A1] text-xl ">ABOUT US</span>
            <span className=" text-[#A7A8A1] text-xl">PRIVACY POLICY</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <p className="text-[#A7A8A1] text-2xl">NEWSLETTER </p>
          <p className="text-[#A7A8A1] text-md">
            Sign up to our newsletter to receive
            <br />
            exclusive offers.
          </p>
          <input
            className="py-3 px-9 bg-[#1B1B1B] text-[#727673] border-[#3E3E3E] border-2"
            type="text"
            placeholder="E-mail"
          />
          <p className="bg-white py-3 px-6 text-[#716F7A]">SUBSCRIBE</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
