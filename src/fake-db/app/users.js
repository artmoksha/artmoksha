import mock from "../mock";

const users = [
    {
        id: 1,
        username: "demodulation463",
        avatar: "https://placeimg.com/332/332/people?t=1613813057132",
        email: "rubi@ortwein.com",
        name: "Rubi Ortwein",
        country: "Syria",
        role: "creator",
        status: "active",
        type: "Creator",
        is_verified: false,
        social_links: {
            twitter: "https://twitter.com/adoptionism744",
            facebook: "https://www.facebook.com/adoptionism664",
            instagram: "https://www.instagram.com/adopt-ionism744/",
            github: "https://github.com/madop818",
            codepen: "https://codepen.io/adoptism243",
            slack: "@adoptionism744"
        },
        artworks: [],
        collections: []
    },
    {
        id: 2,
        username: "undivorced341",
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        email: "donnette@charania.com",
        name: "Donnette Charania",
        country: "Iraq",
        role: "collector",
        status: "active",
        type: "Collector",
        is_verified: true,
        social_links: {
            twitter: "https://twitter.com/adoptionism744",
            facebook: "https://www.facebook.com/adoptionism664",
            instagram: "https://www.instagram.com/adopt-ionism744/",
            github: "https://github.com/madop818",
            codepen: "https://codepen.io/adoptism243",
            slack: "@adoptionism744"
        },
        artworks: [],
        collections: []
    },
    {
        id: 3,
        username: "bumbo426",
        avatar: "https://placeimg.com/332/332/people?t=1613813057132",
        email: "ardith@duffett.com",
        name: "Ardith Duffett",
        country: "Estonia",
        status: "active",
        role: "creator",
        type: "Creator",
        is_verified: false,
        department: "sales",
        social_links: {
            twitter: "https://twitter.com/adoptionism744",
            facebook: "https://www.facebook.com/adoptionism664",
            instagram: "https://www.instagram.com/adopt-ionism744/",
            github: "https://github.com/madop818",
            codepen: "https://codepen.io/adoptism243",
            slack: "@adoptionism744"
        },
        artworks: [],
        collections: []
    },
    {
        id: 4,
        username: "ectodactylism214",
        avatar: "https://picsum.photos/200/300",
        email: "antone@berman.com",
        name: "Antone Berman",
        country: "India",
        role: "collector",
        type: "Collector",
        status: "blocked",
        is_verified: true,
        department: "sales",
        social_links: {
            twitter: "https://twitter.com/adoptionism744",
            facebook: "https://www.facebook.com/adoptionism664",
            instagram: "https://www.instagram.com/adopt-ionism744/",
            github: "https://github.com/madop818",
            codepen: "https://codepen.io/adoptism243",
            slack: "@adoptionism744"
        },
        artworks: [],
        collections: []
    }
]
// GET DATA
mock.onGet("/api/users").reply(200, users)
