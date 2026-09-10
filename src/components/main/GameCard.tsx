/**
 * @brief 카드 컴포넌트
 */

interface Props {
    image: React.ReactNode;
    title: string;
    bgColor: string;
    onClick: () => void;
}

export default function GameCard(props: Props) {
    return (
        <div
            className={`w-full h-auto flex items-center gap-1 rounded-2xl pr-4 pl-3 py-5 sm:flex-col sm:justify-end sm:rounded-[1.25rem] sm:pt-5 sm:pb-7 lg:gap-5 lg:rounded-[30px] lg:pt-5 lg:pb-7.5`}
            style={{ backgroundColor: props.bgColor }}
        >
            {props.image}

            <div className="w-full flex flex-row items-center justify-between gap-5 sm:flex-col sm:justify-start sm:gap-2 lg:gap-3">
                <p className="font-montserrat-bold text-[#E1A743] text-2xl sm:text-[1.75rem] lg:text-[2rem]">{props.title}</p>
                
                <button
                    className="size-auto flex items-center justify-center py-1 px-4 rounded-md bg-[#00BAE8] sm:py-2 sm:px-5 sm:rounded-lg lg:py-3 lg:px-6 hover:bg-[#0094B9]"
                    onClick={props.onClick}
                >
                    <p className="font-pretendard-bold text-base sm:text-lg lg:text-xl">
                        <span className="sm:hidden">PLAY</span>
                        <span className="hidden sm:block">PLAY NOW</span>
                    </p>
                </button>
            </div>
        </div>
    );
}