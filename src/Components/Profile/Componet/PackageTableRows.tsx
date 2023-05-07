import React from "react";
import { NavLink } from "react-router-dom";
import { FcInfo } from "react-icons/fc";
import Swal from "sweetalert2";
import { GiCancel } from "react-icons/gi";
import { bookingCancelApi } from "../../../Api/user/Profile/CancelApi";
import { useDispatch } from "react-redux";
import { resetDestinationShowData } from "../../../Redux/slice/bookingIvoice";
import { setBookingDetails } from "../../../Redux/slice/bookingDetailsSlice"
import { toast } from "react-hot-toast";
function PackageTableRows({ data, BDate, ADate, i }: any) {
  const dispatch = useDispatch();

  const handleCancel = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
      cancelButtonText: "Cancel",
    }).then((result: any) => {
      if (result.isConfirmed) {
        try {
          bookingCancelApi(id).then((res) => {
            if (res?.data.success) {
            //   setCanceledClicked(true);
            dispatch(setBookingDetails(res.data.bookingData))
              dispatch(resetDestinationShowData());
              toast.success("Your Booking is Cancelled");
            }
          });
        } catch (error) {
          console.log(error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
       
      }
    });
  };
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-2 py-4 font-medium hidden md:block">
          {i + 1}
        </td>
        <td className="whitespace-nowrap px-2 py-4  ">
          <div className="md:hidden block">{data.Title.slice(0, 15)}</div>
          <div className=" hidden md:block">{data.Title}</div>
        </td>
        <td className="whitespace-nowrap px-2 py-4 hidden md:block">
          {data.priceCate}
        </td>
        <td className="whitespace-nowrap  py-4 font-medium">{BDate}</td>
        <td className="whitespace-nowrap px-1 py-4">{ADate}</td>
        <td className="whitespace-nowrap px-2 py-4"> {data.SubTotal}</td>
        <td className="whitespace-nowrap px-2 py-4 font-medium hidden md:block">
          {data.BookingStatus === "Success" && (
            <div className="inline-block whitespace-nowrap rounded-[0.27rem] bg-success-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700">
              Success
            </div>
          )}
          {data.BookingStatus === "Cancelled" && (
            <div className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
              Cancelled
            </div>
          )}
          {data.BookingStatus === "Processing" && (
            <div className="inline-block whitespace-nowrap rounded-[0.27rem] bg-warning-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-warning-800">
              processng
            </div>
          )}
        </td>

        {/* {!cancelClicked && ( */}
          <>
        
            <td className="whitespace-nowrap px-2 py-4 cursor-pointer">
            {data.BookingStatus === "Success" ? (
              <NavLink to={`/bookingShow/${data._id}`}>
                <FcInfo />
              </NavLink>
                  ) : null}
            </td>
         
            <td className="whitespace-nowrap px-2 py-4 text-red-600 cursor-pointer">
              {data.BookingStatus === "Success" ? (
                <div>
                  <GiCancel onClick={() => handleCancel(`${data._id}`)} />
                </div>
              ) : null}
            </td>
          </>
        {/* )} */}
      </tr>
    </>
  );
}

export default PackageTableRows;
