import React from "react";


class Artist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let headerStyle = {
            backgroundImage: 'url("/img/slider/art-moksha-slide.jpeg")',
            height: '200px',
            backgroundSize: '100%'
        }
        return (

            <React.Fragment>
                <section className={'am-section am-section-artwork'}>
                    <section style={headerStyle} className={'am-artwork-header'}>
                        <section className={'am-section-container container'}>
                            <h1>Thangka Collections</h1>
                            <p>
                                The way we value internet-native items is changing with the development of blockchain
                                technology.
                                Kittens, punks, and memes are now trading digital wallets for cryptocurrencies, and the
                                online collectibles
                                market is taking shape before our eyes. Scarce digital property is cropping up in all
                                kinds of industries
                                around the world, and OpenSea is on a mission
                                to house internet goods from all corners of the ecosystem. Own, buy, and sell rare and
                                exclusive NFTs
                                from CryptoKitties, Axie Infinity, and beyond.
                            </p>
                        </section>
                    </section>
                    <section className={'am-collection-filter'}></section>
                    <section className={'am-collection-content'}>

                    </section>
                </section>
            </React.Fragment>
        )

    }
}

export default Artist