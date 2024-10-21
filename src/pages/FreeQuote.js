import React from 'react';

const FreeQuote = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900">Free Quote</h1>
        <form
          action="mailto:sahasrakesara@gmail.com"
          method="POST"
          enctype="text/plain"
        >
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="address" className="mb-3 block text-base font-medium text-[#07074D]">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="provider" className="mb-3 block text-base font-medium text-[#07074D]">
              Electricity Provider <span className="text-red-500">*</span>
            </label>
            <select
              id="provider"
              name="provider"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="CEB">CEB</option>
              <option value="LECO">LECO</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="phase" className="mb-3 block text-base font-medium text-[#07074D]">
              Phase <span className="text-red-500">*</span>
            </label>
            <select
              id="phase"
              name="phase"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="Single Phase">Single Phase</option>
              <option value="Three Phase">Three Phase</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="capacity" className="mb-3 block text-base font-medium text-[#07074D]">
              System Capacity <span className="text-red-500">*</span>
            </label>
            <select
              id="capacity"
              name="capacity"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="2kw">2kw</option>
              <option value="3kw">3kw</option>
              <option value="5kw">5kw</option>
              <option value="10kw">10kw</option>
              <option value="15kw">15kw</option>
              <option value="20kw and above">20kw and above</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="comments" className="mb-3 block text-base font-medium text-[#07074D]">
              Any Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              placeholder="Enter your comments"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-full bg-gradient-to-r from-slate-800 to-slate-900 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeQuote;
