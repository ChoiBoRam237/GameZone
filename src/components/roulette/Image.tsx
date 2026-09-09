import rouletteImage from "@/assets/images/roulette.svg";

/**
 * @brief 랜덤 룰렛 이미지 컴포넌트
 */

export default function RouletteImage() {
    return (
        <img
            src={rouletteImage.src}
            alt="룰렛"
            className="size-20 shrink-0 sm:size-55 lg:size-70"
        />
    );
}