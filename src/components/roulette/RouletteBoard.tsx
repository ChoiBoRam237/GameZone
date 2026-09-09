"use client";
import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

/**
 * @brief 룰렛 컴포넌트
 */

interface Props {
    items: string[];
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
    onOpen: () => void;
}

const SIZE = 500;
const CENTER = SIZE / 2;
const RADIUS = 235;

function polarToCartesian(
    cx: number,
    cy: number,
    radius: number,
    angle: number
) {
    const radian = ((angle - 90) * Math.PI) / 180;
  
    return {
        x: cx + radius * Math.cos(radian),
        y: cy + radius * Math.sin(radian),
    };
}

function createSlicePath(
    startAngle: number,
    endAngle: number
  ) {
    const start = polarToCartesian(CENTER, CENTER, RADIUS, endAngle);
    const end = polarToCartesian(CENTER, CENTER, RADIUS, startAngle);
  
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
  
    return `
        M ${CENTER} ${CENTER}
        L ${start.x} ${start.y}
        A ${RADIUS} ${RADIUS}
        0 ${largeArcFlag} 0
        ${end.x} ${end.y}
        Z
    `;
}

export default function RouletteBoard(props: Props) {
    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);

    const sliceAngle = 360 / props.items.length;

    const handleStart = () => {
        if (isSpinning || props.items.length === 0) {
            return;
        }
    
        setIsSpinning(true);
    
        // 랜덤 메뉴 선택
        const selectedIndex = Math.floor(Math.random() * props.items.length);
    
        const selectedItem = props.items[selectedIndex];
    
        props.setSelectedItem(selectedItem);
    
        // 한 칸의 각도
        const sliceAngle = 360 / props.items.length;
    
        // 선택된 칸의 중앙 각도
        const selectedAngle = selectedIndex * sliceAngle + sliceAngle / 2;
    
        // 5~7바퀴 랜덤
        const spins =
            5 + Math.floor(Math.random() * 3);
    
        // 현재 회전값을 고려해서
        // 선택된 칸의 중앙이 12시 방향에 오도록 계산
        const currentAngle =
            ((rotation % 360) + 360) % 360;
    
        const targetOffset =
            (360 - selectedAngle - currentAngle) % 360;
    
        const targetRotation =
            rotation +
            spins * 360 +
            targetOffset;
    
        setRotation(targetRotation);
    };

    useEffect(() => {
        if (props.items.length > 0) return;
        setRotation(0);
    }, [props.items]);

    return (
        <div className="relative size-85.25 md:size-126 xl:size-146.25">
            {/* 포인터 */}
            <div className="absolute z-1 top-2.5 left-1/2 -translate-x-1/2">
                <MapPin
                    fill="#dab4fb"
                    stroke="#a034ff"
                    className="size-5 md:size-6 xl:size-7"
                />
            </div>

            {/* 룰렛 */}
            <div
                className="size-full"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: props.items.length > 0 ? "transform 5s cubic-bezier(0.12, 0.8, 0.18, 1)" : "none",
                }}
                onTransitionEnd={() => {
                    setIsSpinning(false);
                    props.onOpen();
                }}
            >
                <svg
                    viewBox={`0 0 ${SIZE} ${SIZE}`}
                    className="size-full block"
                >
                    {props.items.length === 0 ? (
                        <>
                            {/* 0개일 때 전체 룰렛판 */}
                            <circle
                                cx={CENTER}
                                cy={CENTER}
                                r={RADIUS}
                                fill="#EDD8FF"
                            />

                            {/* 아이템 추가 요청 메시지 */}
                            <text
                                x={CENTER}
                                y={CENTER - RADIUS * 0.45}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#0C003F"
                                fontSize="17"
                                fontWeight="600"
                            >
                                아이템을 추가해 주세요
                            </text>
                        </>
                    ) : props.items.length === 1 ? (
                        <>
                            {/* 1개일 때 전체 룰렛판 */}
                            <circle
                                cx={CENTER}
                                cy={CENTER}
                                r={RADIUS}
                                fill="#EDD8FF"
                            />

                            {/* 상단 아이템 */}
                            <text
                                x={CENTER}
                                y={CENTER - RADIUS * 0.62}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#0C003F"
                                fontSize="17"
                                fontWeight="600"
                            >
                                {props.items[0]}
                            </text>
                        </>
                    ) : (
                        <>
                            {props.items.map((item, index) => {
                                const startAngle = index * sliceAngle;
                                const endAngle = startAngle + sliceAngle;
                                const textAngle = startAngle + sliceAngle / 2;

                                const textPosition = polarToCartesian(CENTER, CENTER, RADIUS * 0.62, textAngle);

                                return (
                                    <g key={index}>
                                        <path
                                            d={createSlicePath(startAngle, endAngle)}
                                            fill={
                                                index % 2 === 0
                                                    ? "#FFFFFF"
                                                    : "#EDD8FF"
                                            }
                                        />

                                        <text
                                            x={textPosition.x}
                                            y={textPosition.y}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fill="#0C003F"
                                            fontSize="17"
                                            fontWeight="600"
                                            transform={`
                                                rotate(
                                                    ${textAngle}
                                                    ${textPosition.x}
                                                    ${textPosition.y}
                                                )
                                            `}
                                        >
                                            {item}
                                        </text>
                                    </g>
                                )
                            })}

                        </>
                    )}
                    
                    {/* 외곽 테두리 */}
                    <circle
                        cx={CENTER}
                        cy={CENTER}
                        r={RADIUS}
                        fill="none"
                        stroke="#7552E8"
                        strokeWidth="15"
                    />

                    {/* 가운데 Start 버튼 */}
                    <g
                        className={props.items.length <= 0 || isSpinning ? "cursor-not-allowed" : "cursor-pointer"}
                        onClick={handleStart}
                    >
                        <circle
                            cx={CENTER}
                            cy={CENTER}
                            r="32"
                            fill="#7552E8"
                        />

                        <text
                            x={CENTER}
                            y={CENTER}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize="16"
                            fontWeight="600"
                        >
                            Start
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    )
}