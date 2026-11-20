import QuizField from "./QuizField";

export default function LearningInfo() {

    return (
        <main className="flex flex-col w-full min-w-0 items-start gap-6 p-6 relative bg-white rounded-2xl border border-solid border-[#e9e5e4]">
            <header className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] font-family:'Open_Sans-Bold' ,Helvetica] font-bold text-black text-2x1 tracking-[0] leading-[normal]">
                    Step title
                </h1>
                <p className="relative self-stretch [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-base tracking-[0] leading-6">
                    Instructions or introduction or some sort of text goes here
                </p>
            </header>
            <figure
                className="flex flex-col h-[220px] items-center justify-center gap-2.5 relative self-stretch w-full bg-[#f7f5f5] rounded-lg overflow-hidden border border-solid border-[#e9e5e4]"
                aria-label="Step illustration"
            >
                <div className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-base tracking-[0] leading-[23.2px] whitespace-nowrap">
                    Image or something here
                </div>
            </figure>

            <QuizField />
            
        </main>
    );
}