import React from 'react';
import hero from '../assets/images/hero.svg';

const About = () => {
    return (
        <div id="about" className="relative bg-white z-9">
            <section className="flex flex-col items-center justify-center min-h-screen py-16 mx-2">
                <div className="container grid md:grid-cols-3 gap-8 items-center mx-[256px]">
                    <div className="px-6 md:px-0 mx-auto">
                        <img
                            className="rounded-full w-4/5 ml-10"
                            src={hero}
                        ></img>
                    </div>
                    <div className="md:col-span-2 px-3 text-lg sm:text-lg xl:text-xl mx-auto md:mr-20 xl:mr-42">
                        <div className="bg-blue-900 inline-block px-5">
                            <p className=" text-yellow-400 font-medium text-center py-3 sm:py-5 md:py-4">
                                About Me
                            </p>
                        </div>
                        <p className="font-light py-5 leading-loose text-black-800">
                            Hi, I'm a Software Engineer who is passionate about
                            building softwares and engineering data pipeline
                            solutions. I've built web applications using{' '}
                            <strong>React.js , Next.js</strong> and{' '}
                            <strong>Tailwind</strong> in the front-end, as well
                            as utilized <strong>Node JS</strong>,{' '}
                            <strong>MySQL</strong>, <strong>Azure</strong> cloud
                            resources for the back-end. I enjoy constructing ETL
                            pipelines using <strong>SQL</strong> and{' '}
                            <strong>Python</strong>, and I'm proficient in using{' '}
                            <strong>Power BI</strong> as business intelligence
                            tool for data modeling and visualization.
                        </p>
                        <p className="font-light py-5 leading-loose text-gray-800">
                            I began my career as a Certified Public Accountant
                            (CPA) and have been involved in auditing IT
                            applications and engaging data analytics for
                            internal auditing in a multinational company. From
                            there, I gained and honed my business and IT acumen,
                            problem solving, critical thinking and collaboration
                            skills. Eventually, I successfully transitioned my
                            career to my original childhood passion: becoming a
                            programmer.
                        </p>
                        <p className="font-light py-5 leading-loose text-gray-800">
                            I'm a lifelong learner, self-starter, advocates the
                            power of teamwork and a little bit of a geek now and
                            then.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
