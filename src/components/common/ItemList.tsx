import React, { useState } from "react";
import { Check, Pencil, X } from "lucide-react";

/**
 * @brief 아이템 리스트 컴포넌트
 */

interface Props {
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ItemList(props: Props) {
    const [updatedItem, setUpdatedItem] = useState<string>(""); // 업데이트 할 아이템
    const [updateContent, setUpdateContent] = useState<string>(""); // 업데이트 할 내용

    return (
        <div className="w-full flex flex-col gap-2 sm:gap-2.5 lg:w-93 lg:gap-3">
            <p className="font-pretendard-bold text-white text-base whitespace-nowrap sm:text-xl lg:text-2xl">리스트</p>

            <div className="w-full h-40 overflow-auto border border-(--second) rounded-sm sm:h-50 sm:rounded-md lg:h-90 lg:rounded-lg">
                {props.items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-auto flex items-center justify-between gap-2 border-b border-(--second) p-2 sm:py-2.5 lg:py-3 lg:px-4.5"
                    >
                        {updatedItem === item ? (
                            <input
                                id="update-item"
                                className="w-full outline-none font-pretendard-regular text-xs text-white sm:text-sm lg:text-base"
                                value={updateContent}
                                onChange={(e) => setUpdateContent(e.target.value)}
                            />
                        ) : (
                            <p className="font-pretendard-regular text-xs text-white sm:text-sm lg:text-base">{item}</p>
                        )}

                        <div className="flex gap-0.5 sm:gap-1">
                            {updatedItem === item ? (
                                <button
                                    className="w-auto h-auto flex items-center justify-center p-1 rounded-sm shrink-0 bg-[#2CDB00] hover:bg-[#27C400]"
                                    onClick={() => {
                                        props.setItems(
                                            props.items.map((item, currentIndex) =>
                                                currentIndex === index ? updateContent : item
                                            )
                                        );
                                        setUpdatedItem("");
                                        setUpdateContent("");
                                    }}
                                >
                                    <Check className="size-3 sm:size-3.5 lg:size-4" color="white" />
                                </button>
                            ) : (
                                <button
                                    className="w-auto h-auto flex items-center justify-center p-1 rounded-sm shrink-0 bg-[#E4CD00] hover:bg-[#C5B205]"
                                    onClick={() => {
                                        setUpdatedItem(item);
                                        setUpdateContent(item);
                                    }}
                                >
                                    <Pencil className="size-3 sm:size-3.5 lg:size-4" color="white" />
                                </button>
                            )}

                            <button
                                className="w-auto h-auto flex items-center justify-center p-1 rounded-sm shrink-0 bg-[#FF0000] hover:bg-[#DA0000]"
                                onClick={() => {
                                    if (updatedItem === item) {
                                        setUpdatedItem("");
                                        setUpdateContent("");
                                    } else {
                                        props.setItems(
                                            props.items.filter(
                                                (_, currentIndex) => currentIndex !== index
                                            )
                                        );
                                    }
                                }}
                            >
                                <X className="size-3 sm:size-3.5 lg:size-4" color="white" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}