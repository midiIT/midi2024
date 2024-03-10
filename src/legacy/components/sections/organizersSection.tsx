import Avatar from "../Avatar";
import Gabija from "../../public/media/gabija.webp";
import Augustina from "../../public/media/augustina.webp";
import Ricardas from "../../public/media/ricardas.webp";
import Meta from "../../public/media/meta.webp";
import Gytis from "../../public/media/gytis.webp";
import Darius from "../../public/media/darius.webp";
import Gustas from "../../public/media/gustas.webp";
import Rasa from "../../public/media/rasa.webp";
import Liudas from "../../public/media/liudas.webp";
import Austeja from "../../public/media/austeja.webp";
import Mantas from "../../public/media/mantas.webp";
import Kamile from "../../public/media/kamile.webp";
import Vygintas from "../../public/media/vygintas.webp";
import Danielius from "../../public/media/danielius.webp";
import GabrieleS from "../../public/media/gabrieleS.webp";
import GabrieleD from "../../public/media/gabrieleD.webp";
import Martynas from "../../public/media/martynas.webp";
import Agota from "../../public/media/agota.webp";
import Rimantas from "../../public/media/rimantas.webp";
import Redas from "../../public/media/redas.webp";
import Kristupas from "../../public/media/kristupas.webp";
import Domas from "../../public/media/domas.webp";
import Vytenis from "../../public/media/vytenis.webp";

