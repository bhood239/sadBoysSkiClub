"use client";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { FormEvent } from "react";

export default function Register(): JSX.Element {
  const [state, handleSubmit] = useForm("xyzgvlbo");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(event);
  };

  if (state.succeeded) {
    return (
      <p className="mt-20 text-3xl font-bold text-gray-900 flex justify-center">
        Thank you for registering. We will be in touch with a confirmation
        email.
      </p>
    );
  }

  return (
    <div className="mt-20 relative z-10">
      <Image
        src={"/pictures/skitracks.png"}
        height={700}
        width={700}
        alt="Charlift picture"
        className="w-full h-full fixed top-0 right-0 z-0 object-cover"
      />
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col space-y-4 p-6 bg-stone-50 rounded-lg shadow-lg max-w-3xl mx-auto relative z-10"
      >
        <h1 className="text-3xl font-bold text-gray-900 flex justify-center">
          Register
        </h1>
        <label htmlFor="name" className="text-gray-700 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="dob" className="text-gray-700 font-medium">
          Date of Birth
        </label>
        <div className="flex space-x-2">
          <select name="day" className="border border-gray-300 rounded-md p-2">
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            name="month"
            className="border border-gray-300 rounded-md p-2"
          >
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, i) => (
              <option key={i} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select name="year" className="border border-gray-300 rounded-md p-2">
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i} value={2024 - i}>
                {2024 - i}
              </option>
            ))}
          </select>
        </div>
        <ValidationError
          prefix="Date of Birth"
          field="dob"
          errors={state.errors}
        />
        <div className="flex flex-row">
          <p className="font-semibold">*Disclaimer:&nbsp;</p>
          <p> Participants must be 18 years of age or older participate.</p>
        </div>

        <label htmlFor="gender" className="text-gray-700 font-medium">
          Gender
        </label>
        <select name="gender" className="border border-gray-300 rounded-md p-2">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <ValidationError prefix="Gender" field="gender" errors={state.errors} />

        <label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="phone" className="text-gray-700 font-medium">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError
          prefix="Phone Number"
          field="phone"
          errors={state.errors}
        />

        <label htmlFor="ability" className="text-gray-700 font-medium">
          Ski Ability
        </label>
        <select
          name="ability"
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
        <ValidationError
          prefix="Ski Ability"
          field="ability"
          errors={state.errors}
        />

        <label htmlFor="dates" className="text-gray-700 font-medium">
          Date Registering For
        </label>
        <select
          name="dates"
          multiple
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="jan9">
            Friday, January 9
          </option>
          <option value="feb8">
            Sunday, February 8
          </option>
          <option value="mar6">Friday, March 6</option>
          <option value="apr12">Sunday, April 12</option>
        </select>
        <ValidationError
          prefix="Dates Registering for"
          field="dates"
          errors={state.errors}
        />

        <label htmlFor="topics" className="text-gray-700 font-medium">
          Topics You&apos;d Like to Discuss (Optional)
        </label>
        <textarea
          id="topics"
          name="topics"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError prefix="Topics" field="topics" errors={state.errors} />

        <label htmlFor="hear" className="text-gray-700 font-medium">
          How Did You Hear About Us? (Optional)
        </label>
        <input
          id="hear"
          type="text"
          name="hear"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError prefix="Hear" field="hear" errors={state.errors} />

        <div className="flex items-start">
          <input
            type="checkbox"
            id="aware"
            name="aware"
            className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="aware" className="ml-2 text-gray-700">
            I am aware that participants are expected to have a ski pass, skis,
            and ski gear.
          </label>
        </div>
        <ValidationError prefix="Aware" field="aware" errors={state.errors} />

        <div className="flex items-start">
          <input
            type="checkbox"
            id="ski ability"
            name="ski ability"
            className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="ski ability" className="ml-2 text-gray-700">
            I am aware that participants are expected to be able to confidently
            ski a blue run.
          </label>
        </div>
        <ValidationError
          prefix="ski ability"
          field="ski ability"
          errors={state.errors}
        />

        <div className="flex items-start">
          <input
            type="checkbox"
            id="liability"
            name="liability"
            className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="liability" className="ml-2 text-gray-700">
            I confirm that the organizers are not liable for accidents or
            injuries.
          </label>
        </div>
        <ValidationError
          prefix="Liability"
          field="liability"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
