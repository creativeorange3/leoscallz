import dynamic from 'next/dynamic';
import Link from "next/link";
const ThemeSwitch = dynamic(() => import('../../components/elements/ThemeSwitch'), {
    ssr: false
})
import React, { useState } from "react";
function HeaderLanding() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (
        <>
            <div className="header landing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <nav className="navbar navbar-expand-lg navbar-light" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div className="brand-logo">
                                        <Link href="/"><a>
                                           leos shit
                                        </a></Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <ThemeSwitch/>
                                        {/* <Link href="/connect"><a className="btn btn-primary">Connect</a></Link> */}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeaderLanding;
