import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Image from 'next/image'

export default function Page() {
    return (
        <>
        <div className="w-dvw h-dvh">
            <div className="w-full p-10 pb-0 mt-8 mb-4">
                <Card>

                </Card>
            </div>
            <div className="w-full aspect-8/5 relative">
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