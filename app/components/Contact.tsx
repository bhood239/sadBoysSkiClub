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
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-lg shadow-sm border border-slate-100 max-w-md mx-auto mt-10 mb-10 text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          Message Sent
        </h3>
        <p className="text-slate-600">
          Thanks for reaching out. We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100">
        <div className="p-8 sm:p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-4">
              We&apos;re here to listen. Reach out directly or use the form below.
            </p>
            <a
              href="mailto:info@slopesidesupport.com"
              className="inline-block text-slate-500 hover:text-slate-800 font-medium transition-colors duration-200 border-b border-slate-300 hover:border-slate-800 pb-0.5"
            >
              info@slopesidesupport.com
            </a>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Honeypot field for spam protection */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                placeholder="Your name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                placeholder="you@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-200 resize-y placeholder-slate-400"
                placeholder="How can we help?"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
