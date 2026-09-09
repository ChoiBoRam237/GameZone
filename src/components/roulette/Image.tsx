import rouletteImage from "@/assets/images/roulette.svg";

/**
 * @brief 랜덤 룰렛 이미지 컴포넌트
 */

export default function RouletteImage() {
    return (
        <img
            src={rouletteImage.src}
            alt="룰렛"
            className="size-24.5 shrink-0 md:size-64 md:absolute md:top-5 md:left-[50%] md:translate-x-[-50%] xl:size-77.5"
        />
    );
}