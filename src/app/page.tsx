"use client";
import { useRouter } from "next/navigation";

import MainHeader from "@/components/common/MainHeader";
import GameCard from "@/components/main/GameCard";
import RouletteImage from "@/components/roulette/Image";
import DrawImage from "@/components/draw/Image";
import CoinImage from "@/components/coin/Image";

export default function Home() {
    const router = useRouter();

    return (
        <main className="size-full flex flex-col items-center gap-3 px-4 pb-15 sm:gap-5 sm:px-12.5 lg:px-5">
            <MainHeader />

            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:max-w-300 lg:grid-cols-3 lg:gap-6">
                <GameCard
                    image={<RouletteImage />}
                    title="랜덤 룰렛"
                    bgColor="#3E0298"
                    onClick={() => router.push("/roulette")}
                />

                <GameCard
                    image={<DrawImage />}
                    title="랜덤 카드 뽑기"
                    bgColor="#6731B7"
                    onClick={() => router.push("/draw")}
                />

                <GameCard
                    image={<CoinImage />}
                    title="동전 던지기"
                    bgColor="#6E50DA"
                    onClick={() => router.push("/coin")}
                />
            </div>
        </main>
    );
}
