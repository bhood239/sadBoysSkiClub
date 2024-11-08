import Image from "next/image";
import RegisterButton from "./RegisterButton";

export default function About() {
  return (
    <div className=" bg-stone-50 w-full -mt-16 mx-auto">
      <Image
        src={"/pictures/Chairlift2.png"}
        height={700}
        width={1200}
        alt="People on a Chairlift"
        className="w-full"
      />
      {/* Navigation Links */}
      <nav className="mb-12 mt-10">
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
      <section id="mission" className="mb-16 md:ml-32 md:mr-32">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Our Mission
        </h1>
        <p className="text-gray-700 leading-relaxed text-center text-xl font-semibold">
          To create a safe space where men can share their experiences, build
          community, and find healing on the slopes. Through our programs, we
          aim to break the stigma around mental health and empower men to
          prioritize their well-being.
        </p>
      </section>

      {/* What We Do Section */}
      <section id="program" className="mb-16 md:ml-32 md:mr-32">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          The Program
        </h1>
        <p className="text-gray-700 leading-relaxed text-center mb-4">
          At Slopeside Support Society, our program is designed to provide a
          unique blend of outdoor adventure and mental health support. We offer
          free group therapy sessions and individual support tailored
          specifically for men, utilizing skiing as a therapeutic tool. Please
          be advised that this program is for male-identifying individuals aged
          18 and over.
        </p>
        <ul className="flex items-center justify-center flex-col ml-20 mr-20">
          <li className="text-xl font-semibold text-gray-800 mb-4">
            Group Therapy Sessions:
          </li>
          <li className="mb-4 text-center">
            Our group therapy sessions are conducted prior to skiing and take
            place in a supportive and relaxed environment. Led by a registered
            psychotherapist, these sessions encourage open dialogue, shared
            experiences, and camaraderie among participants. This setting
            fosters trust and connection, allowing men to engage in meaningful
            discussions before hitting the slopes.
          </li>
          <li className="text-xl font-semibold text-gray-800 mb-4">
            Individual Support—Chairlift Chats:
          </li>
          <li className="mb-4 text-center">
            For those seeking one-on-one guidance, we offer "Chairlift Chats,"
            where participants can have informal conversations with trained
            mental health clinicians while riding the chairlift. This unique
            setting provides a comfortable space for discussing challenges,
            setting goals, and developing coping strategies in a relaxed and
            natural environment.
          </li>
          <li className="text-xl font-semibold text-gray-800 mb-4">
            Community and Connection:
          </li>
          <li className="mb-8 text-center">
            Our program emphasizes building a strong sense of community, where
            participants can forge lasting friendships and support networks. By
            breaking down barriers and stigma surrounding mental health, we aim
            to empower men to share their stories, seek help, and prioritize
            their well-being.
          </li>
          <li className="text-xl font-semibold text-gray-800 mb-4">
            Important Session Information:
          </li>
          <li className="mb-8 text-center">
            Our sessions start at 10 AM and last for 4 hours. Participants are
            expected to provide their own ski pass and ski gear, as we do not
            provide equipment. Please note that this is not a ski lesson; we
            will not be providing instruction on skiing. To ensure a positive
            experience for everyone, participants should be able to comfortably
            ski a blue run. This allows for a focus on both mental health
            support and enjoying the slopes together.
          </li>
          <li className="text-xl font-semibold text-gray-800 mb-8 text-center">
            Join us at Slopeside Support Society, where we believe that healing
            happens not just in conversation, but also in connection with nature
            and each other.
          </li>
        </ul>
        <RegisterButton />
      </section>
      <Image
        src={"/pictures/arcteryxSki.png"}
        height={700}
        width={1200}
        alt="People on a Chairlift"
        className="w-full"
      />

      {/* Therapists Section */}
      <section id="therapists" className="mb-16 pl-14 pr-14 lg:ml-44 lg:mr-44">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
          Meet the Team
        </h1>
        <div className="space-y-8 flex justify-center items-center flex-col lg:flex-col gap-8">
          <div className="flex flex-col items-center">
            <Image
              src={"/pictures/KristaFace.png"}
              height={200}
              width={200}
              alt="Krista Scott"
              className="mr-10"
            />
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold text-gray-800">
                Krista Scott - Founder & RCC
              </p>
              <br />
              <p className="text-gray-600">
                Krista Bio goes here: Taylor Macdougall (he/him) holds a
                master’s degree in social work from the University of Victoria,
                and bachelor’s degrees in social work and philosophy from the
                University of British Columbia and the University of Guelph
                respectively. Taylor has worked in the field of mental health
                since 2012, and currently works as a social work clinician with
                Vancouver Coastal Health Mental Health and Substance Use
                Services in Whistler and Pemberton. Taylor volunteers as a
                director with the Alpine Club of Canada Whistler Section,
                helping to coordinate the Wendy Thompson Hut Volunteer Custodian
                Program. When the fish aren’t biting on the rivers of Pemberton,
                Taylor has been known to ski, bike and climb around the Sea to
                Sky Corridor. Taylor lives with his family on the unceeded
                territory of the Lil’wat Nation in Pemberton.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={"/pictures/GregFace.jpeg"}
              height={200}
              width={200}
              alt="Taylor MacDougall"
              className="mr-10"
            />
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold text-gray-800">
                Greg McDonnell - RCC & CCC
              </p>
              <br />
              <p className="text-gray-600">
                Greg McDonnell has worked in the area of social service delivery
                for 30 years. Currently, he is a Registered Clinical Counsellor
                (BC Association of Clinical Counsellors) and has owned a
                successful private psychotherapy practice in Whistler BC since
                2007. In his private practice he specializes in trauma, family
                systems, couple and individual therapy. He is also registered
                with the Canadian Sport Psychology Association and provides
                Mental Performance Consulting. Greg has worked collaboratively
                with a complex range of individuals, communities, corporations,
                cultures and sport groups on projects related to Health and
                Social Development. Greg also consults with several sport groups
                in Canada reviewing and identifying needed supports in the area
                of mental performance and goal setting (most notably the
                Canadian Sports Institute). Many moons ago, Greg played elite
                level basketball, he has competed competitively in running,
                triathlon, road and mountain bike racing. He is a reviewer for
                the Canadian Journal of Counselling A believer in leading a
                balanced lifestyle, Greg can otherwise be found with his family
                or with the wind in his face while skiing, mountain biking,
                surfing or traveling.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={"/pictures/TaylorFace.png"}
              height={200}
              width={200}
              alt="Taylor MacDougall"
              className="mr-10"
            />
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold text-gray-800">
                Taylor Macdougall - MSW
              </p>
              <br />
              <p className="text-gray-600">
                Taylor Macdougall (he/him) holds a master’s degree in social
                work from the University of Victoria, and bachelor’s degrees in
                social work and philosophy from the University of British
                Columbia and the University of Guelph respectively. Taylor has
                worked in the field of mental health since 2012, and currently
                works as a social work clinician with Vancouver Coastal Health
                Mental Health and Substance Use Services in Whistler and
                Pemberton. Taylor volunteers as a director with the Alpine Club
                of Canada Whistler Section, helping to coordinate the Wendy
                Thompson Hut Volunteer Custodian Program. When the fish aren’t
                biting on the rivers of Pemberton, Taylor has been known to ski,
                bike and climb around the Sea to Sky Corridor. Taylor lives with
                his family on the unceeded territory of the Lil’wat Nation in
                Pemberton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="ml-44 mr-44">
        <h1 className="text-3xl font-bold text-gray-900 mb-9 text-center">
          Partners
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20 justify-center pb-10">
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
