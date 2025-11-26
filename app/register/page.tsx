"use client";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Register(): JSX.Element {
  const [state, handleSubmit] = useForm("xyzgvlbo");
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize the custom validity for the checkboxes on load
  useEffect(() => {
    if (formRef.current) {
      const checkboxes = formRef.current.querySelectorAll<HTMLInputElement>(
        'input[name="dates"]'
      );
      const isChecked = Array.from(checkboxes).some((cb) => cb.checked);
      if (!isChecked && checkboxes.length > 0) {
        checkboxes[0].setCustomValidity("Please select at least one date.");
      }
    }
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const form = e.target.form;
    if (form) {
      const checkboxes = form.querySelectorAll<HTMLInputElement>(
        'input[name="dates"]'
      );
      const isChecked = Array.from(checkboxes).some((cb) => cb.checked);

      if (checkboxes.length > 0) {
        if (isChecked) {
          checkboxes[0].setCustomValidity("");
        } else {
          checkboxes[0].setCustomValidity("Please select at least one date.");
        }
      }
    }
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center border-t-4 border-slate-800">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Registration Received
          </h2>
          <p className="text-gray-600">
            Thank you for your interest in joining a session with Slopeside Support Society. We will be in touch
            shortly with details.
          </p>
        </div>
      </div>
    );
  }

  return (
    // Added pt-28 to clear the fixed TopNavBar (h-20)
    <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative bg-stone-100">
      <Image
        src={"/pictures/skitracks.png"}
        fill
        alt="Ski tracks in snow"
        className="fixed top-0 left-0 z-0 object-cover opacity-40 grayscale"
        priority
      />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200"
        >
          {/* Honeypot field. Formspree rejects if filled. */}
          <input 
            type="text" 
            name="_gotcha" 
            style={{ display: "none" }} 
            tabIndex={-1} 
            autoComplete="off" 
          />

          {/* Header Section - Dark Slate theme */}
            <div className="bg-gradient-to-br from-slate-50 to-stone-100 py-6 px-6 border-b border-slate-200">
            <h1 className="text-2xl font-semibold text-slate-800 text-center tracking-wide">
              Session Sign-Up
            </h1>
            </div>

          <div className="p-8 space-y-8">
            {/* Section: Personal Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-slate-800 border-b border-gray-200 pb-2">
                Participant Details
              </h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 p-2.5 border"
                  placeholder="John Doe"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 p-2.5 border"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 p-2.5 border"
                    placeholder="(555) 123-4567"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input 
                    type="date" 
                    name="dob" 
                    id="dob"
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 p-2.5 border"
                  />
                  <p className="text-xs text-gray-500 mt-1">*Must be 18+ to participate</p>
                  <ValidationError prefix="DOB" field="dob" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 p-2.5 border bg-white"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Ski Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-slate-800 border-b border-gray-200 pb-2">
                Session Information
              </h2>

              <div>
                <label htmlFor="ability" className="block text-sm font-medium text-gray-700 mb-1">
                  Ski Ability Level
                </label>
                <select
                  name="ability"
                  id="ability"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 p-2.5 border bg-white"
                >
                  <option value="beginner">Beginner (Green runs)</option>
                  <option value="intermediate">Intermediate (Blue runs)</option>
                  <option value="advanced">Advanced (Black diamonds)</option>
                  <option value="expert">Expert (Double blacks/Off-piste)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Dates (Choose at least one)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "jan9", label: "Friday, January 9" },
                    { id: "feb8", label: "Sunday, February 8" },
                    { id: "mar6", label: "Friday, March 6" },
                    { id: "apr12", label: "Sunday, April 12" },
                  ].map((date) => (
                    <div key={date.id} className="relative">
                      <input
                        type="checkbox"
                        id={`date-${date.id}`}
                        name="dates"
                        value={date.id}
                        onChange={handleDateChange}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`date-${date.id}`}
                        className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-slate-600 peer-checked:bg-slate-100 peer-checked:ring-1 peer-checked:ring-slate-600 transition-all"
                      >
                        <span className="font-medium text-gray-700 peer-checked:text-slate-900">
                          {date.label}
                        </span>
                        {/* Checkmark Icon */}
                        <svg className="w-5 h-5 text-slate-700 hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </label>
                    </div>
                  ))}
                </div>
                <ValidationError prefix="Dates" field="dates" errors={state.errors} />
              </div>
            </div>

            {/* Section: Additional Info */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-slate-800 border-b border-gray-200 pb-2">
                Additional Information
              </h2>
              
              <div>
                <label htmlFor="topics" className="block text-sm font-medium text-gray-700 mb-1">
                  Topics to Discuss (Optional)
                </label>
                <textarea
                  id="topics"
                  name="topics"
                  rows={3}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 p-2.5 border"
                  placeholder="Is there anything specific you'd like to talk about?"
                />
              </div>

              <div>
                <label htmlFor="hear" className="block text-sm font-medium text-gray-700 mb-1">
                  How Did You Hear About Us?
                </label>
                <input
                  id="hear"
                  type="text"
                  name="hear"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 p-2.5 border"
                />
              </div>
            </div>

            {/* Section: Agreements */}
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 space-y-4">
              <h3 className="font-semibold text-slate-900">Required Agreements</h3>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="aware"
                  name="aware"
                  required
                  className="mt-1 h-4 w-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                />
                <label htmlFor="aware" className="ml-3 text-sm text-gray-700">
                  I am aware that participants are expected to have a ski pass, skis, and ski gear.
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="ski_ability_check"
                  name="ski ability"
                  required
                  className="mt-1 h-4 w-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                />
                <label htmlFor="ski_ability_check" className="ml-3 text-sm text-gray-700">
                  I am aware that participants are expected to be able to confidently ski a blue run.
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="liability"
                  name="liability"
                  required
                  className="mt-1 h-4 w-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                />
                <label htmlFor="liability" className="ml-3 text-sm text-gray-700">
                  I confirm that the organizers are not liable for accidents or injuries.
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md"
            >
              {state.submitting ? "Submitting..." : "Complete Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
