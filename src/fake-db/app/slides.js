import mock from './../mock'


// 20210305160159
// https://api.opensea.io/api/v1/assets?format=json&limit=5&offset=1000&order_direction=desc
const slides = [

    {
        "id": 586132,
        "token_id": "556324",
        "num_sales": 2,
        "background_color": "dfdffa",
        "image_url": "https://lh3.googleusercontent.com/wtshNy0tq4_q5_QLZwKzwyUfaPEvx6y_DBuz_nivDRiw0ZVN4yWip_6-NuKa9fC6nFHb7aO7cv5cz0k-WDPdbi6FkQ",
        "image_preview_url": "https://lh3.googleusercontent.com/wtshNy0tq4_q5_QLZwKzwyUfaPEvx6y_DBuz_nivDRiw0ZVN4yWip_6-NuKa9fC6nFHb7aO7cv5cz0k-WDPdbi6FkQ=s250",
        "image_thumbnail_url": "https://lh3.googleusercontent.com/wtshNy0tq4_q5_QLZwKzwyUfaPEvx6y_DBuz_nivDRiw0ZVN4yWip_6-NuKa9fC6nFHb7aO7cv5cz0k-WDPdbi6FkQ=s128",
        "image_original_url": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/556324.png",
        "animation_url": null,
        "animation_original_url": null,
        "name": "I love cucumber salad. Honestly,",
        "description": "I collect skorts and I love cucumber salad. Honestly, I would give up all my kibble to run a hamster farm. I look forward to slappin' da bass with you.",
        "external_link": "https://www.cryptokitties.co/kitty/556324",
        "asset_contract": {
            "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
            "asset_contract_type": "non-fungible",
            "created_date": "2018-01-23T04:51:38.832339",
            "name": "CryptoKitties",
            "nft_version": "1.0",
            "opensea_version": null,
            "owner": 463841,
            "schema_name": "ERC721",
            "symbol": "CKITTY",
            "total_supply": null,
            "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
            "external_link": "https://www.cryptokitties.co/",
            "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
            "default_to_fiat": false,
            "dev_buyer_fee_basis_points": 0,
            "dev_seller_fee_basis_points": 0,
            "only_proxied_transfers": false,
            "opensea_buyer_fee_basis_points": 0,
            "opensea_seller_fee_basis_points": 250,
            "buyer_fee_basis_points": 0,
            "seller_fee_basis_points": 250,
            "payout_address": null
        },
        "owner": {
            "user": null,
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/10.png",
            "address": "0xcc601972761b5f153e697a34d2921e5cca090ed4",
            "config": "",
            "discord_id": ""
        },
        "permalink": "https://opensea.io/assets/0x06012c8cf97bead5deae237070f9587f8e7a266d/556324",
        "collection": {
            "payment_tokens": [
                {
                    "id": 13689077,
                    "symbol": "ETH",
                    "address": "0x0000000000000000000000000000000000000000",
                    "image_url": "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
                    "name": "Ether",
                    "decimals": 18,
                    "eth_price": 1.0,
                    "usd_price": 1457.06
                },
                {
                    "id": 4645681,
                    "symbol": "WETH",
                    "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    "image_url": "https://lh3.googleusercontent.com/kPzD9AH9Xt4Vr7NXphLy2Yyf5ZWM0vfN_wMhJs0HWJpQjFZm0pcmZ880vcJQVLxPgdnOTEfUuYbkiaGxcTT_ZnCy",
                    "name": "Wrapped Ether",
                    "decimals": 18,
                    "eth_price": 1.0,
                    "usd_price": 1457.06
                },
                {
                    "id": 16206959,
                    "symbol": "CHERRY",
                    "address": "0x0eed7d6564fae0c22a7dc9ebb3db4a4c4a1473ee",
                    "image_url": "https://lh3.googleusercontent.com/DRoQ7e9zCHgk8CLcTpKxYTIIFyG8qzlsW3wPFY_NiVVdScylei8jbXHua49Bp--j7tNIvTYxftIwpEuatgUxsN8AeA",
                    "name": "Cherry",
                    "decimals": 18,
                    "eth_price": null,
                    "usd_price": null
                },
                {
                    "id": 12182941,
                    "symbol": "DAI",
                    "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "image_url": "https://lh3.googleusercontent.com/9wRB1clkMysBIYUd3SYnDLCVeZ1biqgAXLHtIYeWv_oG5XPgTYayh47mZclHw81O6SfJhl3ZhICNApiKfGSeMIc",
                    "name": "Dai Stablecoin",
                    "decimals": 18,
                    "eth_price": 0.0006931766708303021,
                    "usd_price": 1.01
                },
                {
                    "id": 4645815,
                    "symbol": "GUSD",
                    "address": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
                    "image_url": "https://lh3.googleusercontent.com/MLKbcx1oxhZjkXzsQM-fju8R3hHqsu-mGpFzivWMadH7bXT_kw48-rrD6os594lPY0x7MU-QGLy4ZudX1ePTx-Y",
                    "name": "Gemini dollar",
                    "decimals": 2,
                    "eth_price": 0.0006803961401726765,
                    "usd_price": 0.991378
                },
                {
                    "id": 5098533,
                    "symbol": "RFR",
                    "address": "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
                    "image_url": "https://lh3.googleusercontent.com/XB1KohVuy2E87R324IGijVhDZeHKhlkiB_TcpAH8sVTCdaA5brsYyxYXNzFK6SE2qGAtfya7FVzB9rgJBYQrjJVqeA",
                    "name": null,
                    "decimals": 4,
                    "eth_price": 4.638161777826583e-06,
                    "usd_price": 0.00675808
                },
                {
                    "id": 4403908,
                    "symbol": "USDC",
                    "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    "image_url": "https://lh3.googleusercontent.com/PxC_K0Y22A1Xs0CeVknf4YUSxSqH_1bPCG0a4uD7WRkwbbtinqryjDEvoTYSbBFDXXTliuyo38-Y_ecNUEj0fMimQA",
                    "name": "USD//C",
                    "decimals": 6,
                    "eth_price": 0.0006858948842189066,
                    "usd_price": 0.99939
                },
                {
                    "id": 4645691,
                    "symbol": "WCK",
                    "address": "0x09fe5f0236f0ea5d930197dce254d77b04128075",
                    "image_url": "https://lh3.googleusercontent.com/L5nvau4G9vXrA4AUs8OLxddBBEQHQZgUuUqnv9PzGo5mMgDm3_7pKhy8HPeWnqYCqKBi3MkhY6vpzq0HnV4aAEY",
                    "name": "Wrapped CryptoKitties",
                    "decimals": 18,
                    "eth_price": 0.004660068905878962,
                    "usd_price": 6.79
                }
            ],
            "primary_asset_contracts": [
                {
                    "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
                    "asset_contract_type": "non-fungible",
                    "created_date": "2018-01-23T04:51:38.832339",
                    "name": "CryptoKitties",
                    "nft_version": "1.0",
                    "opensea_version": null,
                    "owner": 463841,
                    "schema_name": "ERC721",
                    "symbol": "CKITTY",
                    "total_supply": null,
                    "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
                    "external_link": "https://www.cryptokitties.co/",
                    "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
                    "default_to_fiat": false,
                    "dev_buyer_fee_basis_points": 0,
                    "dev_seller_fee_basis_points": 0,
                    "only_proxied_transfers": false,
                    "opensea_buyer_fee_basis_points": 0,
                    "opensea_seller_fee_basis_points": 250,
                    "buyer_fee_basis_points": 0,
                    "seller_fee_basis_points": 250,
                    "payout_address": null
                }
            ],
            "traits": {
                "generation": {
                    "min": -1,
                    "max": 4593
                },
                "cooldown_index": {
                    "min": 0,
                    "max": 13
                },
                "fancy_ranking": {
                    "min": 1,
                    "max": 10000
                },
                "purrstige_ranking": {
                    "min": 1,
                    "max": 2480
                }
            },
            "stats": {
                "seven_day_volume": 1233.08109756755,
                "total_volume": 64758.2654602781,
                "seven_day_change": 8.701077014912398,
                "seven_day_sales": 4020.0,
                "total_sales": 736784.0,
                "total_supply": 1996241.0,
                "count": 1996241.0,
                "num_owners": 94783,
                "seven_day_average_price": 0.30704401878918575,
                "average_price": 0.08789308520575745,
                "market_cap": 612933.8591117429
            },
            "banner_image_url": "https://storage.opensea.io/static/banners/cryptokitties-banner2.png",
            "chat_url": null,
            "created_date": "2019-04-26T22:13:04.207050",
            "default_to_fiat": false,
            "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
            "dev_buyer_fee_basis_points": "0",
            "dev_seller_fee_basis_points": "0",
            "discord_url": "https://discord.gg/cryptokitties",
            "display_data": {
                "card_display_style": "padded"
            },
            "external_url": "https://www.cryptokitties.co/",
            "featured": false,
            "featured_image_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d-featured-1556589429.png",
            "hidden": false,
            "safelist_request_status": "verified",
            "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
            "is_subject_to_whitelist": false,
            "large_image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg",
            "medium_username": null,
            "name": "CryptoKitties",
            "only_proxied_transfers": false,
            "opensea_buyer_fee_basis_points": "0",
            "opensea_seller_fee_basis_points": "250",
            "payout_address": null,
            "require_email": false,
            "short_description": null,
            "slug": "cryptokitties",
            "telegram_url": null,
            "twitter_username": "CryptoKitties",
            "instagram_username": null,
            "wiki_url": "https://opensea.readme.io/page/cryptokitties"
        },
        "decimals": null,
        "sell_orders": null,
        "creator": {
            "user": "gerbil",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/3.png",
            "address": "0x377de8fce168af3b045e4ba51e819695f9a058a7",
            "config": "",
            "discord_id": ""
        },
        "traits": [
            {
                "trait_type": "mouth",
                "value": "gerbil",
                "display_type": null,
                "max_value": null,
                "trait_count": 70666,
                "order": null
            },
            {
                "trait_type": "pattern",
                "value": "totesbasic",
                "display_type": null,
                "max_value": null,
                "trait_count": 405545,
                "order": null
            },
            {
                "trait_type": "generation",
                "value": 11,
                "display_type": "number",
                "max_value": null,
                "trait_count": 65113,
                "order": null
            },
            {
                "trait_type": "virginity",
                "value": "non-virgin",
                "display_type": null,
                "max_value": null,
                "trait_count": 969072,
                "order": null
            },
            {
                "trait_type": "cooldown_timer",
                "value": "Slow (24 hr)",
                "display_type": null,
                "max_value": null,
                "trait_count": 72282,
                "order": null
            },
            {
                "trait_type": "eye_shape",
                "value": "googly",
                "display_type": null,
                "max_value": null,
                "trait_count": 90862,
                "order": null
            },
            {
                "trait_type": "highlight_colour",
                "value": "swampgreen",
                "display_type": null,
                "max_value": null,
                "trait_count": 189908,
                "order": null
            },
            {
                "trait_type": "fur",
                "value": "chartreux",
                "display_type": null,
                "max_value": null,
                "trait_count": 22961,
                "order": null
            },
            {
                "trait_type": "eye_colour",
                "value": "sizzurp",
                "display_type": null,
                "max_value": null,
                "trait_count": 134994,
                "order": null
            },
            {
                "trait_type": "accent_colour",
                "value": "seafoam",
                "display_type": null,
                "max_value": null,
                "trait_count": 4024,
                "order": null
            },
            {
                "trait_type": "base_colour",
                "value": "hintomint",
                "display_type": null,
                "max_value": null,
                "trait_count": 13611,
                "order": null
            }
        ],
        "last_sale": {
            "asset": {
                "token_id": "556324",
                "decimals": null
            },
            "asset_bundle": null,
            "event_type": "successful",
            "event_timestamp": "2018-05-21T07:41:27",
            "auction_type": "dutch",
            "total_price": "2949040509259260",
            "payment_token": {
                "id": 1,
                "symbol": "ETH",
                "address": "0x0000000000000000000000000000000000000000",
                "image_url": "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
                "name": "Ether",
                "decimals": 18,
                "eth_price": "0.986653304170588",
                "usd_price": "1457.059999999999945430"
            },
            "transaction": {
                "block_hash": "0x73cf46b34cefa0ab90c5c567c985ebedbd7edd921733bd4ecb834ff40151512c",
                "block_number": "5650702",
                "from_account": {
                    "user": null,
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/10.png",
                    "address": "0xcc601972761b5f153e697a34d2921e5cca090ed4",
                    "config": "",
                    "discord_id": ""
                },
                "id": 2467542,
                "timestamp": "2018-05-21T07:41:27",
                "to_account": {
                    "user": {
                        "username": "CryptoKitties-Auction-Contract"
                    },
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/26.png",
                    "address": "0xb1690c08e213a35ed9bab7b318de14420fb57d8c",
                    "config": "verified",
                    "discord_id": ""
                },
                "transaction_hash": "0x13f140d4899e7874376da33c8b12597a3c4a31bf1e8a135785e91e1c912e6c19",
                "transaction_index": "62"
            },
            "created_date": "2018-05-21T07:42:05.131227",
            "quantity": "1"
        },
        "top_bid": null,
        "listing_date": null,
        "is_presale": false,
        "transfer_fee_payment_token": null,
        "transfer_fee": null,
        "related_assets": [],
        "orders": [],
        "auctions": [],
        "supports_wyvern": true,
        "top_ownerships": [
            {
                "owner": {
                    "user": null,
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/10.png",
                    "address": "0xcc601972761b5f153e697a34d2921e5cca090ed4",
                    "config": "",
                    "discord_id": ""
                },
                "quantity": "1"
            }
        ],
        "ownership": null,
        "highest_buyer_commitment": null
    },
    {
        "id": 586135,
        "token_id": "556325",
        "num_sales": 0,
        "background_color": "eee9e8",
        "image_url": "https://lh3.googleusercontent.com/c62kAydG78acDKtF2WKIEhpa3yhjHL9FLSGQoYEzDPBN4w6tt0nujFxf5TcXOQMOxywJ2XA587NS4qV8gpxSZXsJ",
        "image_preview_url": "https://lh3.googleusercontent.com/c62kAydG78acDKtF2WKIEhpa3yhjHL9FLSGQoYEzDPBN4w6tt0nujFxf5TcXOQMOxywJ2XA587NS4qV8gpxSZXsJ=s250",
        "image_thumbnail_url": "https://lh3.googleusercontent.com/c62kAydG78acDKtF2WKIEhpa3yhjHL9FLSGQoYEzDPBN4w6tt0nujFxf5TcXOQMOxywJ2XA587NS4qV8gpxSZXsJ=s128",
        "image_original_url": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/556325.png",
        "animation_url": null,
        "animation_original_url": null,
        "name": null,
        "description": "*waves*! My name's Kitty #556325. I once coughed a furball up on Jane Austen's cat. They had it coming. I collect yoga pants. So sue me. Honey, you wouldn't wanna see these claws come out.",
        "external_link": "https://www.cryptokitties.co/kitty/556325",
        "asset_contract": {
            "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
            "asset_contract_type": "non-fungible",
            "created_date": "2018-01-23T04:51:38.832339",
            "name": "CryptoKitties",
            "nft_version": "1.0",
            "opensea_version": null,
            "owner": 463841,
            "schema_name": "ERC721",
            "symbol": "CKITTY",
            "total_supply": null,
            "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
            "external_link": "https://www.cryptokitties.co/",
            "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
            "default_to_fiat": false,
            "dev_buyer_fee_basis_points": 0,
            "dev_seller_fee_basis_points": 0,
            "only_proxied_transfers": false,
            "opensea_buyer_fee_basis_points": 0,
            "opensea_seller_fee_basis_points": 250,
            "buyer_fee_basis_points": 0,
            "seller_fee_basis_points": 250,
            "payout_address": null
        },
        "owner": {
            "user": null,
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/21.png",
            "address": "0xb276693d1d3777671380e4cd8a86c865fcf2f20c",
            "config": "",
            "discord_id": ""
        },
        "permalink": "https://opensea.io/assets/0x06012c8cf97bead5deae237070f9587f8e7a266d/556325",
        "collection": {
            "payment_tokens": [
                {
                    "id": 13689077,
                    "symbol": "ETH",
                    "address": "0x0000000000000000000000000000000000000000",
                    "image_url": "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
                    "name": "Ether",
                    "decimals": 18,
                    "eth_price": 1.0,
                    "usd_price": 1457.06
                },
                {
                    "id": 4645681,
                    "symbol": "WETH",
                    "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    "image_url": "https://lh3.googleusercontent.com/kPzD9AH9Xt4Vr7NXphLy2Yyf5ZWM0vfN_wMhJs0HWJpQjFZm0pcmZ880vcJQVLxPgdnOTEfUuYbkiaGxcTT_ZnCy",
                    "name": "Wrapped Ether",
                    "decimals": 18,
                    "eth_price": 1.0,
                    "usd_price": 1457.06
                },
                {
                    "id": 16206959,
                    "symbol": "CHERRY",
                    "address": "0x0eed7d6564fae0c22a7dc9ebb3db4a4c4a1473ee",
                    "image_url": "https://lh3.googleusercontent.com/DRoQ7e9zCHgk8CLcTpKxYTIIFyG8qzlsW3wPFY_NiVVdScylei8jbXHua49Bp--j7tNIvTYxftIwpEuatgUxsN8AeA",
                    "name": "Cherry",
                    "decimals": 18,
                    "eth_price": null,
                    "usd_price": null
                },
                {
                    "id": 12182941,
                    "symbol": "DAI",
                    "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "image_url": "https://lh3.googleusercontent.com/9wRB1clkMysBIYUd3SYnDLCVeZ1biqgAXLHtIYeWv_oG5XPgTYayh47mZclHw81O6SfJhl3ZhICNApiKfGSeMIc",
                    "name": "Dai Stablecoin",
                    "decimals": 18,
                    "eth_price": 0.0006931766708303021,
                    "usd_price": 1.01
                },
                {
                    "id": 4645815,
                    "symbol": "GUSD",
                    "address": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
                    "image_url": "https://lh3.googleusercontent.com/MLKbcx1oxhZjkXzsQM-fju8R3hHqsu-mGpFzivWMadH7bXT_kw48-rrD6os594lPY0x7MU-QGLy4ZudX1ePTx-Y",
                    "name": "Gemini dollar",
                    "decimals": 2,
                    "eth_price": 0.0006803961401726765,
                    "usd_price": 0.991378
                },
                {
                    "id": 5098533,
                    "symbol": "RFR",
                    "address": "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
                    "image_url": "https://lh3.googleusercontent.com/XB1KohVuy2E87R324IGijVhDZeHKhlkiB_TcpAH8sVTCdaA5brsYyxYXNzFK6SE2qGAtfya7FVzB9rgJBYQrjJVqeA",
                    "name": null,
                    "decimals": 4,
                    "eth_price": 0.000004638161777826583,
                    "usd_price": 0.00675808
                },
                {
                    "id": 4403908,
                    "symbol": "USDC",
                    "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    "image_url": "https://lh3.googleusercontent.com/PxC_K0Y22A1Xs0CeVknf4YUSxSqH_1bPCG0a4uD7WRkwbbtinqryjDEvoTYSbBFDXXTliuyo38-Y_ecNUEj0fMimQA",
                    "name": "USD//C",
                    "decimals": 6,
                    "eth_price": 0.0006858948842189066,
                    "usd_price": 0.99939
                },
                {
                    "id": 4645691,
                    "symbol": "WCK",
                    "address": "0x09fe5f0236f0ea5d930197dce254d77b04128075",
                    "image_url": "https://lh3.googleusercontent.com/L5nvau4G9vXrA4AUs8OLxddBBEQHQZgUuUqnv9PzGo5mMgDm3_7pKhy8HPeWnqYCqKBi3MkhY6vpzq0HnV4aAEY",
                    "name": "Wrapped CryptoKitties",
                    "decimals": 18,
                    "eth_price": 0.004660068905878962,
                    "usd_price": 6.79
                }
            ],
            "primary_asset_contracts": [
                {
                    "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
                    "asset_contract_type": "non-fungible",
                    "created_date": "2018-01-23T04:51:38.832339",
                    "name": "CryptoKitties",
                    "nft_version": "1.0",
                    "opensea_version": null,
                    "owner": 463841,
                    "schema_name": "ERC721",
                    "symbol": "CKITTY",
                    "total_supply": null,
                    "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
                    "external_link": "https://www.cryptokitties.co/",
                    "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
                    "default_to_fiat": false,
                    "dev_buyer_fee_basis_points": 0,
                    "dev_seller_fee_basis_points": 0,
                    "only_proxied_transfers": false,
                    "opensea_buyer_fee_basis_points": 0,
                    "opensea_seller_fee_basis_points": 250,
                    "buyer_fee_basis_points": 0,
                    "seller_fee_basis_points": 250,
                    "payout_address": null
                }
            ],
            "traits": {
                "generation": {
                    "min": -1,
                    "max": 4593
                },
                "cooldown_index": {
                    "min": 0,
                    "max": 13
                },
                "fancy_ranking": {
                    "min": 1,
                    "max": 10000
                },
                "purrstige_ranking": {
                    "min": 1,
                    "max": 2480
                }
            },
            "stats": {
                "seven_day_volume": 1233.08109756755,
                "total_volume": 64758.2654602781,
                "seven_day_change": 8.701077014912398,
                "seven_day_sales": 4020.0,
                "total_sales": 736784.0,
                "total_supply": 1996241.0,
                "count": 1996241.0,
                "num_owners": 94783,
                "seven_day_average_price": 0.30704401878918575,
                "average_price": 0.08789308520575745,
                "market_cap": 612933.8591117429
            },
            "banner_image_url": "https://storage.opensea.io/static/banners/cryptokitties-banner2.png",
            "chat_url": null,
            "created_date": "2019-04-26T22:13:04.207050",
            "default_to_fiat": false,
            "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
            "dev_buyer_fee_basis_points": "0",
            "dev_seller_fee_basis_points": "0",
            "discord_url": "https://discord.gg/cryptokitties",
            "display_data": {
                "card_display_style": "padded"
            },
            "external_url": "https://www.cryptokitties.co/",
            "featured": false,
            "featured_image_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d-featured-1556589429.png",
            "hidden": false,
            "safelist_request_status": "verified",
            "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
            "is_subject_to_whitelist": false,
            "large_image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg",
            "medium_username": null,
            "name": "CryptoKitties",
            "only_proxied_transfers": false,
            "opensea_buyer_fee_basis_points": "0",
            "opensea_seller_fee_basis_points": "250",
            "payout_address": null,
            "require_email": false,
            "short_description": null,
            "slug": "cryptokitties",
            "telegram_url": null,
            "twitter_username": "CryptoKitties",
            "instagram_username": null,
            "wiki_url": "https://opensea.readme.io/page/cryptokitties"
        },
        "decimals": null,
        "sell_orders": null,
        "creator": {
            "user": {
                "username": "Pranksy"
            },
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/22.png",
            "address": "0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459",
            "config": "verified",
            "discord_id": ""
        },
        "traits": [
            {
                "trait_type": "generation",
                "value": 9,
                "display_type": "number",
                "max_value": null,
                "trait_count": 88780,
                "order": null
            },
            {
                "trait_type": "fancy_type",
                "value": "Momo-chan",
                "display_type": null,
                "max_value": null,
                "trait_count": 500,
                "order": null
            },
            {
                "trait_type": "virginity",
                "value": "non-virgin",
                "display_type": null,
                "max_value": null,
                "trait_count": 969072,
                "order": null
            },
            {
                "trait_type": "fanciness",
                "value": "fancy",
                "display_type": null,
                "max_value": null,
                "trait_count": 136628,
                "order": null
            },
            {
                "trait_type": "cooldown_timer",
                "value": "Sluggish (2 days)",
                "display_type": null,
                "max_value": null,
                "trait_count": 54209,
                "order": null
            },
            {
                "trait_type": "fancy_ranking",
                "value": 178,
                "display_type": null,
                "max_value": null,
                "trait_count": 0,
                "order": null
            }
        ],
        "last_sale": null,
        "top_bid": null,
        "listing_date": null,
        "is_presale": false,
        "transfer_fee_payment_token": null,
        "transfer_fee": null,
        "related_assets": [

        ],
        "orders": [

        ],
        "auctions": [

        ],
        "supports_wyvern": true,
        "top_ownerships": [
            {
                "owner": {
                    "user": null,
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/21.png",
                    "address": "0xb276693d1d3777671380e4cd8a86c865fcf2f20c",
                    "config": "",
                    "discord_id": ""
                },
                "quantity": "1"
            }
        ],
        "ownership": null,
        "highest_buyer_commitment": null
    },
    {
        "id": 586139,
        "token_id": "556329",
        "num_sales": 2,
        "background_color": "eee9e8",
        "image_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d/556329-1555888082.png",
        "image_preview_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d-preview/556329-1555888087.png",
        "image_thumbnail_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d-thumbnail/556329-1555888089.png",
        "image_original_url": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/556329.png",
        "animation_url": null,
        "animation_original_url": null,
        "name": "(7FJ)",
        "description": "Sup! I'm (7FJ). I work as a Dispensary Clerk and I love spinning sick beats. Sometimes I daydream of a life full of playing poker, taunting pidgeons, and meatloaf. May our friendship be full of breeding.",
        "external_link": "https://www.cryptokitties.co/kitty/556329",
        "asset_contract": {
            "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
            "asset_contract_type": "non-fungible",
            "created_date": "2018-01-23T04:51:38.832339",
            "name": "CryptoKitties",
            "nft_version": "1.0",
            "opensea_version": null,
            "owner": 463841,
            "schema_name": "ERC721",
            "symbol": "CKITTY",
            "total_supply": null,
            "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
            "external_link": "https://www.cryptokitties.co/",
            "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
            "default_to_fiat": false,
            "dev_buyer_fee_basis_points": 0,
            "dev_seller_fee_basis_points": 0,
            "only_proxied_transfers": false,
            "opensea_buyer_fee_basis_points": 0,
            "opensea_seller_fee_basis_points": 250,
            "buyer_fee_basis_points": 0,
            "seller_fee_basis_points": 250,
            "payout_address": null
        },
        "owner": {
            "user": {
                "username": "KittyKefir"
            },
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
            "address": "0x5ec73a8366452d764eebc92b719f0e3203bc989c",
            "config": "",
            "discord_id": ""
        },
        "permalink": "https://opensea.io/assets/0x06012c8cf97bead5deae237070f9587f8e7a266d/556329",
        "collection": {
            "payment_tokens": [
                {
                    "id": 13689077,
                    "symbol": "ETH",
                    "address": "0x0000000000000000000000000000000000000000",
                    "image_url": "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
                    "name": "Ether",
                    "decimals": 18,
                    "eth_price": 1.0,
                    "usd_price": 1457.06
                },
                {
                    "id": 4645681,
                    "symbol": "WETH",
                    "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    "image_url": "https://lh3.googleusercontent.com/kPzD9AH9Xt4Vr7NXphLy2Yyf5ZWM0vfN_wMhJs0HWJpQjFZm0pcmZ880vcJQVLxPgdnOTEfUuYbkiaGxcTT_ZnCy",
                    "name": "Wrapped Ether",
                    "decimals": 18,
                    "eth_price": 1.0,
                    "usd_price": 1457.06
                },
                {
                    "id": 16206959,
                    "symbol": "CHERRY",
                    "address": "0x0eed7d6564fae0c22a7dc9ebb3db4a4c4a1473ee",
                    "image_url": "https://lh3.googleusercontent.com/DRoQ7e9zCHgk8CLcTpKxYTIIFyG8qzlsW3wPFY_NiVVdScylei8jbXHua49Bp--j7tNIvTYxftIwpEuatgUxsN8AeA",
                    "name": "Cherry",
                    "decimals": 18,
                    "eth_price": null,
                    "usd_price": null
                },
                {
                    "id": 12182941,
                    "symbol": "DAI",
                    "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "image_url": "https://lh3.googleusercontent.com/9wRB1clkMysBIYUd3SYnDLCVeZ1biqgAXLHtIYeWv_oG5XPgTYayh47mZclHw81O6SfJhl3ZhICNApiKfGSeMIc",
                    "name": "Dai Stablecoin",
                    "decimals": 18,
                    "eth_price": 0.0006931766708303021,
                    "usd_price": 1.01
                },
                {
                    "id": 4645815,
                    "symbol": "GUSD",
                    "address": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
                    "image_url": "https://lh3.googleusercontent.com/MLKbcx1oxhZjkXzsQM-fju8R3hHqsu-mGpFzivWMadH7bXT_kw48-rrD6os594lPY0x7MU-QGLy4ZudX1ePTx-Y",
                    "name": "Gemini dollar",
                    "decimals": 2,
                    "eth_price": 0.0006803961401726765,
                    "usd_price": 0.991378
                },
                {
                    "id": 5098533,
                    "symbol": "RFR",
                    "address": "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
                    "image_url": "https://lh3.googleusercontent.com/XB1KohVuy2E87R324IGijVhDZeHKhlkiB_TcpAH8sVTCdaA5brsYyxYXNzFK6SE2qGAtfya7FVzB9rgJBYQrjJVqeA",
                    "name": null,
                    "decimals": 4,
                    "eth_price": 0.000004638161777826583,
                    "usd_price": 0.00675808
                },
                {
                    "id": 4403908,
                    "symbol": "USDC",
                    "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    "image_url": "https://lh3.googleusercontent.com/PxC_K0Y22A1Xs0CeVknf4YUSxSqH_1bPCG0a4uD7WRkwbbtinqryjDEvoTYSbBFDXXTliuyo38-Y_ecNUEj0fMimQA",
                    "name": "USD//C",
                    "decimals": 6,
                    "eth_price": 0.0006858948842189066,
                    "usd_price": 0.99939
                },
                {
                    "id": 4645691,
                    "symbol": "WCK",
                    "address": "0x09fe5f0236f0ea5d930197dce254d77b04128075",
                    "image_url": "https://lh3.googleusercontent.com/L5nvau4G9vXrA4AUs8OLxddBBEQHQZgUuUqnv9PzGo5mMgDm3_7pKhy8HPeWnqYCqKBi3MkhY6vpzq0HnV4aAEY",
                    "name": "Wrapped CryptoKitties",
                    "decimals": 18,
                    "eth_price": 0.004660068905878962,
                    "usd_price": 6.79
                }
            ],
            "primary_asset_contracts": [
                {
                    "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
                    "asset_contract_type": "non-fungible",
                    "created_date": "2018-01-23T04:51:38.832339",
                    "name": "CryptoKitties",
                    "nft_version": "1.0",
                    "opensea_version": null,
                    "owner": 463841,
                    "schema_name": "ERC721",
                    "symbol": "CKITTY",
                    "total_supply": null,
                    "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
                    "external_link": "https://www.cryptokitties.co/",
                    "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
                    "default_to_fiat": false,
                    "dev_buyer_fee_basis_points": 0,
                    "dev_seller_fee_basis_points": 0,
                    "only_proxied_transfers": false,
                    "opensea_buyer_fee_basis_points": 0,
                    "opensea_seller_fee_basis_points": 250,
                    "buyer_fee_basis_points": 0,
                    "seller_fee_basis_points": 250,
                    "payout_address": null
                }
            ],
            "traits": {
                "generation": {
                    "min": -1,
                    "max": 4593
                },
                "cooldown_index": {
                    "min": 0,
                    "max": 13
                },
                "fancy_ranking": {
                    "min": 1,
                    "max": 10000
                },
                "purrstige_ranking": {
                    "min": 1,
                    "max": 2480
                }
            },
            "stats": {
                "seven_day_volume": 1233.08109756755,
                "total_volume": 64758.2654602781,
                "seven_day_change": 8.701077014912398,
                "seven_day_sales": 4020.0,
                "total_sales": 736784.0,
                "total_supply": 1996241.0,
                "count": 1996241.0,
                "num_owners": 94783,
                "seven_day_average_price": 0.30704401878918575,
                "average_price": 0.08789308520575745,
                "market_cap": 612933.8591117429
            },
            "banner_image_url": "https://storage.opensea.io/static/banners/cryptokitties-banner2.png",
            "chat_url": null,
            "created_date": "2019-04-26T22:13:04.207050",
            "default_to_fiat": false,
            "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
            "dev_buyer_fee_basis_points": "0",
            "dev_seller_fee_basis_points": "0",
            "discord_url": "https://discord.gg/cryptokitties",
            "display_data": {
                "card_display_style": "padded"
            },
            "external_url": "https://www.cryptokitties.co/",
            "featured": false,
            "featured_image_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d-featured-1556589429.png",
            "hidden": false,
            "safelist_request_status": "verified",
            "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
            "is_subject_to_whitelist": false,
            "large_image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg",
            "medium_username": null,
            "name": "CryptoKitties",
            "only_proxied_transfers": false,
            "opensea_buyer_fee_basis_points": "0",
            "opensea_seller_fee_basis_points": "250",
            "payout_address": null,
            "require_email": false,
            "short_description": null,
            "slug": "cryptokitties",
            "telegram_url": null,
            "twitter_username": "CryptoKitties",
            "instagram_username": null,
            "wiki_url": "https://opensea.readme.io/page/cryptokitties"
        },
        "decimals": null,
        "sell_orders": null,
        "creator": {
            "user": {
                "username": "M1K3"
            },
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/14.png",
            "address": "0xa6518bee322af13ba71c471b3527416ed08ad2a4",
            "config": "",
            "discord_id": ""
        },
        "traits": [
            {
                "trait_type": "pattern",
                "value": "spock",
                "display_type": null,
                "max_value": null,
                "trait_count": 136545,
                "order": null
            },
            {
                "trait_type": "mouth",
                "value": "gerbil",
                "display_type": null,
                "max_value": null,
                "trait_count": 70666,
                "order": null
            },
            {
                "trait_type": "generation",
                "value": 16,
                "display_type": "number",
                "max_value": null,
                "trait_count": 26681,
                "order": null
            },
            {
                "trait_type": "virginity",
                "value": "virgin",
                "display_type": null,
                "max_value": null,
                "trait_count": 993122,
                "order": null
            },
            {
                "trait_type": "highlight_colour",
                "value": "royalpurple",
                "display_type": null,
                "max_value": null,
                "trait_count": 188878,
                "order": null
            },
            {
                "trait_type": "eye_shape",
                "value": "raisedbrow",
                "display_type": null,
                "max_value": null,
                "trait_count": 93740,
                "order": null
            },
            {
                "trait_type": "cooldown_timer",
                "value": "Plodding (8 hr)",
                "display_type": null,
                "max_value": null,
                "trait_count": 98276,
                "order": null
            },
            {
                "trait_type": "fur",
                "value": "laperm",
                "display_type": null,
                "max_value": null,
                "trait_count": 44876,
                "order": null
            },
            {
                "trait_type": "accent_colour",
                "value": "bloodred",
                "display_type": null,
                "max_value": null,
                "trait_count": 42407,
                "order": null
            },
            {
                "trait_type": "eye_colour",
                "value": "thundergrey",
                "display_type": null,
                "max_value": null,
                "trait_count": 93997,
                "order": null
            },
            {
                "trait_type": "base_colour",
                "value": "onyx",
                "display_type": null,
                "max_value": null,
                "trait_count": 24372,
                "order": null
            }
        ],
        "last_sale": {
            "asset": {
                "token_id": "556329",
                "decimals": null
            },
            "asset_bundle": null,
            "event_type": "successful",
            "event_timestamp": "2018-03-06T10:01:14",
            "auction_type": "dutch",
            "total_price": "5000000000000000",
            "payment_token": {
                "id": 1,
                "symbol": "ETH",
                "address": "0x0000000000000000000000000000000000000000",
                "image_url": "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
                "name": "Ether",
                "decimals": 18,
                "eth_price": "0.986653304170588",
                "usd_price": "1457.059999999999945430"
            },
            "transaction": {
                "block_hash": "0x37cd9d21fbf90d63a07f52ec2be7a6ca4eb0af9ad839e229bdd3f91f1efb631e",
                "block_number": "5206070",
                "from_account": {
                    "user": {
                        "username": "KittyKefir"
                    },
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "address": "0x5ec73a8366452d764eebc92b719f0e3203bc989c",
                    "config": "",
                    "discord_id": ""
                },
                "id": 1994546,
                "timestamp": "2018-03-06T10:01:14",
                "to_account": {
                    "user": {
                        "username": "CryptoKitties-Auction-Contract"
                    },
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/26.png",
                    "address": "0xb1690c08e213a35ed9bab7b318de14420fb57d8c",
                    "config": "verified",
                    "discord_id": ""
                },
                "transaction_hash": "0x9bba7c33ae69541914d363f08135882e0383c269496f75508530b917a091351d",
                "transaction_index": "111"
            },
            "created_date": "2018-03-06T10:02:23.631861",
            "quantity": "1"
        },
        "top_bid": null,
        "listing_date": null,
        "is_presale": false,
        "transfer_fee_payment_token": null,
        "transfer_fee": null,
        "related_assets": [

        ],
        "orders": [

        ],
        "auctions": [

        ],
        "supports_wyvern": true,
        "top_ownerships": [
            {
                "owner": {
                    "user": {
                        "username": "KittyKefir"
                    },
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "address": "0x5ec73a8366452d764eebc92b719f0e3203bc989c",
                    "config": "",
                    "discord_id": ""
                },
                "quantity": "1"
            }
        ],
        "ownership": null,
        "highest_buyer_commitment": null
    },
    {
        "id": 586129,
        "token_id": "556322",
        "num_sales": 1,
        "background_color": "eee9e8",
        "image_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d/556322-1555888074.png",
        "image_preview_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d-preview/556322-1555888077.png",
        "image_thumbnail_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d-thumbnail/556322-1555888079.png",
        "image_original_url": "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/556322.png",
        "animation_url": null,
        "animation_original_url": null,
        "name": null,
        "description": "*hissing noises*. I'm Kitty #556322. If you also love to wear cargo pants, we're probably meant to be together. I was voted most likely to end up on reality tv in college. Will you be the Drake's sweat to my Tapatío?",
        "external_link": "https://www.cryptokitties.co/kitty/556322",
        "asset_contract": {
            "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
            "asset_contract_type": "non-fungible",
            "created_date": "2018-01-23T04:51:38.832339",
            "name": "CryptoKitties",
            "nft_version": "1.0",
            "opensea_version": null,
            "owner": 463841,
            "schema_name": "ERC721",
            "symbol": "CKITTY",
            "total_supply": null,
            "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
            "external_link": "https://www.cryptokitties.co/",
            "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
            "default_to_fiat": false,
            "dev_buyer_fee_basis_points": 0,
            "dev_seller_fee_basis_points": 0,
            "only_proxied_transfers": false,
            "opensea_buyer_fee_basis_points": 0,
            "opensea_seller_fee_basis_points": 250,
            "buyer_fee_basis_points": 0,
            "seller_fee_basis_points": 250,
            "payout_address": null
        },
        "owner": {
            "user": {
                "username": "0x7c00c9f0e7aed440c0c730a9bd9ee4f49de20d5c"
            },
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/24.png",
            "address": "0x7c00c9f0e7aed440c0c730a9bd9ee4f49de20d5c",
            "config": "",
            "discord_id": ""
        },
        "permalink": "https://opensea.io/assets/0x06012c8cf97bead5deae237070f9587f8e7a266d/556322",
        "collection": {
            "payment_tokens": [
                {
                    "id": 13689077,
                    "symbol": "ETH",
                    "address": "0x0000000000000000000000000000000000000000",
                    "image_url": "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
                    "name": "Ether",
                    "decimals": 18,
                    "eth_price": 1.0,
                    "usd_price": 1457.06
                },
                {
                    "id": 4645681,
                    "symbol": "WETH",
                    "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    "image_url": "https://lh3.googleusercontent.com/kPzD9AH9Xt4Vr7NXphLy2Yyf5ZWM0vfN_wMhJs0HWJpQjFZm0pcmZ880vcJQVLxPgdnOTEfUuYbkiaGxcTT_ZnCy",
                    "name": "Wrapped Ether",
                    "decimals": 18,
                    "eth_price": 1.0,
                    "usd_price": 1457.06
                },
                {
                    "id": 16206959,
                    "symbol": "CHERRY",
                    "address": "0x0eed7d6564fae0c22a7dc9ebb3db4a4c4a1473ee",
                    "image_url": "https://lh3.googleusercontent.com/DRoQ7e9zCHgk8CLcTpKxYTIIFyG8qzlsW3wPFY_NiVVdScylei8jbXHua49Bp--j7tNIvTYxftIwpEuatgUxsN8AeA",
                    "name": "Cherry",
                    "decimals": 18,
                    "eth_price": null,
                    "usd_price": null
                },
                {
                    "id": 12182941,
                    "symbol": "DAI",
                    "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "image_url": "https://lh3.googleusercontent.com/9wRB1clkMysBIYUd3SYnDLCVeZ1biqgAXLHtIYeWv_oG5XPgTYayh47mZclHw81O6SfJhl3ZhICNApiKfGSeMIc",
                    "name": "Dai Stablecoin",
                    "decimals": 18,
                    "eth_price": 0.0006931766708303021,
                    "usd_price": 1.01
                },
                {
                    "id": 4645815,
                    "symbol": "GUSD",
                    "address": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
                    "image_url": "https://lh3.googleusercontent.com/MLKbcx1oxhZjkXzsQM-fju8R3hHqsu-mGpFzivWMadH7bXT_kw48-rrD6os594lPY0x7MU-QGLy4ZudX1ePTx-Y",
                    "name": "Gemini dollar",
                    "decimals": 2,
                    "eth_price": 0.0006803961401726765,
                    "usd_price": 0.991378
                },
                {
                    "id": 5098533,
                    "symbol": "RFR",
                    "address": "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
                    "image_url": "https://lh3.googleusercontent.com/XB1KohVuy2E87R324IGijVhDZeHKhlkiB_TcpAH8sVTCdaA5brsYyxYXNzFK6SE2qGAtfya7FVzB9rgJBYQrjJVqeA",
                    "name": null,
                    "decimals": 4,
                    "eth_price": 0.000004638161777826583,
                    "usd_price": 0.00675808
                },
                {
                    "id": 4403908,
                    "symbol": "USDC",
                    "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    "image_url": "https://lh3.googleusercontent.com/PxC_K0Y22A1Xs0CeVknf4YUSxSqH_1bPCG0a4uD7WRkwbbtinqryjDEvoTYSbBFDXXTliuyo38-Y_ecNUEj0fMimQA",
                    "name": "USD//C",
                    "decimals": 6,
                    "eth_price": 0.0006858948842189066,
                    "usd_price": 0.99939
                },
                {
                    "id": 4645691,
                    "symbol": "WCK",
                    "address": "0x09fe5f0236f0ea5d930197dce254d77b04128075",
                    "image_url": "https://lh3.googleusercontent.com/L5nvau4G9vXrA4AUs8OLxddBBEQHQZgUuUqnv9PzGo5mMgDm3_7pKhy8HPeWnqYCqKBi3MkhY6vpzq0HnV4aAEY",
                    "name": "Wrapped CryptoKitties",
                    "decimals": 18,
                    "eth_price": 0.004660068905878962,
                    "usd_price": 6.79
                }
            ],
            "primary_asset_contracts": [
                {
                    "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
                    "asset_contract_type": "non-fungible",
                    "created_date": "2018-01-23T04:51:38.832339",
                    "name": "CryptoKitties",
                    "nft_version": "1.0",
                    "opensea_version": null,
                    "owner": 463841,
                    "schema_name": "ERC721",
                    "symbol": "CKITTY",
                    "total_supply": null,
                    "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
                    "external_link": "https://www.cryptokitties.co/",
                    "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
                    "default_to_fiat": false,
                    "dev_buyer_fee_basis_points": 0,
                    "dev_seller_fee_basis_points": 0,
                    "only_proxied_transfers": false,
                    "opensea_buyer_fee_basis_points": 0,
                    "opensea_seller_fee_basis_points": 250,
                    "buyer_fee_basis_points": 0,
                    "seller_fee_basis_points": 250,
                    "payout_address": null
                }
            ],
            "traits": {
                "generation": {
                    "min": -1,
                    "max": 4593
                },
                "cooldown_index": {
                    "min": 0,
                    "max": 13
                },
                "fancy_ranking": {
                    "min": 1,
                    "max": 10000
                },
                "purrstige_ranking": {
                    "min": 1,
                    "max": 2480
                }
            },
            "stats": {
                "seven_day_volume": 1233.08109756755,
                "total_volume": 64758.2654602781,
                "seven_day_change": 8.701077014912398,
                "seven_day_sales": 4020.0,
                "total_sales": 736784.0,
                "total_supply": 1996241.0,
                "count": 1996241.0,
                "num_owners": 94783,
                "seven_day_average_price": 0.30704401878918575,
                "average_price": 0.08789308520575745,
                "market_cap": 612933.8591117429
            },
            "banner_image_url": "https://storage.opensea.io/static/banners/cryptokitties-banner2.png",
            "chat_url": null,
            "created_date": "2019-04-26T22:13:04.207050",
            "default_to_fiat": false,
            "description": "CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.",
            "dev_buyer_fee_basis_points": "0",
            "dev_seller_fee_basis_points": "0",
            "discord_url": "https://discord.gg/cryptokitties",
            "display_data": {
                "card_display_style": "padded"
            },
            "external_url": "https://www.cryptokitties.co/",
            "featured": false,
            "featured_image_url": "https://storage.opensea.io/0x06012c8cf97bead5deae237070f9587f8e7a266d-featured-1556589429.png",
            "hidden": false,
            "safelist_request_status": "verified",
            "image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
            "is_subject_to_whitelist": false,
            "large_image_url": "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg",
            "medium_username": null,
            "name": "CryptoKitties",
            "only_proxied_transfers": false,
            "opensea_buyer_fee_basis_points": "0",
            "opensea_seller_fee_basis_points": "250",
            "payout_address": null,
            "require_email": false,
            "short_description": null,
            "slug": "cryptokitties",
            "telegram_url": null,
            "twitter_username": "CryptoKitties",
            "instagram_username": null,
            "wiki_url": "https://opensea.readme.io/page/cryptokitties"
        },
        "decimals": null,
        "sell_orders": null,
        "creator": {
            "user": {
                "username": "CryptoKitties-Auction-Contract"
            },
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/26.png",
            "address": "0xb1690c08e213a35ed9bab7b318de14420fb57d8c",
            "config": "verified",
            "discord_id": ""
        },
        "traits": [
            {
                "trait_type": "pattern",
                "value": "totesbasic",
                "display_type": null,
                "max_value": null,
                "trait_count": 405545,
                "order": null
            },
            {
                "trait_type": "generation",
                "value": 0,
                "display_type": "number",
                "max_value": null,
                "trait_count": 36557,
                "order": null
            },
            {
                "trait_type": "mouth",
                "value": "wuvme",
                "display_type": null,
                "max_value": null,
                "trait_count": 119362,
                "order": null
            },
            {
                "trait_type": "virginity",
                "value": "virgin",
                "display_type": null,
                "max_value": null,
                "trait_count": 993122,
                "order": null
            },
            {
                "trait_type": "base_colour",
                "value": "greymatter",
                "display_type": null,
                "max_value": null,
                "trait_count": 185434,
                "order": null
            },
            {
                "trait_type": "cooldown_timer",
                "value": "Fast (1 min)",
                "display_type": null,
                "max_value": null,
                "trait_count": 82736,
                "order": null
            },
            {
                "trait_type": "eye_colour",
                "value": "thundergrey",
                "display_type": null,
                "max_value": null,
                "trait_count": 93997,
                "order": null
            },
            {
                "trait_type": "highlight_colour",
                "value": "egyptiankohl",
                "display_type": null,
                "max_value": null,
                "trait_count": 100832,
                "order": null
            },
            {
                "trait_type": "eye_shape",
                "value": "wonky",
                "display_type": null,
                "max_value": null,
                "trait_count": 89293,
                "order": null
            },
            {
                "trait_type": "fur",
                "value": "bobtail",
                "display_type": null,
                "max_value": null,
                "trait_count": 70763,
                "order": null
            },
            {
                "trait_type": "accent_colour",
                "value": "morningglory",
                "display_type": null,
                "max_value": null,
                "trait_count": 46557,
                "order": null
            }
        ],
        "last_sale": {
            "asset": {
                "token_id": "556322",
                "decimals": null
            },
            "asset_bundle": null,
            "event_type": "successful",
            "event_timestamp": "2018-02-26T17:13:35",
            "auction_type": "dutch",
            "total_price": "369492825800861208",
            "payment_token": {
                "id": 1,
                "symbol": "ETH",
                "address": "0x0000000000000000000000000000000000000000",
                "image_url": "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
                "name": "Ether",
                "decimals": 18,
                "eth_price": "0.986653304170588",
                "usd_price": "1457.059999999999945430"
            },
            "transaction": {
                "block_hash": "0xac24566cc9436cb3f501abca25c53d9146c2ec603e55df850d2ffffbb6d8e236",
                "block_number": "5160666",
                "from_account": {
                    "user": {
                        "username": "0x7c00c9f0e7aed440c0c730a9bd9ee4f49de20d5c"
                    },
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/24.png",
                    "address": "0x7c00c9f0e7aed440c0c730a9bd9ee4f49de20d5c",
                    "config": "",
                    "discord_id": ""
                },
                "id": 1920375,
                "timestamp": "2018-02-26T17:13:35",
                "to_account": {
                    "user": {
                        "username": "CryptoKitties-Auction-Contract"
                    },
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/26.png",
                    "address": "0xb1690c08e213a35ed9bab7b318de14420fb57d8c",
                    "config": "verified",
                    "discord_id": ""
                },
                "transaction_hash": "0x20f482a4945d4b3a09e02e8f0b598e8919fc661a23a4fc53a9098e2b256e7739",
                "transaction_index": "31"
            },
            "created_date": "2018-02-26T17:14:03.382007",
            "quantity": "1"
        },
        "top_bid": null,
        "listing_date": null,
        "is_presale": false,
        "transfer_fee_payment_token": null,
        "transfer_fee": null,
        "related_assets": [

        ],
        "orders": [

        ],
        "auctions": [

        ],
        "supports_wyvern": true,
        "top_ownerships": [
            {
                "owner": {
                    "user": {
                        "username": "0x7c00c9f0e7aed440c0c730a9bd9ee4f49de20d5c"
                    },
                    "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/24.png",
                    "address": "0x7c00c9f0e7aed440c0c730a9bd9ee4f49de20d5c",
                    "config": "",
                    "discord_id": ""
                },
                "quantity": "1"
            }
        ],
        "ownership": null,
        "highest_buyer_commitment": null
    },
]

mock.onGet('api/slides').reply(200, slides)