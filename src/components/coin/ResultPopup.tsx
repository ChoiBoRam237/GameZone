import { useEffect } from "react";
import coin_front from '@/assets/images/coin_front.svg';
import coin_back from '@/assets/images/coin_back.svg';

/**
 * @brief 결과 팝업
 */

interface Props {
    result: string;
    onClose: () => void;
}

export default function CoinResultPopup(props: Props) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 z-2 size-full flex items-center justify-center bg-(--black-30)">
            <div className="flex flex-col bg-white size-55 sm:size-72.5 lg:size-86.75">
                <div className="size-full flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                    <img
                        src={props.result === "front" ? coin_front.src : coin_back.src}
                        alt="동전 결과 이미지"
                        className="size-25 sm:size-34.5 lg:size-38.75"
                    />
                    
                    <p className="font-pretendard-bold text-black text-2xl sm:text-3xl lg:text-4xl">
                        {props.result === "front" ? "앞면" : "뒷면"}
                    </p>
                </div>

                <button
                    className="w-full border-t border-[#C9C9C9] py-3 sm:py-4 lg:py-5 hover:bg-[#EEEEEE]"
                    onClick={props.onClose}
                >
                    닫기
                </button>
            </div>
        </div>
    )
}