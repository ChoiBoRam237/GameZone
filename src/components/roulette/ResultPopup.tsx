import { useEffect } from "react";

/**
 * @brief 결과 팝업
 */

interface Props {
    selectedItem: string;
    onClose: () => void;
}

export default function RouletteResultPopup(props: Props) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 z-2 size-full flex items-center justify-center bg-(--black-30)">
            <div className="flex flex-col bg-white size-55 sm:size-72.5 lg:size-86.75">
                <div className="size-full flex items-center justify-center">
                    <p className="font-pretendard-bold text-black text-2xl sm:text-3xl lg:text-4xl">{props.selectedItem}</p>
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