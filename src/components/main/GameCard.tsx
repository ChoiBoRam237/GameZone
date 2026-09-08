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
            className={`relative w-full h-32.5 flex md:flex-col md:justify-end md:h-104.5 xl:h-130 rounded-2xl md:rounded-3xl xl:rounded-[30px] pr-4 pl-2.25 py-4 md:py-7.5`}
            style={{ backgroundColor: props.bgColor }}
        >
            {props.image}

            <div className="w-full flex flex-row md:flex-col items-center justify-between md:justify-start gap-5 xl:gap-6">
                <p className="font-montserrat-bold text-[#E1A743] text-2xl md:text-4xl xl:text-5xl">{props.title}</p>
                
                <button
                    className="flex items-center justify-center w-18.25 h-10 md:w-43 md:h-12.5 xl:w-51 xl:h-15 rounded-lg md:rounded-[10px] bg-[#00BAE8] hover:bg-[#0094B9]"
                    onClick={props.onClick}
                >
                    <p className="font-pretendard-bold text-lg md:text-2xl xl:text-[28px]">
                        <span className="md:hidden">PLAY</span>
                        <span className="hidden md:block">PLAY NOW</span>
                    </p>
                </button>
            </div>
        </div>
    );
}