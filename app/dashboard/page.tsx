import {
    Card
} from "@/components/ui/card"

import { CardSim } from "lucide-react"

import {BarCode} from "@/components/ui/barcode/barcode"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

import Image from 'next/image'

export default function Page() {
    const device:string = "WORKSTATION M507" //Change to let and proper updating when the time comes, use "use-state"

    return (
        <>
        <div className="w-dvw h-dvh p-8">
            <div className="w-full p-2 pb-0 mt-8 mb-12">
                <Card className="bg-slate-100 p-2">
                    <BarCode code="ytr675-julk768tyk" />
                </Card>
            </div>
            <div className="w-full aspect-8560/5398 relative">
                <Image
                    src="/rollcard.png"
                    fill
                    alt="Roll Card Representation"
                />
            </div>
            <Drawer defaultOpen>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Sign In to Device?</DrawerTitle>
                        <DrawerDescription>DEVICE: <strong>{device}</strong></DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>
                            <CardSim />
                            Share Data
                        </Button>
                        <DrawerClose>
                            <Button variant="ghost">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
        </>
    )
}