"use client";
import Header from "@/components/common/MainHeader";
import GameCard from "@/components/common/GameCard";
import RouletteImage from "@/components/roulette/Image";
import DrawImage from "@/components/draw/Image";
import CoinImage from "@/components/coin/Image";

export default function Home() {
    return (
        <main className="w-full h-full flex flex-col gap-3 md:gap-5 px-6 md:px-12.5 xl:px-28">
            <Header />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
                <GameCard
                    image={<RouletteImage />}
                    title="랜덤 룰렛"
                    bgColor="#3E0298"
                    onClick={() => {}}
                />

                <GameCard
                    image={<DrawImage />}
                    title="랜덤 뽑기"
                    bgColor="#6731B7"
                    onClick={() => {}}
                />

                <GameCard
                    image={<CoinImage />}
                    title="동전 던지기"
                    bgColor="#6E50DA"
                    onClick={() => {}}
                />
            </div>
        </main>
    );
}
