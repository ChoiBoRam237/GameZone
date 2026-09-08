"use client";
import { useState } from "react";
import MainHeader from "@/components/common/MainHeader";
import ItemAdd from "@/components/common/ItemAdd";
import ItemList from "@/components/common/ItemList";
import RouletteBoard from "@/components/roulette/RouletteBoard";

/**
 * @brief 랜덤 룰렛
 */

export default function RoulettePage() {
    const [items, setItems] = useState<string[]>([]); // 아이템 목록
    const [selectedItem, setSelectedItem] = useState<string>(""); // 결과

    return (
        <div className="w-full h-full flex flex-col gap-3 md:gap-5 px-6 pb-15 md:px-12.5 xl:px-28">
            <MainHeader />

            <div className="w-full flex flex-col-reverse items-center gap-12 md:gap-16 xl:flex-row xl:justify-between">
                <div className="w-full flex flex-col gap-7 md:flex-row md:gap-16 xl:flex-col xl:gap-20">
                    {/* 아이템 추가하기 */}
                    <ItemAdd
                        items={items ?? []}
                        setItems={setItems}
                    />

                    {/* 룰렛 목록 */}
                    <ItemList
                        items={items}
                        setItems={setItems}
                    />
                </div>

                {/* 룰렛 */}
                <div className="w-full flex justify-center">
                    <RouletteBoard
                        items={items ?? []}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                    />
                </div>
            </div>
        </div>
    );
}