import {
    Card
} from "@/components/ui/card"

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
    return (
        <>
        <div className="w-dvw h-dvh p-2">
            <div className="w-full p-8 pb-0 mt-8 mb-4">
                <Card>

                </Card>
            </div>
            <div className="w-full aspect-8560/5398 relative">
                <Image
                    src="/rollcard.png"
                    fill
                    alt="Roll Card Representation"
                />
            </div>
            <Drawer open>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Sign In to Device?</DrawerTitle>
                        <DrawerDescription>This action shares data with an outside device!</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Share Data</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
        </>
    )
}