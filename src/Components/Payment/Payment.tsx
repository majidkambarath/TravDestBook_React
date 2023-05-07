import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { RootState } from "../../Redux/store";
import { useSelector , useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassengerCount } from "../../Redux/slice/passengerSlice";
import { resetSelectedServices } from "../../Redux/slice/extraService";
import { paymentApi, paymentSuccessApi } from "../../Api/user/bookingApi/bookingApi";
declare global {
  interface Window {
    Razorpay: any;
  }
}
export default function PaymentPage() {
  const userData = useSelector((state: RootState) => state.authData.authData);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const TotalPrice = useSelector(
    (state: RootState) => state.extraServiceSlice.totalPrice
  );
  const [click, setClick] = useState<boolean>(false);
  const destinData = useSelector(
    (state: RootState) => state.destination.destinationsFetch
  );
  const ServiceRedux  = useSelector((state:RootState)=>state.extraServiceSlice.selectedServices)
  const dateState = useSelector((state: RootState) => state.Cdate.DatePicker);
  const newStartDate = new Date(dateState.startDate);
  newStartDate.setDate(newStartDate.getDate() + 1);
  const startDate = newStartDate.toISOString().split("T")[0];
  const newendDate = new Date(dateState.endDate);
  newendDate.setDate(newendDate.getDate() + 1);
   const endDate = newendDate.toISOString().split("T")[0];
  

  const adultCount = useSelector(
    (state: RootState) => state.passenger.adultCount
  );
  const childCount = useSelector(
    (state: RootState) => state.passenger.childCount
  );
  const infantCount = useSelector(
    (state: RootState) => state.passenger.infantCount
  );
  const TotalGuest = adultCount+childCount+infantCount
  const subTotal = destinData.price + TotalPrice;
 
  
  //payment Razorpay
  async function loadScript(src: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const handlePayment = async (e: any) => {
    e.preventDefault();
    try {
      await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      try {
        const { data } = (await paymentApi(subTotal)) as any;
        console.log(data);

        const options = {
          key: "rzp_test_PfFqcsjDxItbTr",
          currency: data.order.currency,
          amount: data.order.amount.toString(),
          order_id: data.order.id,
          name: "Travio Packages",
          description: "Payment for your service",
          image: 'https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311518159a72179.jpg',
          handler: async function (response: any) {
        
            const paymentData = {
              orderCreationId: data.order.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              userID : userData?._id,
              destinId : destinData?._id,
              Participants :TotalGuest,
              Arrived : endDate ,
              BookingData : startDate,
              ExtraService : ServiceRedux,
              SubTotal : subTotal,
              Title : destinData?.title,
              Price : destinData?.price,
              priceCate : destinData?.priceCategory,
           
            };
           
            try {
               const result = await paymentSuccessApi(paymentData)
              
               console.log(result?.data);
               if(result?.data.success===true){
                dispatch(resetPassengerCount())
                dispatch(resetSelectedServices())
                navigate('/success')
               }
              
            } catch (error) {
              console.log(error);
              
              
            }
            console.log(paymentData);
          },
          prefill: {
            name: userData?.name,
            email: userData?.email,
            contact: userData?.phone ,
          },
          theme: {
            color: "#F37254",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white ">
      
        <h1 className="font-Yatra text-xl py-7 px-7 font-bold underline">
          Payment Details
        </h1>
        <p className="font-Asap w-[500px] ml-7 -mt-4">
          Travelers who use personal funds to facilitate travel arrangements
          will not be reimbursed until after the trip occurs and proper
          documentation is submitted.
        </p>
        <div className="ml-7 mt-3">
          <h1 className="font-Yatra text-sm font-bold">Email Address</h1>
          <input
            required
            className="h-9 mt-2 drop-shadow-xl  rounded font-Asap border-b-stone-600/80 w-1/2 shadow-inner"
            value={userData.email}
            type="email"
          />
        </div>
        <form onSubmit={handlePayment}>
          <div className=" w-5/6 ml-7 mt-8 ">
            <h1 className="font-Yatra text-xl font-bold py-2 px-3 underline ">
              {" "}
              Payment Method
            </h1>
            <div>
              <ul className=" mt-3 ml-5">
                <li className="mt-4 flex">
                  <input
                    type="radio"
                    id="hosting-big"
                    name="hosting"
                    value="hosting-big"
                    className="hidden peer"
                    required
                    onClick={() => setClick(true)}
                  />
                  <label
                    htmlFor="hosting-big"
                    className="inline-flex items-center justify-between  p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block w-[180px] h-5">
                      <div className="w-1/2">Net Banking</div>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="w-6 h-5 ml-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </label>
                  <div className="flex">
                    <img
                      className="h-12"
                      src={require("../../Assets/upi.png")}
                      alt="upi_pic"
                    />
                    <img
                      className="h-[60px]"
                      src={require("../../Assets/visa.png")}
                      alt="upi_pic"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-7">
            <h1 className="font-Asap text-xl font-bold underline ml-8">
              Booking Summary
            </h1>
            <div className=" drop-shadow-2xl bg-white w-[400px] h-[250px] ml-6 mt-3">
              <div className="flex">
                <div className="mt-4">
                  <h1 className="font-Asap py-6 px-8">Package Price </h1>
                </div>
                <div className="mt-4 flex">
                  <h1 className="font-Asap py-7 ">
                    <BiRupee />{" "}
                  </h1>
                  <h1 className="font-Asap py-6 font-bold ">
                    {destinData.price}{" "}
                  </h1>
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <h1 className="font-Asap  px-8">Extra service </h1>
                </div>
                <div className=" flex">
                  <h1 className="font-Asap py-1 ">
                    {" "}
                    <BiRupee />{" "}
                  </h1>
                  <h1 className="font-Asap  font-bold "> {TotalPrice} </h1>
                </div>
              </div>

              <div className="bg-slate-600/25 w-1/2 ml-6 mt-2 h-[1px]"></div>
              <div className="flex mt-3">
                <div className="">
                  <h1 className="font-Asap  px-10">Sub Total </h1>
                </div>
                <div className=" flex">
                  <h1 className="font-Asap py-1 ">
                    <BiRupee />{" "}
                  </h1>
                  <h1 className="font-Asap  font-bold ">{subTotal} </h1>
                </div>
              </div>

              <button
                disabled={click ? false : true}
                className="bg-cyan-300 w-1/3 h-8 font-Ariza ml-[150px] mt-6 drop-shadow-lg"
              >
                PAY NOW
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
