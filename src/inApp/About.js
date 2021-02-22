import React from 'react'
import { ReactComponent as Check } from '../icons/check-solid.svg';
import { ReactComponent as Clock } from '../icons/clock-regular.svg';
import { ReactComponent as List } from '../icons/list-solid.svg';


const About = () => {
    return (
        <section className={"about"}>
            <div className={"about__container"}>
                <div className={"about__box"}>
                    <Check className="about__image"/>
                    <div className={"about__title"}>
                        Lorem ipsum dolor sit amet
                    </div>
                        <div className={"about__text"}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Accusantium amet architecto
                            autem blanditiis dolores eum facere harum itaque laborum
                            molestias nobis, officia porro temporibus?
                        </div>

                </div>
                <div className={"about__box"}>
                    <Clock className="about__image"/>
                    <div className={"about__title"}>
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className={"about__text"}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusantium amet architecto
                        autem blanditiis dolores eum facere harum itaque laborum
                        molestias nobis, officia porro temporibus?
                    </div>
                </div>
                <div className={"about__box"}>
                    <List className="about__image"/>
                    <div className={"about__title"}>
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className={"about__text"}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusantium amet architecto
                        autem blanditiis dolores eum facere harum itaque laborum
                        molestias nobis, officia porro temporibus?
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About