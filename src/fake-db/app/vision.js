import mock from "../mock";

const vision = [
    {
        "name": "Authority",
        "image": "images/values/icon-authority.svg",
        "description": "Every digital creation is digitally signed by the creator and permanently recorded and verified through the blockchain.",
    },
    {
        "name": "Trust",
        "image": "images/values/icon-trust.svg",
        "description": "Every digital creation is digitally signed by the creator and permanently recorded and verified through the blockchain.",
    },
    {
        "name": "Ownership",
        "image": "images/values/icon-ownership.svg",
        "description": "Non-Fungible Token (NFT), the future of digital ownership",
    },
    {
        "name": "Virtual Art Gallery",
        "image": "images/values/icon-virtual-reality.svg",
        "description": "Every digital creation is digitally signed by the creator and permanently recorded and verified through the blockchain.",
    },
    {
        "name": "Passive Income",
        "image": "images/values/icon-passive-income.svg",
        "description": "Every digital creation is digitally signed by the creator and permanently recorded and verified through the blockchain.",
    },
    {
        "name": "Global Reach",
        "image": "images/values/icon-global-reach.svg",
        "description": "Every digital creation is digitally signed by the creator and permanently recorded and verified through the blockchain.",
    },
];

mock.onGet("/api/vision").reply(200, vision)

