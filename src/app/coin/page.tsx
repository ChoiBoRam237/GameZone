'use client';
import { useState } from 'react';
import MainHeader from '@/components/common/MainHeader';
import CoinResultPopup from '@/components/coin/ResultPopup';
import coin_front from '@/assets/images/coin_front.svg';
import coin_back from '@/assets/images/coin_back.svg';

export default function Coin() {
    const [result, setResult] = useState('front'); // 'front' | 'back'
    const [isFlipping, setIsFlipping] = useState(false); // 동전 회전 여부
    const [rotation, setRotation] = useState(0);
    const [resultPopupOpen, setResultPopupOpen] = useState<boolean>(false); // 결과 팝업 오픈 여부

    // 동전 회전 함수
    const flipCoin = () => {
        if (isFlipping) return;

        setIsFlipping(true);

        const newResult = Math.random() < 0.5 ? 'front' : 'back';
        const extraTurns = 1800; // 5바퀴(1800도) 회전
        const currentBase = Math.ceil(rotation / 360) * 360; // 기존 회전각 기준 정렬

        // 결과에 따라 목표 각도 설정 (앞면: 360도 배수, 뒷면: +180도)
        const targetAngle = newResult === 'front' 
            ? currentBase + extraTurns 
            : currentBase + extraTurns + 180;

        setRotation(targetAngle);

        setTimeout(() => {
            setResult(newResult);
            setIsFlipping(false);
            setResultPopupOpen(true);
        }, 1000); // 1초간 애니메이션
    };

    return (
        <div className="size-full flex flex-col items-center gap-3 px-4 pb-15 sm:gap-5 sm:px-12.5 lg:px-5">
            <MainHeader />

            <div className="w-full flex flex-col items-center gap-7 sm:gap-10 lg:max-w-300 lg:gap-15">
                <p className="font-pretendard-bold text-[#E1A743] text-2xl sm:text-[2rem]">동전 던지기</p>

                {/* 3D 애니메이션 씬 (perspective 설정) */}
                <div className="relative size-40.75 perspective-[1000px] sm:size-49.25 lg:size-68">
                    <div
                        className="relative h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.15,0.85,0.35,1.2)] transform-3d"
                        style={{ transform: `rotateY(${rotation}deg)` }}
                    >
                        {/* 앞면 */}
                        <div className="absolute inset-0 size-auto backface-hidden">
                            <img
                                src={coin_front.src}
                                alt="동전 앞면 이미지"
                                className="size-full"
                            />
                        </div>

                        {/* 뒷면 (180도 회전되어 뒤집혀 있음) */}
                        <div className="absolute inset-0 size-auto backface-hidden transform-[rotateY(180deg)]">
                            <img
                                src={coin_back.src}
                                alt="동전 뒷면 이미지"
                                className="size-full"
                            />
                        </div>
                    </div>
                </div>

                {/* 버튼 */}
                <button
                    className="size-auto px-6.5 py-1.5 rounded-sm sm:px-11 sm:py-2 sm:rounded-md lg:px-14 lg:py-3 lg:rounded-lg hover:bg-(--second-hover)"
                    style={{
                        backgroundColor: isFlipping ? "var(--button-disabled)" : "var(--second)",
                        cursor: isFlipping ? "not-allowed" : "pointer"
                    }}
                    onClick={() => {
                        if (isFlipping) return;
                        flipCoin();
                    }}
                >
                    <p className="font-pretendard-bold text-white text-sm sm:text-base lg:text-xl">
                        {isFlipping ? '던지는 중...' : '동전 던지기'}
                    </p>
                </button>
            </div>

            {resultPopupOpen && (
                <CoinResultPopup
                    result={result}
                    onClose={() => setResultPopupOpen(false)}
                />
            )}
        </div>
    );
}