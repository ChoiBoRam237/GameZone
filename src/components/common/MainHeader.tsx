import Logo from "@/assets/icons/logo";
import { useRouter } from "next/navigation";

/**
 * @brief 메인헤더 컴포넌트
 */

export default function MainHeader() {
    const router = useRouter();

    return (
        <header className="w-full h-auto bg-transparent py-4 sm:py-6 lg:py-7">
            <button
                className="flex items-center gap-2"
                onClick={() => router.replace("/")}
            >
                <Logo className="size-10 sm:size-16" />
                
                <p className="font-pretendard-extra-bold bg-linear-to-r from-[#00F2FF] to-[#FF36EE] bg-clip-text text-transparent text-base/4 text-start sm:text-2xl/6.5">
                    보람찬<br/>게임 놀이터
                </p>
            </button>
        </header>
    );
}