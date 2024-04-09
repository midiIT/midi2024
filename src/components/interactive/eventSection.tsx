import { useState, useEffect, useRef } from "react";
import BlankNote from "../../images/interactive/noteBlank.webp";
import LANNote from "../../images/interactive/noteLan.webp";
import DecathlonNote from "../../images/interactive/noteDecathlon.webp";
import ImoniuMugeNote from "../../images/interactive/noteImoniuMuge.webp";
import OrientacinesNote from "../../images/interactive/noteOrientacines.webp";
import ProtmusisNote from "../../images/interactive/noteProtmusis.webp";
import SachmataiNote from "../../images/interactive/noteSachmatai.webp";
import SportodienosNote from "../../images/interactive/noteSportodienos.webp";
import UzdarymasNote from "../../images/interactive/noteUzdarymas.webp";
import LANBanner from "../../images/interactive/lanparty.webp";
import ClosingBanner from "../../images/interactive/uzdarymas.webp";
import ChessBanner from "../../images/interactive/sachmatai.webp";
import ImoniuBanner from "../../images/interactive/imoniu_muge.webp";
import DecathlonBanner from "../../images/interactive/decathlon.webp";
import ProtmusisBanner from "../../images/interactive/protmusis.webp";
import SportodienosBanner from "../../images/interactive/sporto_dienos.webp";
import OrientacinesBanner from "../../images/interactive/orientacines.webp";
import TeamClipboard from "../../images/interactive/teamClipboard.webp";

