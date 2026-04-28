import type { FC, SVGProps } from "react";

import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon"

import Ae from "@/shared/assets/images/banner/ae.png"
import Ai from "@/shared/assets/images/banner/ai.png"
import F from "@/shared/assets/images/banner/f.png"
import Ps from "@/shared/assets/images/banner/ps.png"

import cn from "classnames"
import s from "./Stack.module.scss"
import { useTranslation } from "react-i18next";

type SvgComponent = FC<SVGProps<SVGSVGElement>>;

const svgModules: Record<string, { default: SvgComponent }> = import.meta.glob(
  "@/shared/assets/images/stack/*.svg",
  { query: '?react', eager: true }
);

const BannerIcons: Record<string, SvgComponent> = Object.entries(svgModules).reduce(
  (acc, [path, module]) => {
    const key = path.split('/').pop()?.replace('.svg', '') || path;
    acc[key] = module.default;
    return acc;
  },
  {} as Record<string, SvgComponent>
);

interface StackProps {
  className?: string
}
const images = [
  { text: "Photoshop", img: Ps },
  { text: "After Effects", img: Ae },
  { text: "Illustrator", img: Ai },
  { text: "Figma", img: F }
]

// const icons: Record<string, { default: string }> = import.meta.glob(
//   "@/shared/assets/images/stack/*.svg",
//   { eager: true }
// );

// const stackIcons = Object.entries(icons).map(([path, module]) => {
//   const fileName = path.split('/').pop()?.replace('.svg', '');
//   return {
//     name: fileName,
//     url: module.default
//   };
// });


export const Stack = (
  { className }: StackProps
) => {
  const { t } = useTranslation()
  return (
    <AppContainer className={cn(s.stack, className)}>
      <AppTitle title={t("Stack")} className={s.title} />
      <div className={s.icons}>
        {Object.entries(BannerIcons).map(([name, Icon]) => (<AppIcon
          key={name}
          Svg={Icon}
          size="xl"
          className={s.icon}
        />
        ))}
      </div>

      <div className={s.images}>
        {images.map((img, i) => (<div key={i} className={s.imageWrapper}>
          <AppTitle TagName="h4" title={img.text} />
          <img className={s.image} src={img.img} />
        </div>))}

      </div>

    </AppContainer>
  )
}