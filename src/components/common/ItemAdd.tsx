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
        <div className="w-full flex flex-col gap-2 sm:gap-2.5 lg:w-93 lg:gap-3">
            <p className="font-pretendard-bold text-white text-base whitespace-nowrap sm:text-xl lg:text-2xl">아이템 추가</p>

            <div className="w-full flex gap-1 sm:flex-col sm:gap-2.5 lg:gap-3">
                <input
                    className="w-full outline-none border border-(--second) rounded-sm px-2.5 py-2 font-pretendard-regular text-sm text-white placeholder:text-(--white-80) sm:rounded-md sm:text-sm lg:rounded-lg lg:px-4 lg:py-3.5 lg:text-base"
                    placeholder="추가할 아이템을 입력해 주세요"
                    value={addItem}
                    onChange={(e) => setAddItem(e.target.value)}
                />

                <button
                    className="w-16.75 shrink-0 flex items-center justify-center rounded-sm text-white text-xs sm:w-full sm:shrink sm:p-2.5 sm:rounded-md sm:text-sm lg:p-4 lg:rounded-lg lg:text-base hover:bg-(--second-hover)"
                    style={{
                        backgroundColor: addItem.length === 0 ? "var(--button-disabled)" : "var(--second)",
                        cursor: addItem.length === 0 ? "not-allowed" : "pointer"
                    }}
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