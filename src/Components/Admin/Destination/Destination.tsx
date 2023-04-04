import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

export default function Destination() {
  const setpackage: any = useSelector<any>(
    (state: RootState) => state.package.packageCategory
  );
  console.log(setpackage);
  const setactvity = useSelector((state: RootState) => state.acitvtiy.Activity);
  const actvityLisit = setactvity.map((items: any) => (
    <option className="text-black" value={items.activtiy} id={items.activtiy}>
      {items.activtiy}
    </option>
  ));
  const singleCategory = setpackage.map((item: any) => (
    <option
      className="text-black"
      value={item.packageCategory}
      id={item.packageCategory}
    >
      {item.packageCategory}
    </option>
  ));
  const [option, setOption] = React.useState<string>();
  console.log(option);

  return (
    <div className="w-full">
      <div className="flex justify-between mt-3">
        <h1 className="md:text-2xl text-lg ml-3 md:ml-0  font-Nanum font-semibold underline">
          Destination Management
        </h1>
        <button
          type="button"
          data-te-target="#staticBackdrop"
          data-te-ripple-init
          data-te-ripple-color="light"
          data-te-toggle="modal"
          className="md:w-[110px] w-[80px] h-7 outline hover:outline-blue-300 outline-gray-400 outline-2 mr-5 md:mr-10 "
        >
          Add
        </button>
      </div>

      <div
        data-te-modal-init
        className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="staticBackdrop"
        data-te-backdrop="static"
        data-te-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel"
              >
                Add package Details
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div data-te-modal-body-ref className="relative p-4">
              <form>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="Title"
                    id="Title"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="Title"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Destination Title
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="Descrption"
                    id="Descrption"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="Descrption"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Descrption
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="price"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    $ Price
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="image"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Images
                  </label>
                </div>
                <div className="flex">
                  <div className="relative z-0  mb-6 group">
                    <label
                      htmlFor="Package_Category"
                      className="peer-focus:font-medium   text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Package Category
                    </label>
                    <select
                      id="Package_Category"
                      onChange={(e) => {
                        setOption(e.target.value);
                      }}
                      className="bg-gray-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a Category</option>
                      {singleCategory}
                    </select>
                  </div>
                  <div className="relative z-0  mb-6 group ml-2">
                    <label
                      htmlFor="Package_Category"
                      className="peer-focus:font-medium   text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Activities
                    </label>
                    <select
                      id="Package_Category"
                      onChange={(e) => {
                        setOption(e.target.value);
                      }}
                      className="bg-gray-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a Activities</option>
                      {actvityLisit}
                    </select>
                  </div>
                </div>

                <h1 className="font-slab">Duration</h1>
                <div className="grid md:grid-cols-2 md:gap-6 mt-3">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="duration"
                      id="duration"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="duration"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Day
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="duration"
                      name="duration"
                      id="duration"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="duration"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Night
                    </label>
                  </div>
                </div>
                <h1 className="font-slab ">Package Services</h1>
                <div className="grid md:grid-cols-2 mt-1 ">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Hotels"
                      id="Hotels"
                      value="Hotels"
                      className=""
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="Hotels"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400  ml-3 mt-1"
                    >
                      Hotels
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Flight"
                      id="Flight"
                      value="Flight"
                      className=""
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="Flight"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 ml-3 mt-1"
                    >
                      Flight
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Sightseeing"
                      id="Sightseeing"
                      value="Sightseeing"
                      className=""
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="Sightseeing"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 ml-3 mt-1"
                    >
                      Sightseeing
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Meals"
                      id="Meals"
                      value="Meals"
                      className=""
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="Meals"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 ml-3 mt-1"
                    >
                      Meals
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Transfers"
                      id="Transfers"
                      value="Transfers"
                      className=""
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="Transfers"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 ml-3 mt-1"
                    >
                      Transfers
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
