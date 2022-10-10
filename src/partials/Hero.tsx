import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Tiago Granja</GradientText> 👋
        </>
      }
      description={
        <>
          I am a cybersecurity enthusiast, that mainly loves the offensive side
          of hacking. I have a degree in cybersecurity and am currently doing a
          masters in the same area. I am focusing on bug bounties, but I also
          plan to continue my journey in the CTF world. My main goal with this
          website is to share some cool resources, projects, and write-ups about
          some bugs and machines.
        </>
      }
      /* ,{' '}
      <a className="text-cyan-400 hover:underline" href="/">
        consectetur
      </a>{' '} */

      avatar={
        <img
          className="w-112 h-80"
          src="/assets/images/tiago.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/flikwow">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/tiago-granja-a2ba73196/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
