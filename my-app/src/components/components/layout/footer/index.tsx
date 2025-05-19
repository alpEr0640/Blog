import { InstagramIcon, TwitterIcon, YoutubeIcon } from "./icons";
import { MapSection } from "./map";

export function Footer() {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 bg-primary min-h-[500px] px-10 pt-20 pb-10">
      <div className="relative pl-0  flex flex-col md:pl-10 lg:pl-20">
        <div className="self-start mb-3 w-[30px] h-[2px] bg-white"></div>
        <header className="font-bold text-3xl mb-4">İletişim</header>
        <div className="align-justify mb-10">
          Aşıkpaşa Caddesi Ağaçkakan Sokak 2/10 Keçiören Ankara
        </div>
        <div>Tel: (+90) 530 365 9360</div>
        <div className="mb-10">faks: (+90) 312 123 45 67</div>
        <div className="mb-25">alper.sonat@sirket.com</div>
        <div className="flex flex-row gap-4 mt-10 items-center">
          <a href="https://twitter.com/">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com">
            <YoutubeIcon />
          </a>
        </div>
      </div>
      <div>
        <div className="self-start mb-3 w-[30px] h-[2px] bg-white"></div>
        <header className="font-bold text-3xl mb-4">Konum</header>
        <MapSection />
      </div>
      <div>
        {" "}
        {/*      <div className="self-start mb-3 w-[30px] h-[2px] bg-white"></div>
        <header className="font-bold text-3xl mb-4">Bilgi</header>{" "} */}
        <ul className="flex flex-col pt-36 gap-2">
          <li>
            <a href="#">Çerez Politikası</a>
          </li>
          <li>
            <a href="#"> Şartlar ve Koşullar</a>
          </li>
          <li>
            <a href="#">İade Politikası</a>
          </li>
          <li>
            <a href="#"> Gönderim Politikası</a>
          </li>
          <li>
            <a href="#"> Erişilebilirlik Beyanı</a>
          </li>
        </ul>
        <div className="mt-20">© 2035, Lorem Özel Eğitim Merkezi.</div>
        <div> Lorem altyapısı ve güvencesiyle</div>
      </div>
    </div>
  );
}
