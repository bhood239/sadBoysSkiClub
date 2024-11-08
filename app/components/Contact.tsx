import { useForm, ValidationError } from "@formspree/react";
import { FormEvent } from "react";

export default function Contact(): JSX.Element {
  const [state, handleSubmit] = useForm("xzzpwykw");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(event);
  };

  if (state.succeeded) {
    return (
      <p>
        Thanks for contacting us, we will get back to you as soon as possible!
      </p>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center space-y-4 p-6 bg-white shadow-lg w-full mx-auto border-t-8 border-b-8 border-slate-900"
      >
        <h1 className="text-2xl flex justify-center">Contact Us</h1>
        <label htmlFor="name" className="text-gray-700 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email" className="text-gray-700 font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message" className="text-gray-700 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 w-44"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
