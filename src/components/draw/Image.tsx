import drawImage from "@/assets/images/draw.svg";

/**
 * @brief 랜덤 뽑기 이미지 컴포넌트
 */

export default function DrawImage() {
    return (
        <img
            src={drawImage.src}
            alt="뽑기"
            className="size-17 mx-2 sm:size-46 sm:mb-4.5 sm:mx-0 lg:size-57.5 lg:mb-6"
        />
    );
}