export default function OrganizersSection() {
  return (
    <div className="mb-4">
      <p className="my-8 text-center text-6xl">MIDI Vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Augustina Petraitytė"
          title="MIDI vadovai"
          imgsrc={Gabija}
          phone="+370 61 399 808"
          email="vadovas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Darius Skergelza"
          title="Žmogiškųjų išteklių vadovas"
          imgsrc={Augustina}
          phone="+370 60 503 379"
          email="hr@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gytis Mockevičius"
          title="Minecraft vadovas"
          imgsrc={Ricardas}
          phone="+370 62 423 266"
          email="minecraft@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Domas Bruišys"
          title="LAN Party vadovas"
          imgsrc={Meta}
          phone="+370 60 313 085"
          email="lan@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rokas Baltrušaitis"
          title="Marketingo vadovas"
          imgsrc={Gytis}
          phone="+370 67 543 514"
          email="marketingas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Augustas Švetkauskas"
          title="Organizacinės srities vadovas"
          imgsrc={Darius}
          phone="+370 62 213 302"
          email="org@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Olen Račkauskas"
          title="Informacinių technologijų vadovas"
          imgsrc={Gustas}
          phone="+370 64 622 318"
          email="it@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Titas Masys"
          title="Roko Operos vadovas"
          imgsrc={Rasa}
          phone="+370 69 535 871"
          email="ro.vadovas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Vaiva Janavičiūtė"
          title="Organizacinės srities vadovė"
          imgsrc={Liudas}
          phone="+370 65 653 406"
          email="org@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mantas Globys"
          title="Organizacinės srities vadovas"
          imgsrc={Austeja}
          phone="+370 69 368 981"
          email="org@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Nojus Jokūbaitis"
          title="Kūrybinės grupės vadovas"
          imgsrc={Austeja}
          phone="+370 61 788 075"
          email="kurybine@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mėja Plytnikaitė"
          title="Administratorė"
          imgsrc={Austeja}
          phone="+370 67 978 534"
          email="admin@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rūta Skergelzaitė"
          title="Komunikacijos vadovė"
          imgsrc={Austeja}
          phone="+370 63 818 273"
          email="org@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Saule Gylyte"
          title="Barterinių remėjų vadovė"
          imgsrc={Austeja}
          phone="+370 60 940 829"
          email="reklama@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Viktorija Ramonaitė"
          title="Dizaino srities vadovas"
          imgsrc={Mantas}
          phone="+370 62 081 727"
          email="dizainas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Viktorija Žemaitytė"
          title="Press"
          imgsrc={Agota}
          phone="+370 68 307 008"
          email="press@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Martynas Mažuolis"
          title="Video vadovas"
          imgsrc={Rimantas}
          phone="+370 64 479 996"
          email="video@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Laura Ukrinaitė"
          title="Sportinio pokerio vadovė"
          imgsrc={Mantas}
          phone="+370 64 501 020"
          email="pokeris@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Simonas Sušickis"
          title="Stream vadovas"
          imgsrc={Agota}
          phone="+370 61 679 110"
          email="stream@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mindaugas Tolušis"
          title="Discord vadovas"
          imgsrc={Rimantas}
          phone="+370 62 500 503"
          email="discord@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mantas Kandrotas"
          title="Offline vadovas"
          imgsrc={Rimantas}
          phone="+370 61 206 610"
          email="offline@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Greta Korsakaitė"
          title="Kūrybiniai reikalai"
          imgsrc={Rimantas}
          phone="+370 63 096 076"
          email="NaN"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Ugnė Vaičiūnaitė"
          title="Uždarymo vakaro vadovė"
          imgsrc={Rimantas}
          phone="+370 68 917 616"
          email="uzdarymas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Kasparas Šumskis"
          title="Krepšinio ir futbolo vadovas"
          imgsrc={Rimantas}
          phone="+370 68 923 669"
          email="sportas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gintarė Antulytė"
          title="Tinklinio ir netradicinio sporto vadovė"
          imgsrc={Rimantas}
          phone="+370 66 223 500"
          email="sportodiena@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Aistė Jurjonaitė"
          title="Protmūšio vadovė"
          imgsrc={Rimantas}
          phone="+370 64 072 522"
          email="protmusis@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Ainius Gecas"
          title="Šachmatų turnyro vadovas"
          imgsrc={Rimantas}
          phone="+370 61 838 654"
          email="sachmatai@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Edvinas Burba"
          title="Orientacinių varžybų vadovas"
          imgsrc={Rimantas}
          phone="+370 68 696 553"
          email="orientacines@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI Renginių vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Kamilė Simokaitytė"
          title="Protmūšio vadovė"
          imgsrc={Kamile}
          phone="+370 67 766 544"
          email="protmusis@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Vygintas Bartusevičius"
          title="Sporto dienų vadovas"
          imgsrc={Vygintas}
          phone="+370 67 086 735"
          email="sportodiena@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Danielius Venskūnas"
          title="Šachmatų turnyro vadovas"
          imgsrc={Danielius}
          phone="+370 65 221 142"
          email="sachmatai@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gabrielė Skirmantaitė"
          title="Uždarymo vakaro vadovė"
          imgsrc={GabrieleS}
          phone="+370 62 721 026"
          email="uzdarymas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gabrielė Drungilaitė"
          title="Orientacinių varžybų vadovė"
          imgsrc={GabrieleD}
          phone="+370 67 717 676"
          email="orientacines@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rasa Škiudaitė"
          title="Įmonių mugės vadovė"
          imgsrc={Rasa}
          phone="+370 67 877 453"
          email="marketingas@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI Komunikacija</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Redas Serafimavičius"
          title="Foto vadovas"
          imgsrc={Redas}
          phone="+370 62 439 608"
          email="foto@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Kristupas Sėjūnas"
          title="Ryšių su visuomene vadovas"
          imgsrc={Kristupas}
          phone="+370 62 743 213"
          email="pr@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI LAN Party vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Domas Bruišys"
          title="Discord vadovas"
          imgsrc={Domas}
          phone="+370 60 313 085"
          email="discord@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Vytenis Narmontas"
          title="Stream vadovas"
          imgsrc={Vytenis}
          phone="+370 68 252 818"
          email="stream@midi.lt"
          placeholder={"blur"}
        />
      </div>
    </div>
  );
}
