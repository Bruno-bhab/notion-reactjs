
import { FloatingMenu, Editor } from "@tiptap/react";
import { FloatingEditorMenuButton } from "./FloatingEditorMenuButton";

export interface FloatingEditorMenuProps{
    editor: Editor
}

export function FloatingEditorMenu({ editor }: FloatingEditorMenuProps){
    return (
        <FloatingMenu
            className="bg-zinc-700 py-2 px-1 shadow-xl gap-1 border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col" 
            editor={ editor } 
            shouldShow={({ state }) => {
                const { $from } = state.selection
                const currentLineText = $from.nodeBefore?.textContent

                return currentLineText === '/'
            }}
        >
            <FloatingEditorMenuButton 
                img="http://www.notion.so/images/blocks/code.a8b201f4.png"
                altImg="Block Code"
                title="Block Code"
                description="Capture a cide snippet"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            />
            <FloatingEditorMenuButton 
                img="http://www.notion.so/images/blocks/header.57a7576a.png"
                altImg="Heading"
                title="Heading 1"
                description="Big section heading."
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            />
            <FloatingEditorMenuButton 
                img="http://www.notion.so/images/blocks/subheader.9aab4769.png"
                altImg="Heading"
                title="Heading 2"
                description="Big section heading."
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            />
            <FloatingEditorMenuButton 
                img="http://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
                altImg="Heading"
                title="Heading 3"
                description="Big section heading."
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            />

        </FloatingMenu>
    )
}