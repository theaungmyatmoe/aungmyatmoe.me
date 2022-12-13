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
                title="Software I use, I love, and other things I recommend."
                intro="I use this tools to speed up my daily life."
            >
                <div className="space-y-20">
                    <ToolsSection title="Workstation">
                        <Tool title="14” Acer E14 Laptop">
                            I'm currently using an Intel-based 14” Acer Low End Notebook, Rapoo wireless mouse which is
                            my
                            favorite brand and integrated keyboard which comes with Acer.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Development tools">
                        <Tool title="Jetbrains IDEs">
                            I'm a huge fan of Jetbrains products. They give me an opportunity not to memorize language
                            syntax and built-in functions or even a framework's APIs. And also, they come with built-in
                            linter and autocompletion which is my favorite part of their IDEs.
                        </Tool>
                        <Tool title="Nvim">
                            Nvim is good text editor which is a new flavor of vim intended to be customizable for
                            developers. It forces me to learn Language Server Protocols (LSP), vim keybindings and how to
                            build a full-fledged text
                            editor a.k.a custom IDE from scratch without re-inventing the wheel.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Productivity">
                        <Tool title="Notion">
                            Notion is my note taking app of choice and will probably continue to be so for a long time.
                        </Tool>

                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
