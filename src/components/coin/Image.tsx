import coinImage from "@/assets/images/coin.svg";

/**
 * @brief 동전 던지기 이미지 컴포넌트
 */

export default function CoinImage() {
    return (
        <img
            src={coinImage.src}
            alt="동전 던지기"
            className="w-21.5 h-26 shrink-0 md:absolute md:w-43.5 md:h-57 md:top-5 md:left-[50%] md:translate-x-[-50%] xl:w-52.75 xl:h-69.25"
        />
    );
}