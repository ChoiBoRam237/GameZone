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
            className={`relative w-full h-32.5 flex rounded-2xl pr-4 pl-2.25 py-4 md:flex-col md:justify-end md:h-104.5 md:rounded-3xl md:py-7.5 xl:h-130 xl:rounded-[30px]`}
            style={{ backgroundColor: props.bgColor }}
        >
            {props.image}

            <div className="w-full flex flex-row items-center justify-between gap-5 md:flex-col md:justify-start xl:gap-6">
                <p className="font-montserrat-bold text-[#E1A743] text-2xl md:text-4xl xl:text-5xl">{props.title}</p>
                
                <button
                    className="flex items-center justify-center w-18.25 h-10 rounded-lg bg-[#00BAE8] md:w-43 md:h-12.5 md:rounded-[10px] xl:w-51 xl:h-15 hover:bg-[#0094B9]"
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