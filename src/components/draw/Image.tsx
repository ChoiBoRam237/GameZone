import drawImage from "@/assets/images/draw.svg";

/**
 * @brief 랜덤 뽑기 이미지 컴포넌트
 */

export default function DrawImage() {
    return (
        <img
            src={drawImage.src}
            alt="뽑기"
            className=" w-25 h-23 shrink-0 sm:absolute sm:w-60.25 sm:h-56 sm:top-5 sm:left-[50%] sm:translate-x-[-50%] lg:w-78 lg:h-72"
        />
    );
}