export default function EventSection() {
  const [activeNote, setActiveNote] = useState(null);
  const modalContentRef = useRef<any>();
  // Using an array of refs to handle multiple notes dynamically
  const notesRefs = useRef<any>([]);
  notesRefs.current = [];
  const addToRefs = (el: never) => {
    if (el && !notesRefs.current.includes(el)) {
      notesRefs.current.push(el);
    }
  };

  const handleClickOutside = (event: { target: any; }) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      setActiveNote(null); // Close modal
    }
  };

  // Define your notes and their positions here
  const [notes] = useState([
    {
      id: "LAN_note",
      top: "5%",
      left: "10%",
      eventName: "MIDI Lan Party",
      image: LANNote,
      banner: LANBanner,
      text: `👾 Margi pikseliai, klavišų garsas, pelės paspaudimai, žaidimo kauliukai, žetonų barškėjimas - ar esi pasiruošęs patirti visa tai ir daugiau vienoje vietoje?<br>
      <br>
      👉 MIDI kviečia visus video žaidimų, stalo žaidimų, sportinio pokerio entuziastus ir mėgėjus balandžio 20-21 dienomis dalyvauti kasmetiniame MIDI LAN Party ir laimėti įvairių prizų!<br>
      <br>
      🎮 Visus komandinę dvasią jaučiančius žaidėjus kviečiame burti komandas ir išbandyti savo jėgas pagrindiniuose LAN turnyruose - League Of Legends, Valorant ir Counter-Strike 2. Nepamiršk pakviesti ir palaikymo komandos, nes renginio metu bus užtikrintos tribūnos palaikymui!<br>
      <br>
      🎯 Jeigu pagrindiniai LAN turnyrai tavęs nesužavėjo ar pilnai nepasitiki savo įgūdžiais – nenusimink! Tavęs lauks įvairūs kompiuteriniai žaidimai - Sims 4 build-offs, Tetris, Tekken 7, Teamfight Tactics ir kiti. Kaip ir pagrindiniuose turnyruose, čia tavęs taip pat laukia prizai.<br>
      <br>
      🎲 Galbūt nesi virtualaus pasaulio pilietis, bet mėgsti žaisti stalo žaidimus? LAN Party metu galėsi išbandyti savo jėgas žaisdamas tokius žaidimus kaip Wingspan ar Powergrid ir, žinoma, laimėti prizų. Taip pat tavęs lauks ir didelė įvairovė kitų stalo žaidimų.<br>
      <br>
      🃏 Mėgsti kortų žaidimus ir nori išbandyti savo sėkmę? LAN Party metu turėsi galimybę ištraukti savo laimingą kortą ir sudalyvauti sportinio pokerio turnyre!<br>
      <br>
      🧩 O kad nepabostų tik konkuruoti dėl prizų, viso renginio metu tavęs laukia ir laisvoji zona, kur su bendraminčiais galėsi kartu žaisti, ką tik panorėjęs. Taip pat galėsi pajudėti virtualiame pasaulyje - esančiame VR zonoje - ar išbandyti savo šokių sugebėjimus visų pamiltame Just Dance!<br>
      <br>
      ‼️ SVARBU ‼️<br>
      LAN party kompiuterinių žaidimų turnyrams reikalinga sava įranga - kompiuteris ir visa reikalinga periferinė įranga - monitoriai, pelės, klaviatūros ir panašiai, tad planuojant dalyvauti bet kuriame kompiuterinių žaidimų turnyre, nepamiršk pasiimti reikalingos įrangos!<br>
      <br>
      Pačiame renginyje gyvai privalo dalyvauti bent 60% turnyruose dalyvaujančių komandos žaidėjų.<br>
      <br>
      🇬🇧<br>
      <br>
      👾 Colorful pixels, sound of keyboards, mouse clicks, game dice, rattling of poker chips – are you ready to experience all of it and more in one place?<br>
      <br>
      👉 MIDI is inviting all video game, board game, sports poker enthusiasts and enjoyers to participate in the annual MIDI LAN Party on April 20-21 and win various prizes!<br>
      <br>
      🎮 All players with a sense of team spirit are invited to form teams and test their strength in the main LAN tournaments – League Of Legends, Valorant and Counter-Strike 2. Don’t forget to invite the support team as well, as there will be stands provided for the supporters during the event!<br>
      <br>
      🎯 But if the main LAN tournaments didn’t catch your attention or you simply are not confident enough in your skills – don’t be upset! Various other computer games will be waiting for you – Sims 4 build-offs, Tetris, Tekken 7, Teamfight Tactics and more. Just like the main tournaments, there will be prizes waiting for you.<br>
      <br>
      🎲 Perhaps you’re not an often visitor to the virtual world, but like to play board games? During LAN party, you can try your hand at games like Wingspan or Powergrid and, of course, win prizes. A wide variety of other boards games will also await you.<br>
      <br>
      🃏 Love card games and want to test your luck? During LAN party, you will have an opportunity to draw your lucky card and participate in Sports Poker Tournament!<br>
      <br>
      🧩 There will also be a free zone available for the entire event, so that you don’t get bored of just competing for the prizes, where you can play whatever, you wish together with other like-minded people. You will also have a chance to explore the virtual world – VR zone – or test your dancing skills in everyone’s beloved Just Dance!<br>
      <br>
      ‼️ IMPORTANT ‼️<br>
      LAN party computer game tournaments require your own equipment – a computer and all necessary peripheral equipment – monitors, computer mice, keyboards, and such, so when planning to participate in any of the tournaments, do not forget to take the necessary equipment! At least 60% of the team players participating in the tournaments must participate live in the event itself.<br>`,
      more: "https://www.facebook.com/events/794569605864859",
      registration: "https://linktr.ee/MIDIvadovai",
      rotate: "rotate(-10deg)",
      clickable: true,
    },
    {
      id: "Decathlon_note",
      top: "50%",
      left: "5%",
      eventName: "MIDI Minecraft Decathlon",
      image: DecathlonNote,
      banner: DecathlonBanner,
      text: `👾 Savaitės pradžia, laikas kibti į mokslus, tačiau nori bėgti per laukus, statyti su draugais purvo namus, kasti geležį ir smėlį, žaisti su savo augintiniu vilku? Pala... Galbūt netyčiomis praleidai visą savo laisvą laiką žaisdamas Minecraft? Tuomet turime tau gerų žinių – Minecraft Decathlon jau čia! <br> <br>
      ✨ Surink savo komandą, išbandyk savo sugebėjimus, varžykis su kitais dalyviais PvP ir parkour rungtyse bei laimėk įvairių prizų! <br> <br>

      🇬🇧
      <br>
      <br>
      👾 It’s the beginning of the week, time to start studying, but all you want to do is run across the fields, build dirt houses with your friends, dig iron and sand, play with your pet wolf? Hold on... Perhaps you accidentally spent all your free time playing Minecraft? Then we have good news for you - Minecraft Decathlon is here! <br>
      <br>
      ✨ Gather your team, test your skills, compete with other participants in PvP and parkour matches, and win prizes!`,
      more: "https://www.facebook.com/events/1501970454037049",
      registration: "https://forms.gle/XW648VBizNSNpGMG9",
      rotate: "rotate(10deg)",
      clickable: true,
    },
    {
      id: "Imoniu_note",
      top: "40%",
      left: "30%",
      eventName: "MIDI Įmonių mugė | Career fair",
      image: ImoniuMugeNote,
      banner: ImoniuBanner,
      text: `🧐 Jau atsidarai n-tąjį darbo skelbimų portalą ir vis dar nerandi tinkamos pozicijos, o gal beskaitydamas reikalavimus nesupranti, ko iš tavęs prašo bei kokios bus tavo būsimos pareigos? Daugiau to daryti nebereikės, nes jau balandžio 22 d. MIDI kviečia į kasmetinę įmonių mugę, kur viename koridoriuje tavęs ir tavo draugų lauks daugiau nei iš 10 įmonių atvykę atstovai, o galbūt tavo būsimi kolegos? Čia galėsi užduoti sau rūpimus klausimus, aplikuoti į skirtingas pozicijas, dalyvauti darbo pokalbiuose ir atrasti savo karjeros kelią! <br>
      <br>
      ✨ MIDI 2024 Įmonių mugė yra skirta kiekvienam – nuo karjeros pradžios ieškančio matematiko, iki paskutinių kursų Programų sistemų studento. O jei nori išbandyti savo jėgas darbo pokalbiuose tai galėsi padaryti įmonių siūlomuose greituosiuose darbo pokalbiuose. <br>
      <br>
      Taigi, nesėdėk namuose ir ateik į VU MIF Naugarduko fakultetą susipažinti su savo būsimomis ateities galimybėmis! <br>
      <br>
      🇬🇧 <br>
      <br>
      🧐 Already opening your nth job application portal and still can’t find a suitable position, or maybe when reading the requirements you don’t understand what is being asked of you and what your future job position will be like? You won’t have to do that anymore, because on April 22nd MIDI invites you to the annual career fair, where representatives from more than 10 companies will be waiting for you and your friends. Maybe you’ll even meet your future colleagues! Here you can ask questions, apply for different positions, participate in job interviews, and discover your career path! <br>
      <br>
      ✨ MIDI 2021 Career fair is open for everyone, from a mathematician with a startup career, to a final year Program Systems student. And if you want to practice your speech for a job interview you can do so in quick job interviews offered by the companies. <br>
      <br>
      So don’t sit at home and come to VU MIF Naugardukas faculty to find out more about your potential for the future!`,
      more: "https://www.facebook.com/events/1544949116238549",
      rotate: "rotate(20deg)",
      clickable: true,
    },
    {
      id: "Orientacines_note",
      top: "10%",
      left: "80%",
      eventName: "MIDI Orientacinės varžybos | Orienteering competition",
      image: OrientacinesNote,
      banner: OrientacinesBanner,
      text: `Ar girdėjai šnabždesį, gal jau spėjai pastebėti ženklus?👀 <br>
      <br>
      🔎MIDI 2024 orientacinės varžybos pagaliau atkeliavo čia!🗺️ <br>
      <br>
      🕵🏼‍♀️Ar esi pasiruošęs pasinerti į paslaptingą Vilniaus vakarą bei kartu su savo komanda įveikti detektyvinę užduotį? Griebk savo draugus, žibintuvėlį, popieriaus lapą, užkandžius bei skaičiuotuvą ir pasileisk į šį nuotykių kupiną vakarą! Geriausios trys komandos bus apdovanotos prizais, tad nedelsk ir išbandyk savo jėgas ir įgūdžius nematomojoje Vilniaus pusėje!🕵🏻‍♂️ <br>
      <br>
      Daugiau informacijos jau netrukus. <br>
      <br>
      🇬🇧 <br>
      <br>
      Have you heard the whispers, maybe you already noticed the signs?👀 <br>
      <br>
      🔎MIDI 2024 Orienteering Competition is finally here!🗺️ <br>
      <br>
      🕵🏼‍♀️Are you ready to immerse yourself in the mysterious evening of Vilnius and solve a mystery with your team? Grab your friends, a flashlight, a piece of paper, some snacks, a calculator and head out for an evening full of adventures! Three best teams will be awarded with prizes, so don‘t delay and test your strength and skills in the dark side of Vilnius!🕵🏻‍♂️ <br>
      <br>
      More information is coming soon.`,
      more: "https://www.facebook.com/events/335718952392132",
      registration: "https://docs.google.com/forms/d/1RK3NmVeXndw9sPfwyuey4P7lnsxTKmMIJg2oQO5OXFo/edit?fbclid=IwAR3epwK6Lh6emWxrrFjGNz6SzabAJn0GZYCtWg3aniORgqxmrBolhwzg9vI_aem_AcfC1GVmXrvFYucLbqZvtdsr604zglwuxyMYHw-ftEgFyrDla5JJ8dcFMs3FLe11gEouHttnwi-gdzhtHd1BiVux",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    {
      id: "Protmusis_note",
      top: "50%",
      left: "80%",
      eventName: "MIDI Protmūšis | Battle of the Wits",
      image: ProtmusisNote,
      banner: ProtmusisBanner,
      text: `🧠 Jau kurį laiką nori išbandyti savo ir draugų protą bei mesti iššūkį kitiems? Jeigu taip, nieko nelaukęs čiupk draugus už parankių, suformuok šauniausią komandą, ir prisijunk prie MIDI 2024 protmūšio, kur tavęs laukia geras laikas, o geriausių komandų laukia ir nuostabūs prizai! Lauksime tavęs balandžio 25 dieną 19h Action! by Apollo!✨ <br>
      <br>
      Daugiau informacijos jau netrukus.`,
      more: "https://www.facebook.com/events/1083365632962314",
      registration: "https://tickets.paysera.com/lt/event/midi-2024-protmusis-battle-of-wits?fbclid=IwAR0Jwrz3wbC2F3FSztT21lqaYAOxbAjMY9Zk7C4U_ZyHC9Nucvq84di1Puk_aem_AcdnczdcYe_cuHunqv2IEMp7B6VF_2tUppUAkJNjoHLzSbMqCzF_Yqgq-JwNaI9EF70sQTcbAWCsCTvKq9t3YKGg",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    {
      id: "Sachmatai_note",
      top: "70%",
      left: "20%",
      eventName: "MIDI Šachmatų turnyras | Chess Tournament",
      image: SachmataiNote,
      banner: ChessBanner,
      text: `♟️ Ar gali nuspėti kitą varžovo ėjimą? Ar 64 langeliai tau reiškia daugiau nei tik stalo žaidimo lentą? Ar susimąstei, kad galbūt net paprastas pėstininkas slepia mįslę, kurią išnarplioti gali tu?🔎🔓 <br>
      <br>
      👉 MIDI Šachmatų turnyras – tai seniausia MIDI tradicija. Tavęs laukia ne tik geri prisiminimai, bet ir galimybė laimėti įvairius prizus! Nesvarbu, ar esi profesionalas, ar tik moki žaidimo taisykles, tu ir tavo draugai esate laukiami šių metų MIDI Šachmatų turnyre! <br>
      <br>
      🇬🇧 <br>
      <br>
      ♟️ Can you predict your opponent’s next move? Do 64 squares mean more than just a game board to you? Have you ever wondered how even a simple pawn might be hiding a riddle, which you could solve?🔎🔓 <br>
      <br>
      👉 MIDI Chess Tournament is the oldest MIDI tradition. Not only do good memories await you, but also a chance to win various prizes! Doesn’t matter if you’re a professional or just someone who knows the rules, you and your friends are welcome to this year’s MIDI Chess Tournament!`,
      more: "https://www.facebook.com/events/398712329573489",
      registration: "https://forms.gle/t4uN7QLcvAzT54bQ6",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    {
      id: "Sportodienos_note",
      top: "75%",
      left: "60%",
      eventName: "MIDI Asseco Sporto Dienos | Asseco Sports Days",
      image: SportodienosNote,
      banner: SportodienosBanner,
      text: `🏆 MIDI 2024 Asseco Sporto Dienos jau čia ir kviečia jus į įdomų ir įkvepiantį renginį, skirtą bendram sportiniam susivienijimui bei aktyviam gyvenimo būdui! Šios dienos bus pilnos energijos, draugystės ir sportinio entuziazmo, leidžiančių mums kartu patirti aistrą sportui. Dalyviai turės ne tik puikią progą pasitikrinti savo jėgas prieš kitus universiteto studentus, bet ir laimėti puikių prizų. <br>
      <br>
      🏀 Praėjus žiemai ir artėjant vasarai vėl artėja jau tradicija tapę MIDI turnyrai! Kviesk savo draugus, šeimos narius ar kolegas susiburti į komandas, užsiregistruoti ir išbandyti savo jėgas 2024 metų MIDI 3x3 TINKLINIO, 3x3 KREPŠINIO bei 6x6 FUTBOLO turnyruose! Tai puiki galimybė išjudinti sustingusius raumenis ir praleisti laiką su artimaisiais bei draugais! <br>
      <br>
      🤼 Atsibodo įprasti sporto žaidimai? Ar jauti, kad nori patirti kažką naujo ir netradicinio? Jei taip, tai MIDI 2024 NETRADICINIO sporto turnyras kaip tik tau! Šis turnyras susideda iš kelių netradicinių sporto veiklų: futbolo su pripučiamais kostiumais, sumo imtynių bei kliūčių ruožo. Šio turnyro metu išbandysi savo taiklumą, vikrumą bei greitį. Tad suburk 4 asmenų komandą, registruokis ir laimėk! <br>
      <br>
      Daugiau informacijos jau netrukus. <br>
      <br>
      🇬🇧 <br>
      <br>
      🏆 MIDI 2024 Asseco Sports Days are finally here and are inviting you to an interesting and inspiring event dedicated to the general love of sports and active lifestyle! This event will be full of energy, friendship and enthusiasm for sports, allowing us to experience our passion for sports together. Not only will participants have an opportunity to test their strength against other university students, but also to win great prizes. <br>
      <br>
      🏀 With winter over and summer finally approaching, MIDI tournaments, which have become a tradition, are coming again! Invite your friends, family, or colleagues to team up, register and try your best at the year 2024 3x3 MIDI VOLLEYBALL, 3x3 BASKETBALL and 6x6 FOOTBALL tournaments! It will be a great opportunity to shake out stiff muscles and spend time with your closest friends and family! <br>
      <br>
      🤼 Tired of conventional sports games? Do you feel the need to experience something new? If so, the MIDI 2024 NON-TRADITIONAL Sports tournament is just right for you! This tournament will provide you an opportunity to try out several non-traditional sports activities: soccer with inflatable suits, sumo wrestling, and an obstacle course. During this tournament, you’ll be able to test your accuracy, dexterity, and speed. Gather a team of 4 people, register and win! <br>
      <br>
      More information is coming soon.`,
      more: "https://www.facebook.com/events/1103163390806440",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    {
      id: "Uzdarymas_note",
      top: "40%",
      left: "50%",
      eventName: "MIDI Uždarymo vakaras | Closing Event",
      image: UzdarymasNote,
      banner: ClosingBanner,
      text: `🎭Uždarymo vakaras - tai paskutinis MIDI renginys, kviečiantis visus kartu užbaigti daugybę įspūdžių studentams bei jų draugams palikusią savaitę! <br>
      <br>
      Tai puiki proga ne tik atsitraukti nuo akademinių iššūkių ir darbų, bet ir pasinerti į nepamirštamą šventės sūkurį! 🎶Energinga muzika, profesionalūs DJ ir erdvi šokių aikštelė kvies visus atsipalaiduoti ir išlaisvinti savo vidinį šokėją.💃🏻🕺🏼 <br>
      <br>
      🎤Pasiruoškite ne tik pašokti iki paryčių, bet ir pasimėgauti nepamirštama humoro doze – MIDI finalo vakarą laukia ir staigmenų kupinas stand-up pasirodymas! <br>
      <br>
      Renginio tema - Kaukių Balius!🎭 Neturi kaukės? Nesijaudink, mes parūpinsim!
      🎉Laukia įsimintinas vakaras, kurio negali praleisti, tad skubėk savo ir draugų kalendoriuose pasižymėti📝 balandžio 27 d., ir susitinkam muzikiniame teatre ,,Legendos Klubas”! (durys atidaromos 19:00) <br>
      <br>
      Bilietai ir daugiau informacijos jau netrukus. <br>
      <br>
      🇬🇧 <br>
      <br>
      MIDI week – a vibrant kaleidoscope of adventures, excitement, and unforgettable moments. What better way to crown this celebration than with a grand closing party?🎭
      This is a perfect opportunity to not only step away from academic challenges and work but also to immerse yourself in an unforgettable whirlpool of celebration! 🎶Energetic music, professional DJs, and a spacious dance floor will invite everyone to relax and unleash their inner dancer.💃🏻🕺🏼 <br>
      <br>
      🎤Get ready to not only dance until dawn, but also enjoy an unforgettable dose of humor – the MIDI finale will also feature a surprise-filled stand-up performance! <br>
      <br>
      The theme of the ball is Masquerade!🎭 Don't have a mask? Don't worry, you'll have an opportunity to get one at the event! <br>
      <br>
      🎉So hurry up and mark📝 April 27th in your and your friends' calendars and let's meet in the "Legendos Klubas", because an unforgettable evening awaits you! (Doors open at 19:00)
      Tickets and more information are coming soon.`,
      more: "https://www.facebook.com/events/1498800404387583",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    // {
    //   id: "catNote",
    //   top: "70%",
    //   left: "60%",
    //   image: CatNote,
    //   clickable: false,
    // }
  ]);

  // Define connections between notes by their IDs
  const [connections] = useState([
    { startId: "LAN_note", endId: "Decathlon_note" },
    { startId: "Decathlon_note", endId: "Imoniu_note" },
    { startId: "Imoniu_note", endId: "Orientacines_note" },
    { startId: "Orientacines_note", endId: "Protmusis_note" },
    { startId: "Protmusis_note", endId: "Sachmatai_note" },
    { startId: "Sachmatai_note", endId: "Sportodienos_note" },
    { startId: "Sportodienos_note", endId: "Uzdarymas_note" },
    { startId: "Orientacines_note", endId: "LAN_note" },
    { startId: "Sachmatai_note", endId: "Decathlon_note" },
  ]);

  const [paths, setPaths] = useState([]);

  // const toggleEvent = () => setShowEvent(!showEvent);

  const toggleNote = (noteId: any) => {
    const note = notes.find((note) => note.id === noteId);
    if (note && note.clickable) {
      // Check if note is clickable
      setActiveNote(activeNote === noteId ? null : noteId);
    }
  };

  const calculatePath = (startNote: any, endNote: any) => {
    const startX = startNote.left + startNote.width / 2 + window.scrollX;
    const startY = startNote.top + startNote.height / 2 + window.scrollY;
    const endX = endNote.left + endNote.width / 2 + window.scrollX;
    const endY = endNote.top + endNote.height / 2 + window.scrollY;

    // Control points
    const cp1X = (startX + endX) / 2;
    const cp1Y = Math.max(startY, endY) + 30;
    const cp2X = cp1X;
    const cp2Y = cp1Y;

    return `M ${startX},${startY} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${endY}`;
  };

  const updatePaths = () => {
    const newPaths = connections
      .map((conn) => {
        const startIdx = notes.findIndex((note) => note.id === conn.startId);
        const endIdx = notes.findIndex((note) => note.id === conn.endId);
        if (
          startIdx !== -1 &&
          endIdx !== -1 &&
          notesRefs.current[startIdx] &&
          notesRefs.current[endIdx]
        ) {
          const startNote = notesRefs.current[startIdx].getBoundingClientRect();
          const endNote = notesRefs.current[endIdx].getBoundingClientRect();
          return calculatePath(startNote, endNote);
        }
        return null;
      })
      .filter((path) => path);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setPaths(newPaths);
  };

  useEffect(() => {
    window.addEventListener("resize", updatePaths);
    updatePaths(); // Initial calculation and on resize

    return () => {
      window.removeEventListener("resize", updatePaths);
    };
  }, [connections, notes.length]);

  useEffect(() => {
    const handleLoadAndResize = () => {
      updatePaths();
    };

    // Attach the event listener for the load event
    window.addEventListener("load", handleLoadAndResize);
    // Attach the event listener for the resize event
    window.addEventListener("resize", handleLoadAndResize);

    setTimeout(updatePaths, 1000);

    return () => {
      window.removeEventListener("load", handleLoadAndResize);
      window.removeEventListener("resize", handleLoadAndResize);
    };
  }, []);

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {notes.map((note, index) => (
        <div
          key={note.id}
          className={`absolute z-10 w-[12vw] h-[12vh] ${
            note.clickable ? "cursor-pointer" : ""
          }`}
          style={{
            top: note.top,
            left: note.left,
            transform: note.rotate,
          }}
          onClick={() => toggleNote(note.id)}
        >
          <img
            ref={addToRefs}
            src={note.image}
            alt={`Note ${index + 1}`}
            className="transition duration-300 ease-in-out"
          />
        </div>
      ))}

      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            stroke="rgba(195, 6, 6, 1)"
            strokeWidth="4"
            fill="none"
          />
        ))}
      </svg>
      {activeNote && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto z-20">
          <div
            className="flex flex-row items-center justify-center mx-auto"
            style={{ gap: "2vw", maxWidth: "90vw" }} // Controls the maximum width of the container
            ref={modalContentRef}
          >
            {/* Note container with adjusted smaller dimensions */}
            <div
              className="relative transform -rotate-2 w-[25vw] h-full" // Slightly reduced dimensions
            >
              <img
                src={BlankNote}
                alt="Note"
                className="w-full h-full object-cover" // Ensures the note covers the specified dimensions
              />
              {/* Overlay content for the note */}
              <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 p-4 w-[100%]">
                <img
                  src={notes.find((note) => note.id === activeNote)?.banner}
                  alt="Event Banner"
                  className="object-cover h-[45%]" // Adjust the size to maintain proportionality
                />
                {notes.find((note) => note.id === activeNote)?.more && (
                  <a
                    href={notes.find((note) => note.id === activeNote)?.more}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="py-1 px-3 text-xs bg-blue-500 text-white rounded-full">
                      Daugiau / Read More
                    </button>
                  </a>
                )}

                {notes.find((note) => note.id === activeNote)?.registration && (
                  <a
                    href={
                      notes.find((note) => note.id === activeNote)?.registration
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="py-1 px-3 text-xs bg-blue-500 text-white rounded-full">
                      Registracija / Register
                    </button>
                  </a>
                )}
              </div>
            </div>
            <div
              className="flex flex-shrink-0 transform rotate-2 w-[35vw] h-full" // Keeping the clipboard slightly smaller
            >
              <img
                src={TeamClipboard}
                alt="Clipboard"
                className="object-cover h-full"
              />
              {/* Text overlay for the clipboard */}
              <div className="absolute inset-0 p-0 flex justify-center items-start">
                <div className="absolute top-[10%] px-12 pb-10 overflow-auto h-[85%] no-scrollbar">
                  <p
                    className="sacramento-regular text-black text-lg h-[100%]"
                    dangerouslySetInnerHTML={{
                      __html:
                        notes.find((note) => note.id === activeNote)?.text ??
                        "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
