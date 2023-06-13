import React from "react";

export default function PersonBio() {
  return (
    <main className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-14 my-14 gap-0 md:gap-10 h-full max-w-screen-2xl mx-auto">
      <img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg"
        alt="profile-pic"
        className="w-52 h-60 sm:w-96 sm:h-[450px] block rounded-xl"
      />
      <div>
        <h1 className="font-bold font-signika text-4xl mb-7 mt-4 text-center md:text-left">Keanu Reeves</h1>
        <h2 className="text-xl font-bold font-signika mb-2">Personal Info</h2>
        <div className="flex flex-wrap gap-y-2">
          <div className="w-1/2 font-firasans">
            <h2 className="font-semibold text-base">Known For</h2>
            <p className="font-normal text-sm">Acting</p>
          </div>
          <div className="w-1/2 font-firasans">
            <h2 className="font-semibold text-base">Birthday</h2>
            <p className="font-normal text-sm">1964-09-02 (58 years old)</p>
          </div>
          {/* <div className="w-1/2 font-firasans">
            <h2 className="font-semibold text-base">Died</h2>
            <p className="font-normal text-sm">Null</p>
          </div> */}
          <div className="w-1/2 font-firasans">
            <h2 className="font-semibold text-base">Birthplace</h2>
            <p className="font-normal text-sm">Beirut, Lebanon</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-xl font-bold mt-6 font-signika">Biography</h2>
            <p className="text-[0.95rem] leading-5 mt-1 font-firasans">
              Keanu Charles Reeves is a Canadian actor. Reeves is known for his
              roles in Bill & Ted's Excellent Adventure, Speed, Point Break, and
              The Matrix franchise as Neo. He has collaborated with major
              directors such as Stephen Frears (in the 1988 period drama
              Dangerous Liaisons); Gus Van Sant (in the 1991 independent film My
              Own Private Idaho); and Bernardo Bertolucci (in the 1993 film
              Little Buddha). Referring to his 1991 film releases, The New York
              Times' critic, Janet Maslin, praised Reeves' versatility, saying
              that he "displays considerable discipline and range. He moves
              easily between the buttoned-down demeanor that suits a police
              procedural story and the loose-jointed manner of his comic roles."
              A repeated theme in roles he has portrayed is that of saving the
              world, including the characters of Ted Logan, Buddha, Neo, Johnny
              Mnemonic, John Constantine and Klaatu.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
