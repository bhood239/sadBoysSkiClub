import Image from "next/image";
import RegisterButton from "./RegisterButton";

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-12">
      
      {/* Banner Image - Natural aspect ratio to prevent cropping */}
      <div className="relative w-full mb-10 md:mb-16 rounded-xl overflow-hidden shadow-xl">
        {/* Using standard img tag to allow natural aspect ratio scaling without explicit dimensions */}
        <img
          src="/pictures/Chairlift2.png"
          alt="People on a Chairlift"
          className="w-full h-auto block"
        />
      </div>

      {/* Navigation Pills - Compact on mobile */}
      <nav className="sticky top-20 z-30 flex justify-center mb-12 md:mb-20">
        <div className="bg-white/90 backdrop-blur-md shadow-sm border border-stone-200 rounded-full p-1.5 inline-flex flex-wrap justify-center gap-1 mx-2">
          {[
            { name: 'Mission', href: '#mission' },
            { name: 'Program', href: '#program' },
            { name: 'Therapists', href: '#therapists' },
            { name: 'Partners', href: '#partners' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-stone-100 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mission Section - Responsive margins */}
      <section id="mission" className="max-w-3xl mx-auto text-center mb-20 md:mb-32 scroll-mt-32">
        <span className="text-stone-500 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">Who We Are</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 md:mb-8">Our Mission</h2>
        <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-light px-2">
          To create a safe space where men can share their experiences, build
          community, and find healing on the slopes. Through our programs, we
          aim to break the stigma around mental health and empower men to
          prioritize their well-being.
        </p>
      </section>

      {/* Program Section */}
      <section id="program" className="max-w-5xl mx-auto mb-20 md:mb-32 scroll-mt-32">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-stone-500 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Program</h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed px-2">
            A unique blend of outdoor adventure and mental health support. 
            We offer free group therapy sessions and individual support tailored specifically for men (18+), utilizing skiing as a therapeutic tool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Group Therapy</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Sessions take place before skiing in a supportive, relaxed environment. 
              Led by a registered psychotherapist, these sessions encourage open dialogue 
              and camaraderie, fostering trust before hitting the slopes.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Chairlift Chats</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              While skiing, participants engage in conversations with trained mental health 
              clinicians. This unique setting provides a comfortable space for discussing 
              challenges and setting goals in nature.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-stone-50 rounded-xl p-8 md:p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Important Details</h3>
            <p className="text-base md:text-lg opacity-90 leading-relaxed mb-8">
              Sessions start at 10 AM (4 hours duration). Participants must provide their own pass and gear. 
              <strong> This is not a ski lesson</strong> — participants should be comfortable on blue runs.
            </p>
            <div className="flex justify-center">
              <RegisterButton />
            </div>
          </div>
        </div>
      </section>

      {/* Action Shot - Aspect Ratio fix for mobile */}
      <div className="relative w-full aspect-video md:h-[500px] md:aspect-auto rounded-xl overflow-hidden shadow-xl mb-20 md:mb-32">
        <Image
          src={"/pictures/arcteryxSki.png"}
          fill
          alt="Skiing action shot"
          className="object-cover"
        />
      </div>

      {/* Therapists Section */}
      <section id="therapists" className="max-w-5xl mx-auto mb-20 md:mb-32 scroll-mt-32">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-stone-500 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">Our People</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Meet the Team</h2>
        </div>
        
        <div className="space-y-8 md:space-y-12">
          {/* Krista */}
          <div className="group bg-white p-6 md:p-10 rounded-xl shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
              <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-stone-50 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Image src="/pictures/KristaFace.png" fill alt="Krista Scott" className="object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Krista Scott</h3>
                <p className="text-stone-500 font-medium mb-4 text-sm md:text-base">Founder & RCC</p>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Krista is a Registered Clinical Counsellor and the founder of Slope Side Support Society. 
                  With a Master’s in Clinical Mental Health Counselling, she specializes in therapeutic intervention 
                  for youth trauma survivors. She combines her passions for therapy and skiing to offer accessible, 
                  authentic support in the Sea to Sky Corridor.
                </p>
              </div>
            </div>
          </div>

          {/* Greg */}
          <div className="group bg-white p-6 md:p-10 rounded-xl shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
              <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-stone-50 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Image src="/pictures/GregFace.jpeg" fill alt="Greg McDonnell" className="object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Greg McDonnell</h3>
                <p className="text-stone-500 font-medium mb-4 text-sm md:text-base">RCC & CCC</p>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  With 30 years in social service delivery, Greg specializes in trauma, family systems, and individual therapy. 
                  He is also a Mental Performance Consultant. A former elite athlete, Greg believes in a balanced lifestyle 
                  and can be found skiing, mountain biking, or surfing when not helping others.
                </p>
              </div>
            </div>
          </div>

          {/* Taylor */}
          <div className="group bg-white p-6 md:p-10 rounded-xl shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
              <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-stone-50 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Image src="/pictures/TaylorFace.png" fill alt="Taylor MacDougall" className="object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Taylor Macdougall</h3>
                <p className="text-stone-500 font-medium mb-4 text-sm md:text-base">MSW</p>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Taylor holds a master’s degree in social work and has worked in mental health since 2012. 
                  Currently a clinician with Vancouver Coastal Health, he is also active in the Alpine Club of Canada. 
                  Taylor lives in Pemberton and enjoys skiing, biking, and climbing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="text-center pb-8 md:pb-12 scroll-mt-32">
        <span className="text-stone-500 font-semibold tracking-wider uppercase text-xs md:text-sm mb-6 md:mb-8 block">Supported By</span>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <a href="https://arcteryx.com/ca/en" className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
            <Image src="/pictures/arcteryx.png" height={100} width={100} alt="arcteryx logo" className="object-contain md:w-[120px] md:h-[120px]" />
          </a>
          <a href="https://mcdonnellcounselling.com/" className="bg-black p-3 md:p-4 rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Image src="/pictures/McDonnell_Counselling_logo_white.png" height={100} width={100} alt="McDonnell counselling logo" className="object-contain md:w-[120px] md:h-[120px]" />
          </a>
        </div>
      </section>
    </div>
  );
}
