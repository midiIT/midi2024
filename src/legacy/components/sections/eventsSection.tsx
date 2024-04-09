import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faBasketball,
  faChess,
  faBrain,
  faIdCardAlt,
  faCube,
  faMapLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import lanparty from "../../public/events/lanparty.webp";
import ClosingEvent from "../../public/events/uzdarymas.webp";
import Chess from "../../public/events/sachmatai.webp";
import Imones from "../../public/events/imoniu_muge.webp";
import Decathlon from "../../public/events/decathlon.webp";
import Protmusis from "../../public/events/protmusis.webp";
import Sport from "../../public/events/sporto_dienos.webp";
import Orientacines from "../../public/events/orientacines.webp";

var events = [
  {
    name: "MIDI LAN Party", 
    description: `👾 Margi pikseliai, klavišų garsas, pelės paspaudimai, žaidimo kauliukai, žetonų barškėjimas - ar esi pasiruošęs patirti visa tai ir daugiau vienoje vietoje?
    👉 MIDI kviečia visus video žaidimų, stalo žaidimų, sportinio pokerio entuziastus ir mėgėjus balandžio 20-21 dienomis dalyvauti kasmetiniame MIDI LAN Party ir laimėti įvairių prizų!
    🎮 Visus komandinę dvasią jaučiančius žaidėjus kviečiame burti komandas ir išbandyti savo jėgas pagrindiniuose LAN turnyruose - League Of Legends, Valorant ir Counter-Strike 2. Nepamiršk pakviesti ir palaikymo komandos, nes renginio metu bus užtikrintos tribūnos palaikymui!
    🎯 Jeigu pagrindiniai LAN turnyrai tavęs nesužavėjo ar pilnai nepasitiki savo įgūdžiais – nenusimink! Tavęs lauks įvairūs kompiuteriniai žaidimai - Sims 4 build-offs, Tetris, Tekken 7, Teamfight Tactics ir kiti. Kaip ir pagrindiniuose turnyruose, čia tavęs taip pat laukia prizai.
    🎲 Galbūt nesi virtualaus pasaulio pilietis, bet mėgsti žaisti stalo žaidimus? LAN Party metu galėsi išbandyti savo jėgas žaisdamas tokius žaidimus kaip Wingspan ar Powergrid ir, žinoma, laimėti prizų. Taip pat tavęs lauks ir didelė įvairovė kitų stalo žaidimų.
    🃏 Mėgsti kortų žaidimus ir nori išbandyti savo sėkmę? LAN Party metu turėsi galimybę ištraukti savo laimingą kortą ir sudalyvauti sportinio pokerio turnyre!
    🧩 O kad nepabostų tik konkuruoti dėl prizų, viso renginio metu tavęs laukia ir laisvoji zona, kur su bendraminčiais galėsi kartu žaisti, ką tik panorėjęs. Taip pat galėsi pajudėti virtualiame pasaulyje - esančiame VR zonoje - ar išbandyti savo šokių sugebėjimus visų pamiltame Just Dance!
    ‼️ SVARBU ‼️
    LAN party kompiuterinių žaidimų turnyrams reikalinga sava įranga - kompiuteris ir visa reikalinga periferinė įranga - monitoriai, pelės, klaviatūros ir panašiai, tad planuojant dalyvauti bet kuriame kompiuterinių žaidimų turnyre, nepamiršk pasiimti reikalingos įrangos!
    Pačiame renginyje gyvai privalo dalyvauti bent 60% turnyruose dalyvaujančių komandos žaidėjų.
    
    🇬🇧

    👾 Colorful pixels, sound of keyboards, mouse clicks, game dice, rattling of poker chips – are you ready to experience all of it and more in one place?
    👉 MIDI is inviting all video game, board game, sports poker enthusiasts and enjoyers to participate in the annual MIDI LAN Party on April 20-21 and win various prizes!
    🎮 All players with a sense of team spirit are invited to form teams and test their strength in the main LAN tournaments – League Of Legends, Valorant and Counter-Strike 2. Don’t forget to invite the support team as well, as there will be stands provided for the supporters during the event!
    🎯 But if the main LAN tournaments didn’t catch your attention or you simply are not confident enough in your skills – don’t be upset! Various other computer games will be waiting for you – Sims 4 build-offs, Tetris, Tekken 7, Teamfight Tactics and more. Just like the main tournaments, there will be prizes waiting for you.
    🎲 Perhaps you’re not an often visitor to the virtual world, but like to play board games? During LAN party, you can try your hand at games like Wingspan or Powergrid and, of course, win prizes. A wide variety of other boards games will also await you.
    🃏 Love card games and want to test your luck? During LAN party, you will have an opportunity to draw your lucky card and participate in Sports Poker Tournament!
    🧩 There will also be a free zone available for the entire event, so that you don’t get bored of just competing for the prizes, where you can play whatever, you wish together with other like-minded people. You will also have a chance to explore the virtual world – VR zone – or test your dancing skills in everyone’s beloved Just Dance!
    ‼️ IMPORTANT ‼️
    LAN party computer game tournaments require your own equipment – a computer and all necessary peripheral equipment – monitors, computer mice, keyboards, and such, so when planning to participate in any of the tournaments, do not forget to take the necessary equipment! At least 60% of the team players participating in the tournaments must participate live in the event itself.`,
    time: "2024-04-20 09:00 – 2024-04-21 22:00",
    photo: lanparty,
    location: "Didlaukio gatvė 47, LT-08303 Vilnius, Lietuva",
    more: "https://www.facebook.com/events/794569605864859",
    registration: "https://linktr.ee/MIDIvadovai",
  },
  {
    name: "MIDI Šachmatų turnyras | Chess Tournament",
    description: `♟️ Ar gali nuspėti kitą varžovo ėjimą? Ar 64 langeliai tau reiškia daugiau nei tik stalo žaidimo lentą? Ar susimąstei, kad galbūt net paprastas pėstininkas slepia mįslę, kurią išnarplioti gali tu?🔎🔓
👉 MIDI Šachmatų turnyras – tai seniausia MIDI tradicija. Tavęs laukia ne tik geri prisiminimai, bet ir galimybė laimėti įvairius prizus! Nesvarbu, ar esi profesionalas, ar tik moki žaidimo taisykles, tu ir tavo draugai esate laukiami šių metų MIDI Šachmatų turnyre!

  🇬🇧
  
  ♟️ Can you predict your opponent’s next move? Do 64 squares mean more than just a game board to you? Have you ever wondered how even a simple pawn might be hiding a riddle, which you could solve?🔎🔓
👉 MIDI Chess Tournament is the oldest MIDI tradition. Not only do good memories await you, but also a chance to win various prizes! Doesn’t matter if you’re a professional or just someone who knows the rules, you and your friends are welcome to this year’s MIDI Chess Tournament!`,
    time: format(new Date("2024-04-20T10:00:00"), "yyyy-MM-dd HH:mm"),
    photo: Chess,
    location: "Naugarduko gatvė 24, LT-03225 Vilnius, Lietuva",
    more: "https://www.facebook.com/events/398712329573489",
    registration: "https://forms.gle/t4uN7QLcvAzT54bQ6",
  },
  {
    name: "MIDI Įmonių mugė | Career fair",
    description: `🧐 Jau atsidarai n-tąjį darbo skelbimų portalą ir vis dar nerandi tinkamos pozicijos, o gal beskaitydamas reikalavimus nesupranti, ko iš tavęs prašo bei kokios bus tavo būsimos pareigos? Daugiau to daryti nebereikės, nes jau balandžio 22 d. MIDI kviečia į kasmetinę įmonių mugę, kur viename koridoriuje tavęs ir tavo draugų lauks daugiau nei iš 10 įmonių atvykę atstovai, o galbūt tavo būsimi kolegos? Čia galėsi užduoti sau rūpimus klausimus, aplikuoti į skirtingas pozicijas, dalyvauti darbo pokalbiuose ir atrasti savo karjeros kelią!
    ✨ MIDI 2024 Įmonių mugė yra skirta kiekvienam – nuo karjeros pradžios ieškančio matematiko, iki paskutinių kursų Programų sistemų studento. O jei nori išbandyti savo jėgas darbo pokalbiuose tai galėsi padaryti įmonių siūlomuose greituosiuose darbo pokalbiuose.
    Taigi, nesėdėk namuose ir ateik į VU MIF Naugarduko fakultetą susipažinti su savo būsimomis ateities galimybėmis!
    
    🇬🇧

    🧐 Already opening your nth job application portal and still can’t find a suitable position, or maybe when reading the requirements you don’t understand what is being asked of you and what your future job position will be like? You won’t have to do that anymore, because on April 22nd MIDI invites you to the annual career fair, where representatives from more than 10 companies will be waiting for you and your friends. Maybe you’ll even meet your future colleagues! Here you can ask questions, apply for different positions, participate in job interviews, and discover your career path!
    ✨ MIDI 2021 Career fair is open for everyone, from a mathematician with a startup career, to a final year Program Systems student. And if you want to practice your speech for a job interview you can do so in quick job interviews offered by the companies.
    So don’t sit at home and come to VU MIF Naugardukas faculty to find out more about your potential for the future!`,
    time: format(new Date("2024-04-22T10:00:00"), "yyyy-MM-dd HH:mm"),
    photo: Imones,
    location: "Naugarduko gatvė 24, LT-03225 Vilnius, Lietuva",
    more: "https://www.facebook.com/events/1544949116238549",
  },
  {
    name: "MIDI Minecraft Decathlon",
    description: `👾 Savaitės pradžia, laikas kibti į mokslus, tačiau nori bėgti per laukus, statyti su draugais purvo namus, kasti geležį ir smėlį, žaisti su savo augintiniu vilku? Pala... Galbūt netyčiomis praleidai visą savo laisvą laiką žaisdamas Minecraft? Tuomet turime tau gerų žinių – Minecraft Decathlon jau čia!
    ✨ Surink savo komandą, išbandyk savo sugebėjimus, varžykis su kitais dalyviais PvP ir parkour rungtyse bei laimėk įvairių prizų!
    
    🇬🇧

    👾 It’s the beginning of the week, time to start studying, but all you want to do is run across the fields, build dirt houses with your friends, dig iron and sand, play with your pet wolf? Hold on... Perhaps you accidentally spent all your free time playing Minecraft? Then we have good news for you - Minecraft Decathlon is here!
    
    ✨ Gather your team, test your skills, compete with other participants in PvP and parkour matches, and win prizes!`,
    time: format(new Date("2024-04-22T17:00:00"), "yyyy-MM-dd HH:mm"),
    photo: Decathlon,
    location: "Online",
    more: "https://www.facebook.com/events/1501970454037049",
    registration: "https://forms.gle/XW648VBizNSNpGMG9",
  },
  {
    name: "MIDI Asseco Sporto Dienos | Asseco Sports Days",
    description: `🏆 MIDI 2024 Asseco Sporto Dienos jau čia ir kviečia jus į įdomų ir įkvepiantį renginį, skirtą bendram sportiniam susivienijimui bei aktyviam gyvenimo būdui! Šios dienos bus pilnos energijos, draugystės ir sportinio entuziazmo, leidžiančių mums kartu patirti aistrą sportui. Dalyviai turės ne tik puikią progą pasitikrinti savo jėgas prieš kitus universiteto studentus, bet ir laimėti puikių prizų.
    🏀 Praėjus žiemai ir artėjant vasarai vėl artėja jau tradicija tapę MIDI turnyrai! Kviesk savo draugus, šeimos narius ar kolegas susiburti į komandas, užsiregistruoti ir išbandyti savo jėgas 2024 metų MIDI 3x3 TINKLINIO, 3x3 KREPŠINIO bei 6x6 FUTBOLO turnyruose! Tai puiki galimybė išjudinti sustingusius raumenis ir praleisti laiką su artimaisiais bei draugais!
    🤼 Atsibodo įprasti sporto žaidimai? Ar jauti, kad nori patirti kažką naujo ir netradicinio? Jei taip, tai MIDI 2024 NETRADICINIO sporto turnyras kaip tik tau! Šis turnyras susideda iš kelių netradicinių sporto veiklų: futbolo su pripučiamais kostiumais, sumo imtynių bei kliūčių ruožo. Šio turnyro metu išbandysi savo taiklumą, vikrumą bei greitį. Tad suburk 4 asmenų komandą, registruokis ir laimėk!
    Daugiau informacijos jau netrukus.
    
    🇬🇧

    🏆 MIDI 2024 Asseco Sports Days are finally here and are inviting you to an interesting and inspiring event dedicated to the general love of sports and active lifestyle! This event will be full of energy, friendship and enthusiasm for sports, allowing us to experience our passion for sports together. Not only will participants have an opportunity to test their strength against other university students, but also to win great prizes.
    🏀 With winter over and summer finally approaching, MIDI tournaments, which have become a tradition, are coming again! Invite your friends, family, or colleagues to team up, register and try your best at the year 2024 3x3 MIDI VOLLEYBALL, 3x3 BASKETBALL and 6x6 FOOTBALL tournaments! It will be a great opportunity to shake out stiff muscles and spend time with your closest friends and family!
    🤼 Tired of conventional sports games? Do you feel the need to experience something new? If so, the MIDI 2024 NON-TRADITIONAL Sports tournament is just right for you! This tournament will provide you an opportunity to try out several non-traditional sports activities: soccer with inflatable suits, sumo wrestling, and an obstacle course. During this tournament, you’ll be able to test your accuracy, dexterity, and speed. Gather a team of 4 people, register and win!
    More information is coming soon.`,
    time: "2024-04-23 18:00 - 2024-04-24 22:00",
    photo: Sport,
    location: "Coming soon!",
    more: "https://www.facebook.com/events/1103163390806440",
  },
  {
    name: "MIDI Protmūšis | Battle of the Wits",
    description: `🧠 Jau kurį laiką nori išbandyti savo ir draugų protą bei mesti iššūkį kitiems? Jeigu taip, nieko nelaukęs čiupk draugus už parankių, suformuok šauniausią komandą, ir prisijunk prie MIDI 2024 protmūšio, kur tavęs laukia geras laikas, o geriausių komandų laukia ir nuostabūs prizai! Lauksime tavęs balandžio 25 dieną 19h Action! by Apollo!✨
    Daugiau informacijos jau netrukus.`,
    time: "2024-04-25 19:00 - 21:00",
    photo: Protmusis,
    location: "Ozo gatvė 18, Vilnius. Action! by Apollo",
    more: "https://www.facebook.com/events/1083365632962314",
    registration: "https://tickets.paysera.com/lt/event/midi-2024-protmusis-battle-of-wits?fbclid=IwAR0Jwrz3wbC2F3FSztT21lqaYAOxbAjMY9Zk7C4U_ZyHC9Nucvq84di1Puk_aem_AcdnczdcYe_cuHunqv2IEMp7B6VF_2tUppUAkJNjoHLzSbMqCzF_Yqgq-JwNaI9EF70sQTcbAWCsCTvKq9t3YKGg",
  },
  {
    name: "MIDI Orientacinės varžybos | Orienteering competition",
    description: `Ar girdėjai šnabždesį, gal jau spėjai pastebėti ženklus?👀
    🔎MIDI 2024 orientacinės varžybos pagaliau atkeliavo čia!🗺️
    🕵🏼‍♀️Ar esi pasiruošęs pasinerti į paslaptingą Vilniaus vakarą bei kartu su savo komanda įveikti detektyvinę užduotį? Griebk savo draugus, žibintuvėlį, popieriaus lapą, užkandžius bei skaičiuotuvą ir pasileisk į šį nuotykių kupiną vakarą! Geriausios trys komandos bus apdovanotos prizais, tad nedelsk ir išbandyk savo jėgas ir įgūdžius nematomojoje Vilniaus pusėje!🕵🏻‍♂️
    Daugiau informacijos jau netrukus.
    
    🇬🇧

    Have you heard the whispers, maybe you already noticed the signs?👀
    🔎MIDI 2024 Orienteering Competition is finally here!🗺️
    🕵🏼‍♀️Are you ready to immerse yourself in the mysterious evening of Vilnius and solve a mystery with your team? Grab your friends, a flashlight, a piece of paper, some snacks, a calculator and head out for an evening full of adventures! Three best teams will be awarded with prizes, so don‘t delay and test your strength and skills in the dark side of Vilnius!🕵🏻‍♂️
    More information is coming soon.`,
    time: "2024-04-26 18:00",
    photo: Orientacines,
    location: "Centras/Senamiestis",
    more: "https://www.facebook.com/events/335718952392132",
    registration: "https://docs.google.com/forms/d/1RK3NmVeXndw9sPfwyuey4P7lnsxTKmMIJg2oQO5OXFo/edit?fbclid=IwAR3epwK6Lh6emWxrrFjGNz6SzabAJn0GZYCtWg3aniORgqxmrBolhwzg9vI_aem_AcfC1GVmXrvFYucLbqZvtdsr604zglwuxyMYHw-ftEgFyrDla5JJ8dcFMs3FLe11gEouHttnwi-gdzhtHd1BiVux",
  },
  {
    name: "MIDI Uždarymo vakaras | Closing Event",
    description: `🎭Uždarymo vakaras - tai paskutinis MIDI renginys, kviečiantis visus kartu užbaigti daugybę įspūdžių studentams bei jų draugams palikusią savaitę!
    Tai puiki proga ne tik atsitraukti nuo akademinių iššūkių ir darbų, bet ir pasinerti į nepamirštamą šventės sūkurį! 🎶Energinga muzika, profesionalūs DJ ir erdvi šokių aikštelė kvies visus atsipalaiduoti ir išlaisvinti savo vidinį šokėją.💃🏻🕺🏼
    🎤Pasiruoškite ne tik pašokti iki paryčių, bet ir pasimėgauti nepamirštama humoro doze – MIDI finalo vakarą laukia ir staigmenų kupinas stand-up pasirodymas!
    Renginio tema - Kaukių Balius!🎭 Neturi kaukės? Nesijaudink, mes parūpinsim!
    🎉Laukia įsimintinas vakaras, kurio negali praleisti, tad skubėk savo ir draugų kalendoriuose pasižymėti📝 balandžio 27 d., ir susitinkam muzikiniame teatre ,,Legendos Klubas”! (durys atidaromos 19:00)
    Bilietai ir daugiau informacijos jau netrukus.
    
    🇬🇧

    MIDI week – a vibrant kaleidoscope of adventures, excitement, and unforgettable moments. What better way to crown this celebration than with a grand closing party?🎭
    This is a perfect opportunity to not only step away from academic challenges and work but also to immerse yourself in an unforgettable whirlpool of celebration! 🎶Energetic music, professional DJs, and a spacious dance floor will invite everyone to relax and unleash their inner dancer.💃🏻🕺🏼
    🎤Get ready to not only dance until dawn, but also enjoy an unforgettable dose of humor – the MIDI finale will also feature a surprise-filled stand-up performance!
    The theme of the ball is Masquerade!🎭 Don't have a mask? Don't worry, you'll have an opportunity to get one at the event!
    🎉So hurry up and mark📝 April 27th in your and your friends' calendars and let's meet in the "Legendos Klubas", because an unforgettable evening awaits you! (Doors open at 19:00)
    Tickets and more information are coming soon.`,
    time: format(new Date("2024-04-27T20:00:00"), "yyyy-MM-dd HH:mm"),
    photo: ClosingEvent,
    location: "Legendos klubas",
  }
];

