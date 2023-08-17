import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function SpeakingSection({ children, ...props }) {
    return (
        <Section {...props}>
            <div className="space-y-16">{children}</div>
        </Section>
    );
}

function Appearance({ title, description, event, cta, href }) {
    return (
        <Card as="article">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Eyebrow decorate>{event}</Card.Eyebrow>
            <Card.Description>{description}</Card.Description>
            {cta && <Card.Cta>{cta}</Card.Cta>}
        </Card>
    );
}

export const metadata = {
    title: 'Speaking',
    description:
        "I've had the privilege of presenting at various local and global events and have been featured in numerous podcast interviews"
};

export default function Speaking() {
    return (
        <SimpleLayout
            title="I've had the privilege of presenting at various local and global events."
            intro="Dive into my world of podcasting as I share my love for audio storytelling and content creation. Join me in exploring the captivating realm of podcasts and how they've become a major part of my creative journey"
        >
            <div className="space-y-20">
                <SpeakingSection title="Conferences">
                    <Appearance
                        href="https://lara.camp/"
                        title="Leveling Up: Navigating the Junior to Senior Software Engineering Journey"
                        description="Discover how to evolve from a junior to senior software engineer with expert insights. Learn technical mastery, leadership skills, and effective communication strategies. Overcome challenges, embrace growth, and craft your path to success in the software development world."
                        event="Lara Camp 2023"
                        cta="Register Now"
                    />
                    {/*<Appearance*/}
                    {/*    href="#"*/}
                    {/*    title="Lessons learned from our first product recall"*/}
                    {/*    description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."*/}
                    {/*    event="Business of Startups 2020"*/}
                    {/*    cta="Watch video"*/}
                    {/*/>*/}
                </SpeakingSection>
                {/*<SpeakingSection title="Podcasts">*/}
                {/*    <Appearance*/}
                {/*        href="#"*/}
                {/*        title="Using design as a competitive advantage"*/}
                {/*        description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."*/}
                {/*        event="Encoding Design, July 2022"*/}
                {/*        cta="Listen to podcast"*/}
                {/*    />*/}
                {/*    <Appearance*/}
                {/*        href="#"*/}
                {/*        title="Bootstrapping an aerospace company to $17M ARR"*/}
                {/*        description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."*/}
                {/*        event="The Escape Velocity Show, March 2022"*/}
                {/*        cta="Listen to podcast"*/}
                {/*    />*/}
                {/*    <Appearance*/}
                {/*        href="#"*/}
                {/*        title="Programming your company operating system"*/}
                {/*        description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."*/}
                {/*        event="How They Work Radio, September 2021"*/}
                {/*        cta="Listen to podcast"*/}
                {/*    />*/}
                {/*</SpeakingSection>*/}
            </div>
        </SimpleLayout>
    );
}
