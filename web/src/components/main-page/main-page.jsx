import React, {useRef} from 'react';
import Contact from '../contacts/contact';
import Footer from '../footer/footer';
import NavigationSite from '../navigation-site/navigation-site';
import About from '../about/about';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Services from '../services/services';

const MainPage = () => {

    const sceneEl = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const servicesRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const createRefSectiosArray = () => {
        return new Array([aboutRef, skillsRef, servicesRef, projectsRef,contactRef])
    }

    // useEffect(() => {
    //     const parallaxInstance = new Parallax(sceneEl.current, {
    //       relativeInput: true,
    //       hoverOnly: true
    //     })

    //     parallaxInstance.enable();

    //     return () => parallaxInstance.disable();
    //   }, [])


    const handleMouseMove = (evt) => {
        sceneEl.current.querySelectorAll(`.banners__icon`).forEach((picture) => {
            const speed = picture.getAttribute(`data-speed`);
            console.log(`speed`, speed)
            const x = (document.querySelector(`.banners`).offsetWidth - evt.pageX * speed)/100;
            const y = (document.querySelector(`.banners`).offsetHeight - evt.pageY * speed)/100;
            picture.style.transform = `translateX(${x}px) translateY(${y}px)`
            console.log(`x`, x)
            console.log(`y`, y)
        }

        )
        // console.log(`all svg`, sceneEl.current.querySelectorAll(`.banners__icon`))
    }
    return <>
        <NavigationSite isMainPage={true} elementsArray={createRefSectiosArray}/>
        <main className="main">
            <h1 className="visually-hidden">Portfolio site of Alexandra Kuchynskaya</h1>
            <section className="banners"  onMouseMove={(evt)=> handleMouseMove(evt)}>
                <h2 className="visually-hidden banners__introduction">Banner</h2>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div ref={sceneEl}>
                </div>
                <div className="banners__wrapper">
                    <p className="banners__intro">Hey! I’m <span className="banners__name">Alexandra Kuchinskaya</span> I'm front-end developer.
                    </p>
                </div>
                <a href="#contacts" className="container-site button banners__link">Contact me</a>
            </section>
            <About  />
            <Skills  />
            <Services />
            <Projects />
            <Contact/>
        </main>
        <Footer isMainPageFooter={true}/>
    </>
}

export default MainPage;
