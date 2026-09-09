import coinImage from "@/assets/images/coin.svg";

/**
 * @brief 동전 던지기 이미지 컴포넌트
 */

export default function CoinImage() {
    return (
        <img
            src={coinImage.src}
            alt="동전 던지기"
            className="w-21.5 h-26 shrink-0 sm:absolute sm:w-43.5 sm:h-57 sm:top-5 sm:left-[50%] sm:translate-x-[-50%] lg:w-52.75 lg:h-69.25"
        />
    );
}