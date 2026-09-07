import rouletteImage from "@/assets/images/roulette.svg";

/**
 * @brief 랜덤 룰렛 이미지 컴포넌트
 */

export default function RouletteImage() {
    return (
        <img
            src={rouletteImage.src}
            alt="룰렛"
            className="shrink-0 md:absolute md:top-5 md:left-[50%] md:translate-x-[-50%] w-25 h-24.25 md:w-63.75 md:h-61.5 xl:w-75.5 xl:h-73"
        />
    );
}