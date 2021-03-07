import mock from './../mock'


const faqs = [
    {
        "title": "NFT? ERC-721 tokens?",
        "content": "NFT stands for non-fungible tokens like ERC-721 (a smart contract standard) tokens which are hosted on Ethereum’s own blockchain. NFTs are unique digital items such as collectibles or artworks or game items. As an artist, by tokenizing your work you both ensure that it is unique and brand it as your work. The actual ownership is blockchain-managed.",
        "icon": "notes.svg",
    },
    {
        "title": "What is CryptoArt?",
        "content": "Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.",
        "icon": "notes.svg",
    },
    {
        "title": "What is verification?",
        "content": "Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.",
        "icon": "notes.svg",
    },
    {
        "title": "What does “minting” mean?",
        "content": "The process of tokenizing your work and creating an NFT (see above).\n",
        "icon": "notes.svg",
    },
];
mock.onGet('api/faqs').reply(200, faqs)