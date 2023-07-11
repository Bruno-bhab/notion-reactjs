import { ComponentProps } from "react";

export interface FloatingEditorMenuButtonProps extends ComponentProps<'button'>{
    img: string;
    altImg?: string;
    title: string;
    description: string;
}

export function FloatingEditorMenuButton({ img, altImg, title, description, onClick }: FloatingEditorMenuButtonProps){ 
    return (
        <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600" onClick={onClick}>
            <img 
                className="w-12 border border-zinc-600 rounded"
                src={ img }
                alt={ altImg ? altImg: '' } 
            />
            <div className="flex flex-col text-left">
                <span className="text-sm">{ title }</span>
                <span className="text-xs text-zinc-400">{ description }</span>
            </div>
        </button>
    )
}