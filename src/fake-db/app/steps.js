import mock from "../mock";

const steps = [
    {
        "title": "Verify Your Work",
        "description": "Digitally sign your work by creating a tokenized certificate.",
        "image": "images/steps/con-authority.svg",
        "icon": 'images/steps/icon-authority.svg',
        "arrow": {},
        "meta": ""
    },
    {
        "title": "Upload Your Asset",
        "description": "Set a price or let collectors bid on your art in the digital art marketplace.",
        "image": "images/steps/icon-upload.svg",
        "icon": 'images/steps/upload-icon.svg',
        "arrow": {},
        "meta": ""
    },
    {
        "title": "Publish and Sell Artwork",
        "description": "Set a price or let collectors bid on your art in the digital art marketplace.",
        "image": "images/steps/icon-sell.svg",
        "icon": 'images/steps/icon-sell.svg',
        "arrow": {},
        "meta": ""
    },
    {
        "title": "Collect, Resell and Earn",
        "description": "Set a price or let collectors bid on your art in the digital art marketplace.",
        "image": "images/steps/icon-earn.svg",
        "icon": 'images/steps/icon-earn.svg',
        "arrow": {},
        "meta": ""
    }
];

mock.onGet("/api/steps").reply(200, steps)
