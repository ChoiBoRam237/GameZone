"use client";
import { useEffect, useState } from "react";
import MainHeader from "@/components/common/MainHeader";
import ItemAdd from "@/components/common/ItemAdd";
import ItemList from "@/components/common/ItemList";
import FoldedCard from "@/components/draw/FoldedCard";

/**
 * @brief 랜덤 뽑기
 */

export default function DrawPage() {
    const [items, setItems] = useState<string[]>([]); // 아이템 목록
    const [displayItems, setDisplayItems] = useState<string[]>([]); // 순서 랜덤 아이템 목록
    const [cardAllOpen, setCardAllOpen] = useState<boolean>(true); // 카드 오픈 여부
    const [selectedItem, setSelectedItem] = useState<string>(""); // 결과

    // 아이템 초기화
    useEffect(() => {
        setDisplayItems(items);
        setSelectedItem("");
        setCardAllOpen(true); // 새 아이템 추가 시 모든 카드 열기
    }, [items]);

    // 순서 랜덤 handle 함수
    const handleReshuffle = () => {
        setSelectedItem("");
        setDisplayItems(shuffleArray(displayItems));
        setCardAllOpen(false);
    };

    return (
        <div className="size-full flex flex-col items-center gap-3 px-4 pb-15 sm:gap-5 sm:px-12.5 lg:px-5">
            <MainHeader />

            <div className="w-full flex flex-col-reverse items-center gap-12 sm:gap-16 lg:max-w-300 lg:flex-row lg:items-start lg:justify-between">
                <div className="w-full flex flex-col gap-7 sm:flex-row sm:gap-16 lg:w-auto lg:flex-col lg:gap-20">
                    {/* 아이템 추가하기 */}
                    <ItemAdd
                        items={items ?? []}
                        setItems={setItems}
                    />

                    {/* 아이템 목록 */}
                    <ItemList
                        items={items}
                        setItems={setItems}
                    />
                </div>

                {/* 뽑기 */}
                <div className="w-full flex flex-col items-center gap-1 sm:gap-2 lg:gap-5">
                    <p className="font-pretendard-bold text-[#E1A743] text-2xl sm:text-[2rem]">랜덤 카드 뽑기</p>

                    {displayItems.length > 0 ? (
                        <div className="w-full flex flex-col items-center gap-6 sm:gap-10 lg:gap-15">
                            <div className="w-full flex justify-center">
                                <div className="w-auto max-w-73 flex flex-wrap justify-center gap-3 sm:max-w-xl sm:gap-x-4 lg:max-w-160 lg:gap-x-5 lg:gap-y-4">
                                    {displayItems.map((card, index) => (
                                        <FoldedCard
                                            key={index}
                                            number={index + 1}
                                            name={card}
                                            cardAllOpen={cardAllOpen}
                                            selectedItem={selectedItem}
                                            setSelectedItem={setSelectedItem}
                                        />
                                    ))}
                                </div>
                            </div>

                            <button
                                className="size-auto bg-(--second) px-6.5 py-1.5 rounded-sm sm:px-11 sm:py-2 sm:rounded-md lg:px-14 lg:py-3 lg:rounded-lg hover:bg-(--second-hover)"
                                onClick={() => {
                                    setSelectedItem("");
                                    handleReshuffle(); // 카드 순서 섞기
                                    setCardAllOpen(false);
                                }}
                            >
                                <p className="font-pretendard-bold text-white text-sm sm:text-base lg:text-xl">카드 섞기</p>
                            </button>
                        </div>
                    ) : (
                        <div className="w-full flex justify-center pt-7 sm:pt-10 lg:pt-13">
                            <p className="animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite] font-pretendard-bold text-[#CDC2FF] text-base sm:text-lg lg:text-xl">아이템을 추가해 주세요.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

// 배열 순서 무작위로 섞어주는 함수
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};