import coinImage from "@/assets/images/coin.svg";

/**
 * @brief 동전 던지기 이미지 컴포넌트
 */

export default function CoinImage() {
    return (
        <img
            src={coinImage.src}
            alt="동전 던지기"
            className="shrink-0 md:absolute md:top-5 md:left-[50%] md:translate-x-[-50%] w-21.5 h-26 md:w-43.5 md:h-57 xl:w-52.75 xl:h-69.25"
        />
    );
}