"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

/**
 * @brief 랜덤 뽑기 카드 컴포넌트
 */


interface Props {
    number: number;
    name: string;
    cardAllOpen: boolean;
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function FoldedCard(props: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const cardOpen =
        props.cardAllOpen || (isOpen && props.name === props.selectedItem);

    return (
        <div className="size-auto shrink-0">
            <motion.div
                onClick={() => {
                    if (props.selectedItem !== "") return;
                    setIsOpen(true);
                    props.setSelectedItem(props.name);
                }}
                className="relative size-35 cursor-pointer select-none shadow-xl rounded-lg overflow-hidden bg-white border border-gray-200 sm:size-45 lg:size-50"
                style={{
                    aspectRatio: '1',
                    transformStyle: 'preserve-3d',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* ---------------- 펼쳐졌을 때 보이는 안쪽 결과 ---------------- */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#DFD7FF]">
                    {/* 종이 접힘선 느낌을 주는 내부 가이드라인 배경 */}
                    <svg
                        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                    </svg>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                            opacity: cardOpen ? 1 : 0, 
                            y: cardOpen ? 0 : 10 
                        }}
                        transition={{ 
                            delay: cardOpen ? 0.3 : 0, 
                            duration: cardOpen ? 0.4 : 0 
                        }}
                        className="z-10 flex flex-col items-center gap-3"
                    >
                        <p className="font-pretendard-bold text-(--primary) text-sm sm:text-xl lg:text-2xl">{props.name}</p>
                    </motion.div>
                </div>

                {/* ---------------- 접혀있는 플랩(Flap) 애니메이션 레이어 ---------------- */}
                {/* 상단 플랩 */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-1/2 bg-slate-100 border-b border-gray-300 origin-top z-20 shadow-sm flex items-center justify-center"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)', // 삼각형 모형
                        backfaceVisibility: 'hidden',
                    }}
                    animate={{
                        rotateX: cardOpen ? -180 : 0,
                    }}
                    transition={{ 
                        duration: cardOpen ? 0.6 : 0, 
                        ease: [0.4, 0, 0.2, 1] 
                    }}
                />

                {/* 하단 플랩 */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-100 border-t border-gray-300 origin-bottom z-20 shadow-sm flex items-center justify-center"
                    style={{
                        clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                        backfaceVisibility: 'hidden',
                    }}
                    animate={{
                        rotateX: cardOpen ? 180 : 0,
                    }}
                    transition={{ 
                        duration: cardOpen ? 0.6 : 0, 
                        ease: [0.4, 0, 0.2, 1] 
                    }}
                />

                {/* 좌측 플랩 */}
                <motion.div
                    className="absolute top-0 left-0 w-1/2 h-full bg-slate-200/90 border-r border-gray-300 origin-left z-30 shadow-sm flex items-center justify-center"
                    style={{
                        clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                        backfaceVisibility: 'hidden',
                    }}
                    animate={{
                        rotateY: cardOpen ? -180 : 0,
                    }}
                    transition={{ 
                        duration: cardOpen ? 0.6 : 0, 
                        ease: [0.4, 0, 0.2, 1] 
                    }}
                />

                {/* 우측 플랩 (가장 위에 보이는 숫자 표시 플랩) */}
                <motion.div
                    className="absolute top-0 right-0 w-1/2 h-full bg-white border-l border-gray-300 origin-right z-40 shadow-md flex items-center justify-center"
                    style={{
                        clipPath: 'polygon(100% 0, 100% 100%, 0 50%)',
                        backfaceVisibility: 'hidden',
                    }}
                    animate={{
                        rotateY: cardOpen ? 180 : 0,
                    }}
                    transition={{ 
                        duration: cardOpen ? 0.6 : 0, 
                        ease: [0.4, 0, 0.2, 1] 
                    }}
                />

                {/* ---------------- 카드가 접혀있을 때 전면에 표시되는 번호 ---------------- */}
                <AnimatePresence>
                    {!cardOpen && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
                        >
                            <div className="size-7 rounded-full bg-[#73D0FE] text-white font-pretendard-bold text-xs flex items-center justify-center shadow-lg sm:size-10 sm:text-base lg:size-12.5 lg:text-xl">
                                {props.number}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}