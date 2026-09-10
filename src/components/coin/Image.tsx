import coinImage from "@/assets/images/coin.svg";

/**
 * @brief 동전 던지기 이미지 컴포넌트
 */

export default function CoinImage() {
    return (
        <img
            src={coinImage.src}
            alt="동전 던지기"
            className="w-18 h-23.75 shrink-0 sm:w-39.25 sm:h-51.5 lg:w-52.75 lg:h-69.25"
        />
    );
}