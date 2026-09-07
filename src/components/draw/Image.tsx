import drawImage from "@/assets/images/draw.svg";

/**
 * @brief 랜덤 뽑기 이미지 컴포넌트
 */

export default function DrawImage() {
    return (
        <img
            src={drawImage.src}
            alt="뽑기"
            className="shrink-0 md:absolute md:top-5 md:left-[50%] md:translate-x-[-50%] w-25 h-23 md:w-60.25 md:h-56 xl:w-78 xl:h-72"
        />
    );
}