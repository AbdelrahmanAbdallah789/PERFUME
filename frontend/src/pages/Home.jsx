import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "./Products/Product";
import ProductCarousel from "./Products/ProductCarousel";
import NewProductCarousel from "./Products/NewProductCarousel";
import Footer from "../components/Footer";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <div>
      <div className="bg-[url('https://images.unsplash.com/photo-1593487568720-92097fb460fb?w=5000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D')]   px-4  xl:h-screen   w-full  bg-cover flex flex-col items-center justify-center  md:items-start  ">
        <div className="text-black">
          <p className="text-[60px] ">
            scent <br/>
            of elegance
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/shop"
            className="flex items-center transition-transform transform "
          >
            <span className="bg-black text-white py-2 px-9 text-xl">SHOP</span>
          </Link>
          <Link
            to="/login"
            className="flex items-center transition-transform transform "
          >
            <span className="bg-white text-black py-2 px-9 text-xl">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-[60px]">NEW</h1>
        <div className="flex flex-col justify-center items-center">
          <NewProductCarousel />
          <Link
            to="/shop"
            className="flex items-center transition-transform transform "
          >
            <span className="bg-black text-white py-2 px-24 text-xl">SHOP</span>
          </Link>
        </div>
      </div>
      <div className="bg-[url('https://images.unsplash.com/photo-1588514912908-8f5891714f8d?q=80&w=5000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[100vh] w-full   bg-cover flex flex-col items-start justify-end px-4  pb-5 ">
        <p className="text-4xl text-white">OUR PACKEGES</p>
        <Link
          to="/shop"
          className="flex items-center transition-transform transform "
        >
          <span className="border-2  text-white py-2 px-16 text-xl">
            TRY NOW
          </span>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-[60px]">TOP</h1>
        <div className="flex flex-col justify-center items-center">
          <ProductCarousel />
          <Link
            to="/shop"
            className="flex items-center transition-transform transform "
          >
            <span className="bg-black text-white py-2 px-24 text-xl">SHOP</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-5 mb-5">
        <p className="text-[60px]">OUR PRODUCTS</p>
        <div className="flex items-center justify-center gap-5">
          <div className="bg-[url('https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZ1bWVzfGVufDB8MXwwfHx8MA%3D%3D')] w-[420px] h-[610px] flex items-center justify-center">
            <div className="flex  flex-col justify-center items-center  gap-10 opacity-0 hover:opacity-100 transition-all duration-300 ">
              <p className="text-7xl text-white">PERFIMES</p>
              <Link to="/shop" className="flex items-center">
                <span className="border-2  text-white py-2 px-16 text-3xl">
                  TRY NOW
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-[url('https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyZnVtZXN8ZW58MHwxfDB8fHww')] w-[420px] h-[610px] flex items-center justify-center ">
            <div className="flex  flex-col justify-center items-center  gap-10 opacity-0 hover:opacity-100 transition-all  duration-300">
              <p className="text-7xl text-white">SPLASHES</p>
              <Link
                to="/shop"
                className="flex items-center transition-transform transform "
              >
                <span className="border-2  text-white py-2 px-16 text-3xl">
                  TRY NOW
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-[url('https://plus.unsplash.com/premium_photo-1681408689299-dccb855de5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJvZHklMjBsb3Rpb258ZW58MHwxfDB8fHww')] w-[420px] h-[610px] flex items-center justify-center ">
            <div className="flex  flex-col justify-center items-center  gap-10 opacity-0 hover:opacity-100 transition-all  duration-300">
              <p className="text-7xl text-white">LOTIONS</p>
              <Link
                to="/shop"
                className="flex items-center transition-transform transform "
              >
                <span className="border-2  text-white py-2 px-16 text-3xl">
                  TRY NOW
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
