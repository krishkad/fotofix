import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import { Menu } from "react-feather"
import {
    Comfortaa
} from "next/font/google";
import { cn } from "@/lib/utils";
import MoboNavLinks from "./MoboNavLinks";

const inter = Comfortaa
    ({ subsets: ["latin"] });

export default async function MoboNavbar() {
    return (
        <Sheet >
            <SheetTrigger asChild >
                <Button variant={'ghostlite'} className="m-0 p-0 py-0 bg-transparent Hover:bg-transparent">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent >
                <SheetHeader>
                    <SheetTitle>
                        <span className={cn("font-bold text-foreground", inter.className)}>Fotofix</span>
                    </SheetTitle>
                </SheetHeader>
                <div className="w-full mt-5 flex flex-col gap-5">
                    <MoboNavLinks />
                </div>
            </SheetContent>
        </Sheet>
    )
}
