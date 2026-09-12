import Chart from "react-apexcharts";
import { useGetUsersQuery } from "../../redux/api/usersApiSlice";
import {
  useGetTotalOrdersQuery,
  useGetTotalSalesByDateQuery,
  useGetTotalSalesQuery,
} from "../../redux/api/orderApiSlice";
import { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";
import OrderList from "./OrderList";
import Loader from "../../components/Loader";

const AdminDashboard = () => {
  // Data fetching with proper error handling
  const { 
    data: sales, 
    isLoading: loadingSales, 
    error: salesError 
  } = useGetTotalSalesQuery();
  
  const { 
    data: customers = [],  // Default to empty array
    isLoading: loadingCustomers, 
    error: customersError 
  } = useGetUsersQuery();
  
  const { 
    data: orders, 
    isLoading: loadingOrders, 
    error: ordersError 
  } = useGetTotalOrdersQuery();
  
  const { 
    data: salesDetail = [],  // Default to empty array
    isLoading: loadingSalesDetail, 
    error: salesDetailError 
  } = useGetTotalSalesByDateQuery();

  // Chart configuration
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        type: "line",
      },
      tooltip: {
        theme: "dark",
      },
      colors: ["#00E396"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Sales Trend",
        align: "left",
      },
      grid: {
        borderColor: "#ccc",
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [],
        title: {
          text: "Date",
        },
      },
      yaxis: {
        title: {
          text: "Sales ($)",
        },
        min: 0,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
    series: [{ name: "Sales", data: [] }],
  });

  // Update chart when sales detail data is available
  useEffect(() => {
    if (salesDetail && salesDetail.length > 0) {
      const formattedSalesDate = salesDetail.map((item) => ({
        x: item._id,
        y: item.totalSales,
      }));

      setChartState({
        options: {
          ...chartState.options,
          xaxis: {
            ...chartState.options.xaxis,
            categories: formattedSalesDate.map((item) => item.x),
          },
        },
        series: [
          { 
            name: "Sales ($)", 
            data: formattedSalesDate.map((item) => item.y) 
          },
        ],
      });
    }
  }, [salesDetail]);

  // Display errors if they exist
  if (salesError || customersError || ordersError || salesDetailError) {
    return (
      <div className="text-red-500 p-4">
        <h2>Error loading dashboard data</h2>
        <p>{salesError?.message || customersError?.message || ordersError?.message || salesDetailError?.message}</p>
      </div>
    );
  }

  return (
    <>
      <AdminMenu />

      <section className="xl:ml-[4rem] md:ml-[0rem]  pt-[64px]">
        <div className="w-[80%] flex justify-around flex-wrap">
          {/* Sales Card */}
          <div className="rounded-lg bg-black p-5 w-[20rem] mt-5">
            <div className="font-bold rounded-full w-[3rem] bg-white text-center p-3">
              $
            </div>
            <p className="mt-5 text-white">Sales</p>
            <h1 className="text-xl font-bold text-white">
              {loadingSales ? <Loader /> : `$ ${(sales?.totalSales || 0).toFixed(2)}`}
            </h1>
          </div>

          {/* Customers Card */}
          <div className="rounded-lg bg-black p-5 w-[20rem] mt-5">
            <div className="font-bold rounded-full w-[3rem] bg-white text-center p-3">
              👥
            </div>
            <p className="mt-5 text-white">Customers</p>
            <h1 className="text-xl font-bold text-white">
              {loadingCustomers ? <Loader /> : customers.length}
            </h1>
          </div>

          {/* Orders Card */}
          <div className="rounded-lg bg-black p-5 w-[20rem] mt-5">
            <div className="font-bold rounded-full w-[3rem] bg-white text-center p-3">
              📦
            </div>
            <p className="mt-5 text-white">All Orders</p>
            <h1 className="text-xl font-bold text-white">
              {loadingOrders ? <Loader /> : orders?.totalOrders || 0}
            </h1>
          </div>
        </div>

        {/* Chart */}
        <div className="ml-[10rem] mt-[4rem]">
          {loadingSalesDetail ? (
            <Loader />
          ) : (
            <Chart
              options={chartState.options}
              series={chartState.series}
              type="line"
              width="70%"
            />
          )}
        </div>

        {/* Order List */}
        <div className="mt-[4rem]">
          <OrderList />
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;