import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

export const metadata = {
    title: 'Uses',
    description: 'Software I use, I love, and other things I recommend.'
};

function ToolsSection({ children, ...props }) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    );
}

function Tool({ title, href, children }) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    );
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
                        <Tool title="13.3” Mac Book Pro">
                            I'm currently using an Mac Book Pro. I'm a huge fan
                            of Apple products. I love the way they design their
                            products and how they work.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Software Development">
                        <Tool title="Jetbrains IDEs">
                            I'm a huge fan of Jetbrains products. They give me
                            an opportunity not to memorize language syntax and
                            built-in functions or even a framework's APIs. And
                            also, they come with built-in linter and
                            autocompletion which is my favorite part of their
                            IDEs.
                        </Tool>
                        <Tool title="Nvim">
                            Nvim is good text editor which is a new flavor of
                            vim intended to be customizable for developers. It
                            forces me to learn Language Server Protocols (LSP),
                            vim keybindings and how to build a full-fledged text
                            editor a.k.a custom IDE from scratch without
                            re-inventing the wheel.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Productivity">
                        <Tool title="Notion">
                            Notion is my note taking app of choice and will
                            probably continue to be so for a long time.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Project Management">
                        <Tool title="Jira">
                            I love the way Jira works. It's a great tool for
                            project management and issue tracking.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Health Management">
                        <Tool title="Google Fit">
                            It enforce me to walk at least 5,000 steps a day. As
                            a developer, I spend most of my time sitting in
                            front of my computer. So, it's a great tool to keep
                            me healthy.
                        </Tool>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    );
}
