import Logo from "@/assets/icons/logo";

/**
 * @brief 메인헤더 컴포넌트
 */

export default function MainHeader() {
    return (
        <header className="w-full h-auto bg-transparent py-4 md:py-6 xl:py-7">
            <div className="flex items-center gap-2">
                <Logo className="size-10 md:size-16" />
                
                <p className="font-pretendard-bold bg-linear-to-r from-[#00F2FF] to-[#FF36EE] bg-clip-text text-transparent text-base/4 md:text-2xl/6.5">
                    보람찬<br/>게임 놀이터
                </p>
            </div>
        </header>
    );
}