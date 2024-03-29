import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Accordion } from 'react-bootstrap-accordion'

const FAQ = () => {
    const [data] = useState(
        [
            {
                key: "0",
                title: 'How do I get the MXDT?',
                text: 'Please go to www.sushi.com and find the "Miso Marketplace". Under the "Miso Marketplace" you can buy the MXDT with USDC stablecoins. However, please make sure your wallet is connected to Sushi and also set to the Polygon chain. Please also make sure you have enough USDC stablecoin. You can use any standard wallet e.g. Metamask to buy sufficient USDC stablecoins with your credit- or debit-card.'
            },
          {
                key: "1",
                title: 'How do I receive a scholarship?',
                text: 'Right now, we are still building out our platform, but you can sign-up to the applicant list. You can move up the waitlist by inviting people to our Discord community. Our scholarships will be assigned, as soon as the platform goes live by providing a detailed process within your user-acount.'
            },
               {   key: "2",
                show: "show",
                title: 'Why should I trade an ingame asset, skin or NFT?',
                text: 'We are the Ebay of item-trading, but we use blockchain technology. Similar to old books or clothes you can sell on Ebay, you can convert unused game items, skins or NFTs into money by using our platform. To be safe, we will offer a 30-day return guarantee if requested.'
            },
            {
                key: "3",
                title: 'Which games do you support?',
                text: 'Similar to Ebay our platform does not restrict games, items, skins, NFTs or currencies in any form. As long as it is a legal trade and there is a buyer or seller for a specific game item or currency, the game will be part of our platform and community.'
            },
            {
                key: "4",
                title: 'How fast can I receive payment?',
                text: 'For NFTs and blockchain games the transaction is done in real-time. If it is a non-blockchain game item, skin or currency, you will have to execute the trade with an ingame hand-over, but you will still get paid in MXDT, which is faster than any FIAT payment'
            },
            {
                key: "5",
                title: 'Is the MXDT token a safe investment?',
                text: 'Our token is different to other crypto assets, as we use ingame assets and game currencies as underlying assets. This means that in times of an increased sell-off the MXDT token´s value is always ensured through the countervalue of our treasury of already traded virtual goods on various global marketplaces.Please check our Whitepaper for more information.'
            },
            {
                key: "6",
                title: 'Can I also be a scholarship investor?',
                text: 'Absolutely. First, you need to be a token-holder of MXDT tokens and have your wallet connected to our platform. In your account choose "scholarship" and select "Investor" and then fill out the form. Your investment will automatically be part of the overal scholarship funding. You can monitor the status of your investment in your account.'
            },
            {
                key: "7",
                title: 'What kind of wallets do you support?',
                text: 'During the starting phase we will provide integrations with Metamask, Binance, Coinbase. Later on we will offer more wallet integrations.'
            },
            {
                key: "8",
                title: 'Who is behind The Metaverse Exchange DAO?',
                text: 'The Metaverse Exchange DAO is a run by a group of technology executives who all have worked in relevant industries such as banking, fintech, gaming, internet infrastructure and live-operations. We also live from a lively community of several thousand gamers and guild members who contribute daily to our DAO.'
            },
            {
                key: "9",
                title: 'Why is the management anonymous?',
                text: 'A standard scam in crypto is to hijack the identity of an employee of a bigger crypto exchange or protocol and pretend you are helping during a problem, while instead they drain your wallet or account. To avoid this scam we have decided to not reveal our identities to a bigger audience at this point For institutional investors we can arrange face-to-face calls or meetings.'
            },        
            {
                key: "10",
                title: 'What is a DAO anyway?',
                text: 'A DAO is a Decentralized Autonomous Organization. This means that the organization is set up in a decentralized way with most decisions being my by software written in smartcontracts. These smartcontracts can be developed in a way that it is impossible for humans to change decisions in a subjective or personal direction. Intead the smartcontracts are predefined and will be continuously be executed, e.g. how many tokens should be circulated, how many scholarships should be granted. More information on this is given in our Whitepaper especially in regards to the which sort of decisions are taken by token holders.'
            },
            

       
        ]
    )
    return (
        <div>
            <Header />
            <section className="flat-title-page inner faq-section">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">FAQ</h1>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Anything unclear yet? Do you need support?
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                Let us try helping you by answering the most frequent questions we hear from our gamers.
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {
                                    data.map((item,index) => (
                                        <Accordion key={index} title={item.title} >
                                            <p>{item.text}</p>
                                        </Accordion>
                                    ))
                                }                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default FAQ;
