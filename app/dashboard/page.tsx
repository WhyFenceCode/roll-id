import {
    Card
} from "@/components/ui/card"

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
        </div>
        </>
    )
}