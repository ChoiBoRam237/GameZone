import React, { useState } from "react";

/**
 * @brief 아이템 추가 컴포넌트
 */

interface Props {
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ItemAdd(props: Props) {
    const [addItem, setAddItem] = useState<string>(""); // 추가할 아이템

    return (
        <div className="w-full flex flex-col gap-2 md:gap-2.5 xl:w-93 xl:gap-3">
            <p className="font-pretendard-bold text-white text-base whitespace-nowrap md:text-xl xl:text-2xl">아이템 추가</p>

            <div className="w-full flex gap-1 md:flex-col md:gap-2.5 xl:gap-3">
                <input
                    className="w-full outline-none border border-(--second) rounded-sm px-2.5 py-2 font-pretendard-regular text-sm text-white placeholder:text-(--white-80) md:rounded-md md:text-sm xl:rounded-lg xl:px-4 xl:py-3.5 xl:text-base"
                    placeholder="추가할 아이템을 입력해 주세요"
                    value={addItem}
                    onChange={(e) => setAddItem(e.target.value)}
                />

                <button
                    className="w-16.75 shrink-0 flex items-center justify-center bg-(--second) rounded-sm text-white text-xs hover:bg-(--second-hover) md:w-full md:shrink md:p-2.5 md:rounded-md md:text-sm xl:p-4 xl:rounded-lg xl:text-base"
                    onClick={() => {
                        props.setItems(prev => [...prev, addItem]);
                        setAddItem("");
                    }}
                >
                    추가하기
                </button>
            </div>
        </div>
    )
}