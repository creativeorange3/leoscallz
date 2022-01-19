// import ThemeSwitch from "../components/elements/DarkLight";

import { getToken, getTokenInfo } from '../services';
import LayoutFront from "../components/layout/LayoutFront";

// import pancake from '../assets/pancake.svg'
// import poocoin from '../assets/poocoin.svg'
// import reddit from '../assets/reddit.svg'
// import twitter from '../assets/twitter.svg'
// import telegram from '../assets/telegram.png'

import Head from 'next/head'

function Item({ token }) {

    const buyTokenomicsArr = token.buyTokenomics.split(',');
    const sellTokenomicsArr = token.sellTokenomics.split(',');

    const extraLinksArray = token.extraLinks ? token.extraLinks.split(' - ') : undefined;

    return (
        <>
            <LayoutFront
                pageClass={"front"}
            >
                <Head>
                    <title>{token.name}</title>
                    <link rel="icon" href={token.tokenLogo.url} />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className="item-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="top-bid">
                                    <div className="card-body">
                                        <div className="row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <div className="col-md-6">
                                                <img
                                                    src={token.tokenImage.url}
                                                    className="img-fluid rounded"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <h3 style={{ textAlign: 'center', padding: '20px 0px' }}>
                                                    {token.name}
                                                </h3>
                                                <div className="d-flex align-items-center mb-3">
                                                    <img
                                                        src={token.tokenLogo.url}
                                                        alt=""
                                                        className="me-3"
                                                        style={{ width: '80px' }}
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h5 className="mb-0">
                                                            {token.catchPhrase}
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex" style={{ justifyContent: 'space-around', padding: '20px 0px' }}>
                                                    <a href={`https://pancakeswap.finance/swap?outputCurrency=${token.contract}`} target={'_blank'}><img src="/images/pancake.svg" alt="" width="40" /></a>
                                                    <a href={`https://poocoin.app/tokens/${token.contract}`} target={'_blank'}><img src="/images/poocoin.svg" alt="" width="40" /></a>
                                                    <a href={token.telegram} target={'_blank'}><img src="/images/telegram.png" alt="" width="40" /></a>
                                                    {token.twitter && <a href={token.twitter} target={'_blank'}><img src="/images/twitter.svg" alt="" width="40" /></a>}
                                                </div>
                                                <div style={{ padding: '5px', textAlign: 'center', margin: "10px 0px" }} className="bid mb-3 card" onClick={() => { navigator.clipboard.writeText(token.contract) }}>
                                                    <span>{token.contract}</span>
                                                </div>
                                                <p className="mb-3" style={{ padding: "20px 0px" }}>
                                                    {token.description}
                                                </p>
                                                <h4 className="card-title mb-3">
                                                    Tokenomics
                                                </h4>
                                                <div className="bid mb-3 card">
                                                    <div className="activity-content card-body py-0">
                                                        <ul>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="activity-user-img me-3">
                                                                        Buy tax:
                                                                    </div>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">
                                                                            {token.buyTax}
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className=" text-muted">
                                                                        {buyTokenomicsArr.map(part => (
                                                                            <><span>{part}</span><br /></>
                                                                        ))}
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="activity-user-img me-3">
                                                                        Sell tax:
                                                                    </div>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">
                                                                            {token.sellTax}
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className=" text-muted">
                                                                        {sellTokenomicsArr.map(part => (
                                                                            <><span>{part}</span><br /></>
                                                                        ))}
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h4 className="card-title mb-3">
                                                    Token Details
                                                </h4>
                                                <div className="bid mb-3 card">
                                                    <div className="activity-content card-body py-0">
                                                        <ul>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                                                                    <div className="activity-user-img me-3">
                                                                        Total Supply:
                                                                    </div>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">
                                                                            {token.totalSupply}
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                                                                    <div className="activity-user-img me-3">
                                                                        Token Decimals:
                                                                    </div>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">
                                                                            {token.decimals}
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                                                                    <div className="activity-user-img me-3">
                                                                        Token Ticker:
                                                                    </div>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">
                                                                            {token.ticker}
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {extraLinksArray && <>
                                                    <h4 className="card-title mb-3">
                                                        Extra Links
                                                    </h4>
                                                    <div className="bid mb-3 card">
                                                        <div className="activity-content card-body py-0">
                                                            <ul>
                                                                {extraLinksArray.map((link, i) => (
                                                                    <li className="d-flex justify-content-between align-items-center">
                                                                        <div className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                                                                            <div className="activity-info">
                                                                                <h5 className="mb-0">
                                                                                    <a href={link.split('+')[1]} target={'_blank'}>{link.split('+')[0]}</a>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>}
                                                <h4 className="card-title mb-3">
                                                    Chart
                                                </h4>
                                                <div className="bid mb-3 card">
                                                    <div className="activity-content card-body py-0">
                                                        <ul>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">
                                                                            Coming soon!
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>   <div className="bid mb-3 card">
                                                    <div className="activity-content card-body py-0">
                                                        <ul>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">
                                                                            Your Ad here
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
}
export default Item;


export async function getStaticProps({ params }) {
    const data = await getTokenInfo(params.slug);

    return {
        props: { token: data }
    }
}

export async function getStaticPaths() {
    const tokens = await getToken();

    return {
        paths: tokens.map(({ node: { slug } }) => ({ params: { slug } })), fallback: false
    }
}