function Show(section: number) {
  var eventDescriptions = document.querySelectorAll(".aboutEvent");
  var eventSelectors = document.querySelectorAll(".aboutEventSelector");

  eventSelectors.forEach((selector) => {
    selector.classList.remove("opacity-100");
    selector.classList.add("opacity-50");
  });
  eventDescriptions.forEach((description) => {
    description.classList.add("hidden");
  });

  eventSelectors[section].classList.remove("opacity-50");
  eventSelectors[section].classList.add("opacity-100");
  eventDescriptions[section].classList.remove("hidden");
}

export default function EventsSection() {
  return (
    <>
      <div className="my-4 flex flex-wrap justify-center gap-6 pb-4">
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faGamepad}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-100 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(0)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faChess}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(1)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faIdCardAlt}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(2)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faCube}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(3)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faBasketball}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(4)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faBrain}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(5)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faMapLocationDot}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(6)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faUsers}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(7)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 whitespace-pre-line pb-8">
        {events.map((event) => (
          <div
            key={event.name}
            className={
              "aboutEvent basis-7/6 rounded-lg border-2 border-gray-200 shadow-sm md:basis-5/6" +
              (event.name === "MIDI LAN Party" ? "" : " hidden")
            }
          >
            <div className="rounded-t-lg bg-gray-100 px-4 py-3">
              <h3 className="text-4xl font-semibold text-gray-800">
                {event.name}
              </h3>
              <div className="text-2xl text-gray-800">
                Kada / When: <h4>{event.time}</h4>
              </div>
              <div className="text-2xl text-gray-800">
                Vieta / Where: <h4>{event.location}</h4>
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center px-4 py-3">
              <div className="flex flex-wrap items-center justify-around">
                <div className="lg:basis-1/2 lg:overflow-hidden">
                  <img
                    className="object-scale-down py-3"
                    src={event.photo}
                    alt="aaa"
                  ></img>
                </div>
                <div className="basis-1/2 whitespace-nowrap lg:basis-1/3 2xl:basis-1/5">
                  <a target="_blank" href={event.more} className="">
                    <div className="m-4 rounded-full border-4 border-midiblue_bright px-4 pt-2 pb-4 text-center text-xl font-semibold text-midiblue_bright transition-all hover:border-white hover:text-white md:text-4xl">
                      Daugiau / Read More
                    </div>
                  </a>
                  {event.registration ? (
                    <a target="_blank" href={event.registration}>
                      <div className="m-4 rounded-full border-4 border-midiblue_bright px-4 pt-2 pb-4 text-center text-xl font-semibold text-midiblue_bright transition-all hover:border-white hover:text-white md:text-4xl">
                        Registracija / Register
                      </div>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="basis-3/4">
                <p className="p-4 text-xl text-white lg:pt-8">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
