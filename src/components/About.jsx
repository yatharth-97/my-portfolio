import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Dynamic and results-driven professional skilled in both front-end
            and back-end web development. Proficient in various programming
            languages and frameworks, showcasing expertise in designing
            user-friendly interfaces, building strong databases, and
            implementing efficient server logic. Adept at applying responsive
            web design principles to ensure smooth user experiences across
            different devices and screen sizes.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
