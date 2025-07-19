import Section from '../shared/components/ui/layout-components/Section'
import { gsap } from 'gsap';
import useGSAP from '../shared/hooks/useGSAP';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);

function SlidingText() {
    useGSAP(() => {
        gsap.to('#parent h2', {
            transform: 'translateX(-70%)',
            scrollTrigger: {
                trigger: '#parent',
                scroller: 'body',
                markers: true,
                start: 'top 0%',
                end: 'top -150%',
                scrub: true,
                pin: true
            }
        });
    });

    return (
        <>
            <Section>
                <h1 className="text-4xl font-bold text-center mb-8">Sliding Text Animation</h1>
            </Section>
            {Array.from({ length: 2 }, (_, i) => (
                <Section key={i} className="bg-gray-200">
                    <h2 className="text-2xl font-semibold text-center">Slide {i + 1}</h2>
                </Section>
            ))}
            <Section id="parent" className="bg-gray-300 justify-start">
                <h2 className="text-[600px] px-[10vw] font-semibold text-center">Animation</h2>
            </Section>
            {Array.from({ length: 1 }, (_, i) => (
                <Section key={i} className="bg-gray-200">
                    <h2 className="text-2xl font-semibold text-center">Slide {i + 1}</h2>
                </Section>
            ))}
        </>
    )
}

export default SlidingText