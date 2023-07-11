import { useEditor, EditorContent } from "@tiptap/react"
import Image from '@tiptap/extension-image'
import StarterKit from "@tiptap/starter-kit"
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import html from 'highlight.js/lib/languages/xml'

import { FloatingEditorMenu } from "./FloatingEditorMenu"
import { EditorMenu } from "./EditorMenu"
import { initialContent } from "../utils/initialContent"

import 'highlight.js/styles/tokyo-night-dark.css'

lowlight.registerLanguage('html', html)

export function Editor() {
    const editor = useEditor({
        extensions: [
            Image,
            StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            })
        ],
        content: initialContent,
        editorProps: {
            attributes: {
                class: 'outline-none'
            }
        }
    })

    return (
        <>
            <EditorContent
                className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
                editor={editor}
            />

            {editor && (
                <FloatingEditorMenu editor={editor}/>
            )}

            {editor && (
                <EditorMenu editor={editor}/>
            )}
        </>
    )
}