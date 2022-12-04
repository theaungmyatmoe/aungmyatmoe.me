import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'

function ToolsSection({children, ...props}) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    )
}

function Tool({title, href, children}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    )
}

export default function Uses() {
    return (
        <>
            <SimpleLayout
                title="Software I use, gadgets I love, and other things I recommend."
                intro="I use this tools to speed up my daily life."
            >
                <div className="space-y-20">
                    <ToolsSection title="Workstation">
                        <Tool title="14” Acer E14 Laptop">
                            I was using an Intel-based 14” Intel Low End Notebook to survive.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Development tools">
                        <Tool title="Jetbrains IDEs">
                            I'm a huge fan of JetBrains because of its LSP and great customer service.
                        </Tool>
                        <Tool title="Nvim">
                            A good text editor which force me to learn LSP, vim keybindings and how to build a text editor from scratch without re-inventing the wheel.
                        </Tool>
                        <Tool title="Gnome Terminal">
                         Minimal and easy to use terminal for ubuntu.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Productivity">
                        <Tool title="Notion">
                            The great note taking app I've found in this universe.
                        </Tool>

                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
