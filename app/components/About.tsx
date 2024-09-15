import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white w-full">
      {/* Navigation Links */}
      <nav className="mb-12">
        <ul className="flex justify-center space-x-6 text-lg">
          <li>
            <a
              href="#mission"
              className=" font-medium text-gray-800 hover:text-gray-500"
            >
              Our Mission
            </a>
          </li>
          <li>
            <a
              href="#program"
              className="text-lg font-medium text-gray-800 hover:text-gray-500"
            >
              The Program
            </a>
          </li>
          <li>
            <a
              href="#therapists"
              className="font-medium text-gray-800 hover:text-gray-500"
            >
              Therapists
            </a>
          </li>
          <li>
            <a
              href="#partners"
              className="font-medium text-gray-800 hover:text-gray-500"
            >
              Partners
            </a>
          </li>
        </ul>
      </nav>

      {/* Mission Section */}
      <section id="mission" className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Our Mission
        </h1>
        <p className="text-gray-700 leading-relaxed text-center">
          To decrease rates of male suicide and depression through professional
          support and connection to others. The goal is to provide free group
          and individual therapy to men in the mountain setting.
        </p>
      </section>

      {/* What We Do Section */}
      <section id="program" className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          The Program
        </h1>
        <p className="text-gray-700 leading-relaxed text-center">
          A description of the program, including dates and details, will go
          here.
        </p>
      </section>

      {/* Therapists Section */}
      <section id="therapists" className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Meet the Team
        </h1>
        <div className="space-y-8">
          <div>
            <p className="text-xl font-semibold text-gray-800">
              Krista Scott - Founder & RCC
            </p>
            <p className="text-gray-600">Bio coming soon.</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">
              Greg McDonnell - RCC & CCC
            </p>
            <p className="text-gray-600">Bio coming soon.</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">
              Ryan Payne - RCC
            </p>
            <p className="text-gray-600">Bio coming soon.</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners">
        <h1 className="text-3xl font-bold text-gray-900 mb-9 text-center">
          Partners
        </h1>
        <div className="flex flex-row justify-between">
          <a href="https://arcteryx.com/ca/en">
            <Image
              src={"/pictures/arcteryx.png"}
              height={200}
              width={200}
              alt="arcteryx logo"
            />
          </a>
          <a href="https://www.whistlerblackcomb.com/">
            <Image
              src={"/pictures/wb.png"}
              height={200}
              width={200}
              alt="Whistler Blackcomb logo"
              className="-mt-9"
            />
          </a>
          <a href="https://mcdonnellcounselling.com/" className="bg-black">
            <Image
              src={"/pictures/McDonnell_Counselling_logo_white.png"}
              height={200}
              width={200}
              alt="Whistler Blackcomb logo"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
