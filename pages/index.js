import React, { useState } from "react";
import TopCollection from "../components/elements/TopCollection";
import LayoutFront from "../components/layout/LayoutFront";
import 'react-modal-video/css/modal-video.css';
import dynamic from "next/dynamic";
import { getToken } from '../services';

import Link from "next/link"

const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

const Index = ({ tokenData }) => {
    const [isOpen, setOpen] = useState(false);

    const mainProject = tokenData.find(x => x.node.isMain);
    const hotProjects = tokenData.filter(x => x.node.isHot);
    const launchedProjects = tokenData.filter(x => x.node.isLaunched);
    const presaleProjects = tokenData.filter(x => !x.node.isLaunched);

    console.log(mainProject)

    return (
        <>
            <LayoutFront
                pageClass={"front"}
            >
                <div className="intro1" style={{ paddingBottom: "50px" }}>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-5 col-lg-6 col-12">
                                <div className="intro-content  my-5">
                                    <h1 className="mb-3">
                                        Discover, research, and buy
                                        <span> most promising projects on BSC</span>
                                    </h1>
                                    <p>
                                        find everything you need in one place
                                    </p>
                                </div>
                            </div>
                            <Link href="/spooderman">
                                <div className="col-xl-5 col-lg-6 col-12" style={{ cursor: 'pointer' }}>
                                    <div className="intro-slider">
                                        <div className="slider-item">
                                            <img
                                                src={mainProject.node.tokenImage.url}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <div className="slider-item-avatar">
                                                <img
                                                    src={mainProject.node.tokenLogo.url}
                                                    alt=""
                                                />
                                                <div>
                                                    <h5>{mainProject.node.name}</h5>
                                                    <p>{mainProject.node.catchPhrase}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="notable-drops section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center d-flex justify-content-between mb-3">
                                    <h2>Hot Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {hotProjects.map(project => (
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="card">
                                        <img
                                            className="img-fluid card-img-top"
                                            src={project.node.tokenImage.url}
                                            alt=""
                                        />
                                        <div className="card-body">
                                            <div className="notable-drops-content-img"></div>
                                            <h4 className="card-title">
                                                {project.node.name}
                                            </h4>
                                            <p>
                                                {project.node.catchPhrase}
                                            </p>
                                            <Link href={`/${project.node.slug}`}><a>
                                                Learn more
                                                <i className="bi bi-arrow-right-short"></i>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="trending-category section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center d-flex justify-content-between mb-3">
                                    <h2>Upcoming projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            {presaleProjects.map(presale => (<div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card items">
                                    <div className="card-body">
                                        <div className="items-img position-relative">
                                            <img
                                                src={presale.node.tokenImage.url}
                                                className="img-fluid rounded mb-3"
                                                alt=""
                                            />
                                            <img
                                                src={presale.node.tokenLogo.url}
                                                className="creator"
                                                width="50"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="card-title">{presale.node.name}</h4>
                                        <p></p>
                                        <div className="d-flex justify-content-between">
                                            <div className="text-start">
                                                <p className="mb-2">{presale.node.catchPhrase}</p>
                                            </div>
                                            
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                          <a href={presale.node.telegram} target={'_blank'} className="btn btn-primary">
                                                Website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>


                <div className="top-collection section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2>Leos choice</h2>
                                    <p>
                                        Projects that trust Leo and Leo trusts them
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <TopCollection launchedProjects={launchedProjects} />
                        </div>
                    </div>
                </div>

                <div className="create-sell section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2>Become a part of Leo family</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="create-sell-content">
                                    <div className="create-sell-content-icon">
                                        <i className="bi bi-shield-check"></i>
                                    </div>
                                    <div>
                                        <h4>Only Trusted Projects</h4>
                                        <p>
                                            Leo doesn't accept just any project. Every project you see here is trusted, has a solid plan and has a big moonshot potential.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="create-sell-content">
                                    <div className="create-sell-content-icon">
                                        <i className="bi bi-x-diamond"></i>
                                    </div>
                                    <div>
                                        <h4>Advertise on different places</h4>
                                        <p>
                                            By getting a spot on leosweb, you automaticall get a call on @leoscalls alongside posts in multiple private investor groups.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="create-sell-content">
                                    <div className="create-sell-content-icon">
                                        <i className="bi bi-circle-half"></i>
                                    </div>
                                    <div>
                                        <h4>Become an Ape 2 project</h4>
                                        <p>
                                            In most serious investor groups, website is needed to be listed as Ape 2.
                                            Leos world provides just that - you can start attracting more investors!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="create-sell-content">
                                    <div className="create-sell-content-icon">
                                        <i className="bi bi-circle-half"></i>
                                    </div>
                                    <div>
                                        <h4>List your presale on Leos world</h4>
                                        <p>
                                            Leos world doesn't only list launched tokens! You can list your presale to attract more early bird investors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Index;

export async function getStaticProps() {
    const tokenData = (await getToken()) || [];

    return {
        props: { tokenData }
    }
}