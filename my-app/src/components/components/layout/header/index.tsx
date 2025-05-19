import * as Nvg from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BottomArrowIcon } from "./icons";

export function Header() {
  return (
    <div className="grid grid-cols-12 justify-around items-center h-20 bg-primary ">
      <div className="col-span-12 min-[850px]:col-span-3 min-[850px]:col-start-2 col-start-0 xs:col-span-12  justify-center items-center text-center">
        <div>ALPER SONAT</div>
        <div>Kişisel Yaşam Koçu</div>
      </div>
      <div className="col-span-8 hidden min-[850px]:flex flex justify-center items-center  ">
        {" "}
        <Nvg.NavigationMenu>
          <Nvg.NavigationMenuList>
            <Nvg.NavigationMenuLink>Anasayfa</Nvg.NavigationMenuLink>
          </Nvg.NavigationMenuList>

          <HoverCard openDelay={0} closeDelay={100}>
            <HoverCardTrigger
              icon={<BottomArrowIcon />}
              className="flex justify-center text-[14px] w-[120px] cursor-pointer"
            >
              Kurumsal
            </HoverCardTrigger>
            <HoverCardContent className="max-w-[140px]">
              <Nvg.NavigationMenuList className="divide-y divide-gray-300">
                <Nvg.NavigationMenuLink className="w-full">
                  Hakkımızda
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink className="w-full">
                  Vizyonumuz
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink className="w-full">
                  Misyonumuz
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink className="w-full">
                  Meslek Alanlarımız
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink className="w-full">
                  Marka-Patent Belgesi
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink className="w-full">
                  Eğitim Sertifikası
                </Nvg.NavigationMenuLink>
              </Nvg.NavigationMenuList>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger
              icon={<BottomArrowIcon />}
              className="flex justify-center text-[14px]  cursor-pointer"
            >
              Çalışma Alanları
            </HoverCardTrigger>
            <HoverCardContent className="max-w-[300px] ">
              <Nvg.NavigationMenuList className="divide-y divide-gray-300">
                <Nvg.NavigationMenuLink>
                  Özel Öğrenme Güçlüğü Destek Eğitimi Programı
                </Nvg.NavigationMenuLink>

                <Nvg.NavigationMenuLink className="w-full">
                  Ergoterapi
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink>
                  Dil ve Konuşma Bozuklukları{" "}
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink>
                  0-6 Yaş Gelişimi Destek Eğitimi Programı
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink>
                  Dikkat Atölyesi ve Rehberlik Hizmetleri{" "}
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink className="w-full">
                  Otizm{" "}
                </Nvg.NavigationMenuLink>
                <Nvg.NavigationMenuLink>
                  Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB){" "}
                </Nvg.NavigationMenuLink>
              </Nvg.NavigationMenuList>
            </HoverCardContent>
          </HoverCard>

          <Nvg.NavigationMenuLink>Testler</Nvg.NavigationMenuLink>
          <Nvg.NavigationMenuLink>Galeri</Nvg.NavigationMenuLink>
          <Nvg.NavigationMenuLink>İletişim</Nvg.NavigationMenuLink>
        </Nvg.NavigationMenu>
      </div>
    </div>
  );
}
