import Avatar from "../Avatar";
import Augustina from "../../public/media/augustina.webp";
import Darius from "../../public/media/darius.webp";
import Gytis from "../../public/media/gytis.webp";
import Domas from "../../public/media/domas.webp";
import Rokas from "../../public/media/rokas.webp";
import Augustas from "../../public/media/augustas.webp";
import Olen from "../../public/media/olen.webp";
import Titas from "../../public/media/titas.png";
import Vaiva from "../../public/media/vaiva.webp";
import MantasG from "../../public/media/mantasG.webp";
import Nojus from "../../public/media/nojus.webp";
import Meja from "../../public/media/meja.webp";
import Ruta from "../../public/media/ruta.webp";
import Saule from "../../public/media/saule.webp";
import ViktorijaR from "../../public/media/viktorijaR.webp";
import ViktorijaZ from "../../public/media/viktorijaZ.webp";
import Martynas from "../../public/media/martynas.webp";
import Laura from "../../public/media/laura.webp";
import Simonas from "../../public/media/simonas.webp";
import Mindaugas from "../../public/media/mindaugas.webp";
import MantasK from "../../public/media/mantasK.webp";
import Greta from "../../public/media/greta.webp";
import Ugne from "../../public/media/ugne.webp";
import Kasparas from "../../public/media/kasparas.webp";
import Gintare from "../../public/media/gintare.webp";
import Aiste from "../../public/media/aiste.webp";
import Ainius from "../../public/media/ainius.webp";
import Edvinas from "../../public/media/edvinas.webp";
import Ricardas from "../../public/media/ricardas.webp";
import Gustas from "../../public/media/gustas.jpg";
import Paulina from "../../public/media/paulina.jpg";
import Monika from "../../public/media/monika.jpg";
import Nikita from "../../public/media/nikita.jpg";
import GintareA from "../../public/media/gintare.png";


export default function OrganizersSection() {
  return (
    <div className="mb-4">
      <p className="my-8 text-center text-6xl">MIDI Vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Augustina Petraitytė"
          title="MIDI vadovai"
          imgsrc={Augustina}
          phone="+370 61 399 808"
          email="vadovas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Darius Skergelza"
          title="Žmogiškųjų išteklių vadovas"
          imgsrc={Darius}
          phone="+370 60 503 379"
          email="hr@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gytis Mockevičius"
          title="Minecraft decathlon'o vadovas"
          imgsrc={Gytis}
          phone="+370 62 423 266"
          email="minecraft@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Domas Bruišys"
          title="LAN Party vadovas"
          imgsrc={Domas}
          phone="+370 60 313 085"
          email="lan@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rokas Baltrušaitis"
          title="Marketingo vadovas"
          imgsrc={Rokas}
          phone="+370 67 543 514"
          email="marketingas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Augustas Švetkauskas"
          title="Organizacinės srities vadovas"
          imgsrc={Augustas}
          phone="+370 62 213 302"
          email="org@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Olen Račkauskas"
          title="Informacinių technologijų vadovas"
          imgsrc={Olen}
          phone="+370 64 622 318"
          email="it@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Titas Masys"
          title="Roko operos vadovas"
          imgsrc={Titas}
          phone="+370 69 535 871"
          email="ro.vadovas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Vaiva Janavičiūtė"
          title="Organizacinės srities vadovė"
          imgsrc={Vaiva}
          phone="+370 65 653 406"
          email="org@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mantas Globys"
          title="Organizacinės srities vadovas"
          imgsrc={MantasG}
          phone="+370 69 368 981"
          email="org@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Nojus Jokūbaitis"
          title="Kūrybinės grupės vadovas"
          imgsrc={Nojus}
          phone="+370 61 788 075"
          email="kurybine@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mėja Plytnikaitė"
          title="Administratorė"
          imgsrc={Meja}
          phone="+370 67 978 534"
          email="admin@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rūta Skergelzaitė"
          title="Komunikacijos vadovė"
          imgsrc={Ruta}
          phone="+370 63 818 273"
          email="org@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Saule Gylyte"
          title="Barterinių remėjų vadovė"
          imgsrc={Saule}
          phone="+370 60 940 829"
          email="reklama@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI Renginių vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Laura Ukrinaitė"
          title="Sportinio pokerio vadovė"
          imgsrc={Laura}
          phone="+370 64 501 020"
          email="pokeris@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Aistė Jurjonaitė"
          title="Protmūšio vadovė"
          imgsrc={Aiste}
          phone="+370 64 072 522"
          email="protmusis@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Kasparas Šumskis"
          title="Sporto dienų vadovas"
          imgsrc={Kasparas}
          phone="+370 68 923 669"
          email="sportas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gintarė Antulytė"
          title="Sporto dienų vadovė"
          imgsrc={Gintare}
          phone="+370 66 223 500"
          email="sportodiena@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Ainius Gecas"
          title="Šachmatų turnyro vadovas"
          imgsrc={Ainius}
          phone="+370 61 838 654"
          email="sachmatai@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Ugnė Vaičiūnaitė"
          title="Uždarymo vakaro vadovė"
          imgsrc={Ugne}
          phone="+370 68 917 616"
          email="uzdarymas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rokas Baltrušaitis"
          title="Įmonių mugės vadovas"
          imgsrc={Rokas}
          phone="+370 67 543 514"
          email="marketingas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Edvinas Burba"
          title="Orientacinių varžybų vadovas"
          imgsrc={Edvinas}
          phone="+370 68 696 553"
          email="orientacines@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI Komunikacija</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Martynas Mažuolis"
          title="Video vadovas"
          imgsrc={Martynas}
          phone="+370 64 479 996"
          email="video@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Viktorija Ramonaitė"
          title="Dizaino srities vadovė"
          imgsrc={ViktorijaR}
          phone="+370 62 081 727"
          email="dizainas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Viktorija Žemaitytė"
          title="Press vadovė"
          imgsrc={ViktorijaZ}
          phone="+370 68 307 008"
          email="press@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Greta Korsakaitė"
          title="Kūrybinių reikalų vadovė"
          imgsrc={Greta}
          phone="+370 63 096 076"
          email="kurybine@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI LAN Party vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Simonas Sušickis"
          title="Stream vadovas"
          imgsrc={Simonas}
          phone="+370 61 679 110"
          email="stream@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mindaugas Tolušis"
          title="Discord vadovas"
          imgsrc={Mindaugas}
          phone="+370 62 500 503"
          email="discord@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mantas Kandrotas"
          title="Offline veiklų vadovas"
          imgsrc={MantasK}
          phone="+370 61 206 610"
          email="offline@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI Mentoriai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Ričardas Čubukinas"
          title="LAN mentorius"
          imgsrc={Ricardas}
          phone=""
          email=""
          />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gustas Štaševskis"
          title="IT mentorius"
          imgsrc={Gustas}
          phone=""
          email=""
          />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Nikita Gladčenko"
          title="Organizatorių mentorius"
          imgsrc={Nikita}
          phone=""
          email=""
          />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gintarė Aliukonytė"
          title="Komunikacijos mentorė"
          imgsrc={GintareA}
          phone=""
          email=""
          />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Paulina Bilinskaitė"
          title="HR ir vadovų mentorė"
          imgsrc={Paulina}
          phone=""
          email=""
          />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Monika Barauskaitė"
          title="HR ir komunikacijos mentorė"
          imgsrc={Monika}
          phone=""
          email=""
          />
      </div>
    </div>
  );
}
