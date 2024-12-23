import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";

const StationUI = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          <div className="absolute h-[35%] sm:h-[40%] w-fit aspect-[169/83] xs:left-[2%] shadow-xl">
            <Image
              src={"/projects/station-ui/assets.png"}
              alt={"Station UI assets example"}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "8px"
              }}
            />
          </div>
          <div className="absolute h-[8%] max-h-10 w-fit aspect-[115/32] right-0 xs:right-[5%] top-[15%] xs:top-[45%] shadow-xl">
            <Image
              src={"/projects/station-ui/checkbox.png"}
              alt={"Station UI assets example"}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
          <div className="absolute h-[18%] max-h-20 w-fit aspect-[115/32] rounded-xl overflow-hidden bottom-[2%] xs:bottom-[12%] right-[2%] opacity-80 shadow-xl">
            <Image
              src={"/projects/station-ui/color.png"}
              alt={"Station UI assets example"}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
          <div className="absolute h-[10%] xs:h-[16%] max-h-20 w-fit aspect-[343/60] overflow-hidden left-0 xs:left-[10%] top-[40%] xs:top-[45%] shadow-xl">
            <Image
              src={"/projects/station-ui/input.png"}
              alt={"Station UI assets example"}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
          <div className="absolute sm:h-[30%] h-[20%] max-h-20 w-fit aspect-[332/105] overflow-hidden left-1 bottom-[25%] xs:bottom-[5%] shadow-xl">
            <Image
              src={"/projects/station-ui/status-box.png"}
              alt={"Station UI assets example"}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
          <div className="absolute sm:h-[30%] xs:h-[20%] h-[15%] max-h-20 w-fit aspect-[339/119] overflow-hidden right-0 top-[40%] xs:top-[8%] shadow-xl">
            <Image
              src={"/projects/station-ui/swap-from.png"}
              alt={"Station UI assets example"}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "6px",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          {/* <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
            <span>Project at</span>
            <span className="flex gap-1">
              <Image
                src="/companies/workana.jpeg"
                alt="TFL logo"
                height={12}
                width={16}
              />
              Terraform Labs
            </span>
          </h4> */}
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Station UI - Component Library
            </h1>
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Design System
            </Badge>
            <Badge variant="default" className="text-xs">
              100+ Components
            </Badge>
            <Badge variant="default" className="text-xs">
              Storybook
            </Badge>
            <Badge variant="default" className="text-xs">
              Typescript
            </Badge>
            <Badge variant="default" className="text-xs">
              SCSS
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default StationUI
