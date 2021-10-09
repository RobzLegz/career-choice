import Head from 'next/head'
import Navigation from "../src/components/navigation/Navigation";
import Footer from "../src/components/footer/Footer";
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-light-darker">
      <Head>
        <title>Karjera man | Home</title>
      </Head>

      <Navigation />

      <div className="w-full flex items-center justify-center flex-col py-10 px-4 md:px-0">
        <h1>Karjera man</h1>
        <h2>Atrodi sev piemērotākās profesijas un karjeras iespējas</h2>
      </div>

      <div className="w-full mt-5 md:mt-10 flex items-center justify-center flex-col-reverse md:flex-row px-4 md:px-0">
        <img 
          className="mt-5 md:mt-0 w-80"
          src="/svg/searching.svg" 
          alt="girl searching for something with a telescope" 
        />
        <div className="w-80 md:ml-10 bg-white p-5 rounded-md flex md:inline flex-col items-center">
          <h3>Kas ir karjera?</h3>
          <p>Karjera ir Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, debitis tenetur unde omnis voluptatem tempore, blanditiis, quod illum rem tempora eos eligendi dicta nesciunt in fugiat dolorum provident placeat temporibus.</p>
        </div>
      </div>

      <div className="w-full mt-10 md:mt-40 flex items-center justify-center flex-col md:flex-row px-4 md:px-0">
        <div className="w-80 md:mr-10 bg-white p-5 rounded-md flex md:inline flex-col items-center">
          <h3>Filtrācija</h3>
          <p>Mēs Jums uzdosim pāris jautājumus saistībā ar karjeru, un pēc atbilžu rezultātiem ar filtrācijas algoritma palīdzību atradīsim jums vispiemērotākās profesijas.</p>
          <button className="mt-5" onClick={() => router.push("/find")}>Veikt aptauju</button>
        </div>
        <img 
          className="mt-5 md:mt-0 w-80"
          src="/svg/filter.svg" 
          alt="options floating above some users, who are using filtering function" 
        />
      </div>

      <div className="mt-10 md:mt-40 w-full flex items-center justify-center px-4 md:px-0">
        <div className="bg-white p-5 rounded-md flex items-center justify-center flex-col">
          <h3 className="text-center">Veiciet aptauju, lai atrastu sev piemērotāko profesiju</h3>
          <img 
            src="/svg/survey.svg" 
            alt="a boy taking a survey" 
            className="w-80 my-5"
          />
          <button onClick={() => router.push("/find")}>Aptauja</button>
        </div>
      </div>

      <div className="w-full mt-10 md:mt-40 flex items-center justify-center flex-col-reverse md:flex-row px-4 md:px-0">
        <img 
          onClick={() => router.push("/login")}
          className="mt-5 md:mt-0 w-80"
          src="/svg/security.svg" 
          alt="security protecting users data" 
        />
        <div className="w-80 md:mr-10 bg-white p-5 rounded-md flex md:inline flex-col items-center">
          <h3>Drošība</h3>
          <p>Jūsu dati netiks saglabāti, vai nodoti reklāmdevējiem, mūsu lapas mērķis ir izglītot bērnus un jauniešus par darba iespējām, kā arī piedāvāt atbilstošākās profesijas nāktonei.</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
