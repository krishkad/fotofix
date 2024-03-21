// import HomePic from "@/components/Pictures/HomePic";
import HomeBtn from "@/components/layout/Homebtn";
import Image from "next/image";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";


export default async function Home() {


  return (
    <main className="w-full">
      <div className="wrapper">
        <div className="w-full h-[calc(100vh-64px)]">
          <div className="w-full md:w-1/2 h-2/5 flex flex-col gap-5 items-center mx-auto text-center justify-center">
            <span className="text-5xl font-bold ">
              <span className="text-primary">Free AI</span> Image Enhancer Online
            </span>
            {/* <div className="flex itesm-center gap-5">
              <Link href={auth ? `/transformations/1` : "/auth"}>
                <Button>Use For Free</Button>
              </Link>
              <Button variant={'secondary'}>View Plans</Button>
            </div> */}
            <HomeBtn />
          </div>
          <div className="flex h-3/5 w-full">
            <div className="w-full h-full flex justify-center items-start md:items-center">
              <div className="w-full md:w-4/5 md:h-full h-[80%] relative ">
                <Image src={"/s4.svg"} priority={true} fill className="w-max h-max object-cover" alt="" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
