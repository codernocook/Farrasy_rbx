/*
    Farrasy_rbbx
    Copyright (C) 2024  codernocook

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// Farrasy theme by Itzporium
// Website: https://itzporium.is-a.dev/

// Roblox className collections
const robloxClassName = {
    // Roblox body
    "body": "rbx-body",
    "home_container": "HomeContainer",

    // The one contain language, About us, Jobs, Blog, etc, and copyright about the roblox (the game) it's at the last of the page
    "footer_container": "footer-container",

    // The container that around for player like: Avatar and then the username next, only on the home page.
    "player_container": "col-xs-12 container-header",

    // The navigation bar
    // The bar that is in the left side, and have some buttons, homes, Profile, Friends, ...
    "player_navBar": "simplebar-content-wrapper",

    // The top navigation bar that contain Discover, Marketplace, Create, Robux, and Search bar, also Robux, etc
    "top_navBar": "container-fluid",
    
    // The main content like game, experience in roblox, the one that contain some game, with friends. Have "Continue" tab
    "main_container": "container-main",
    "homepage_content": "content",
    "footer_font": "font-header-2 dynamic-ellipsis-item",

    // The navigation bar that is the same with player_navBar, but it get the parent, the "player_navBar" is a small child inside this parent
    "player_navBar_parent": "navigation",

    // The "------" that break between username and those button below
    "username_corner_break": "rbx-divider",

    // Change Discover to Games for easier understanding
    "discover_button": "font-header-2 nav-menu-title text-header",

    // This is for user tab, that one show more information about username, Friends, Followers, Following, And "about me" section
    // If you don't know, or can't get it. Then look at the url: "https://www.roblox.com/users/3138000049/profile" <= this is the user tab

    // This one show username, Friends, Followers, Following
    "player_informnation": "section-content profile-header-content",

    // Contains About me, Currently Wearing, Friends, Groups, and Roblox badges, etc...
    "player_content": "rbx-tabs-horizontal",

    // The button that switch bettween tabs (this work for game page, user page)
    "tabs_switching_buttons": "horizontal-tabs", // This works for game page, user page. For example (game): About, Store, Servers, etc...

    // Game content include Play button (for sure lol), game title (or name), Description, Store, Server, etc... or some content like badges, or game information, etc...
    "page_content": "content",
    "game_badges_stackList": "stack-list",

    // Thumbnail of game (experience), or badge
    "thumbnail_span": "thumbnail-span",

    // Marketplace (catalog) search bar
    "marketplace_search": "search-bars",
    "markplace_unavailable": "section-content-off ng-binding",
    "marketplace_no_topic_container": "topic-container ng-scope",
    "marketplace_item_thumbnail": "item-card-thumb-container",
    "marketplace_topicList": "topic-carousel"
}

const settings = {
    "intervalLoopTime": 500, // eans 500ms = 0.5s
}

const theme_color = {
    "base_color": "#000000",
    "button_color": "#000000",
    "second_color": "#000000"
}

// Functions
const getURL = () => {
    if (window && window["location"] && window["location"]["href"]) {
        if (window.location["host"].includes("www.")) {
            // Adult
            return window.location.href?.toString().split("https://www.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0];
        } else if (window.location["host"].includes("web.")) {
            // Child
            window.location.href?.toString().split("https://web.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0];
        }
    }
}

// Get by classname
const getElement_class = (className) => {
    if (document["getElementsByClassName"] && document["getElementsByClassName"](className) && document["getElementsByClassName"](className)) {
        if (document["getElementsByClassName"](className)["length"] > 0) {
            return document["getElementsByClassName"](className)
        } else {
            return document.createElement("div"); // The current patch, to prevent some bad issue, like script crashing
        }
    } else {

    }
}

// get by id
const getElement_id = (className) => {
    if (document["getElementById"] && document["getElementById"](className)) {
        return document["getElementById"](className)
    }
}

// Theme apply for custom roblox page
setInterval(() => {
    switch(getURL()) {
        case "home":
            (() => {
                // Roblox suck, i wrote this for like 30 minutes (I have to discover their fucking bad asshole html)
                // You know i wrote like 100 lines, and i read again it's just in home container
    
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const homeContainer = getElement_id(robloxClassName["home_container"]);
                const footer_container = getElement_id(robloxClassName["footer_container"]);
                const player_container = getElement_class(robloxClassName["player_container"])[0].children[0];
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const main_container = getElement_class(robloxClassName["main_container"])[0];
                const homepage_content = getElement_class(robloxClassName["homepage_content"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const discover_button = getElement_class(robloxClassName["discover_button"])[0];
    
                // Absolute patch
                document.body.style.position = "relative";
                document.body.style.display = "flex";
                document.body.style.flexDirection= "column";
    
                homeContainer.style.position = "absolute";
                homeContainer.style.left = "50%";
                homeContainer.style.transform = "translateX(-50%)";
    
                // footer_container patch
                footer_container.style.position = "absolute";
                footer_container.style.bottom = `${homeContainer.offsetWidth + footer_container.offsetWidth}px`;
                footer_container.style.backgroundColor = theme_color["base_color"]
    
                // Make border around player_container
                player_container.style.border = "2px solid #000000"
                player_container.style.borderRadius = "5px";
                player_container.style.padding = "10px";
    
                // Theme apply
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                // This is the main content the one that contain game, and stuff
                main_container.style.backgroundColor = theme_color["base_color"] 
                homeContainer.style.backgroundColor = theme_color["base_color"]
                homepage_content.style.backgroundColor = theme_color["base_color"]
    
                // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]
    
                // Change Discover => Games
                discover_button.innerHTML = "Games";
            })()
    
            // Return
            break;
        case "games":
            (() => {
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const tabs_switching_buttons = getElement_id(robloxClassName["tabs_switching_buttons"]);
                const page_content = getElement_class(robloxClassName["page_content"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const game_badges_stackList = getElement_class(robloxClassName["game_badges_stackList"])[0];
                const footer_container = getElement_id(robloxClassName["footer_container"]);
    
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                 // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]
    
                // Set game content background
                page_content.style.backgroundColor = theme_color["base_color"]
    
                // Roblox Tabs choosing (theme)
                if (tabs_switching_buttons && tabs_switching_buttons["children"]) {
                    Object.keys(tabs_switching_buttons["children"]).forEach((buttons_index) => {
                        const buttons = tabs_switching_buttons["children"][buttons_index];
                        buttons.style.backgroundColor = theme_color["base_color"];
                    })
                }
    
                // Badges theme
                if (game_badges_stackList && game_badges_stackList["children"]) {
                    Object.keys(game_badges_stackList["children"]).forEach((buttons_index) => {
                        const badges = game_badges_stackList["children"][buttons_index];
                        badges.style.backgroundColor = theme_color["second_color"];
                    })
                }
    
                // Footer page theme
                footer_container.style.backgroundColor = theme_color["base_color"]
            })()
    
            // Return
            break;
        case "users":
            (() => {
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const player_information = getElement_class(robloxClassName["player_informnation"])[0];
                const player_content = getElement_class(robloxClassName["player_content"])[0];
                const tabs_switching_buttons = getElement_id(robloxClassName["tabs_switching_buttons"]);
                const footer_container = getElement_id(robloxClassName["footer_container"]);
    
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                 // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]
    
                // Change user header
                player_information.style.backgroundColor = theme_color["base_color"]
                player_content.style.backgroundColor = theme_color["base_color"]
    
                // Roblox Tabs choosing (theme)
                if (tabs_switching_buttons && tabs_switching_buttons["children"]) {
                    Object.keys(tabs_switching_buttons["children"]).forEach((buttons_index) => {
                        const buttons = tabs_switching_buttons["children"][buttons_index];
                        buttons.style.backgroundColor = theme_color["base_color"];
                    })
                }
    
                // Footer page theme
                footer_container.style.backgroundColor = theme_color["base_color"]
            })()
    
            break;
        case "badges":
            (() => {
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const footer_container = getElement_id(robloxClassName["footer_container"]);
                const page_content = getElement_class(robloxClassName["page_content"])[0];
                const thumbnail_span = getElement_class(robloxClassName["thumbnail_span"])[0];
    
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                // Change badge's content
                page_content.style.backgroundColor = theme_color["base_color"]
                thumbnail_span.style.backgroundColor = theme_color["second_color"]
    
                // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]
    
                // Footer page theme
                footer_container.style.backgroundColor = theme_color["base_color"]
            })()
    
            break;
        case "game-pass":
            (() => {
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const footer_container = getElement_id(robloxClassName["footer_container"]);
                const page_content = getElement_class(robloxClassName["page_content"])[0];
                const thumbnail_span = getElement_class(robloxClassName["thumbnail_span"])[0];
    
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                // Change gamepass's content
                page_content.style.backgroundColor = theme_color["base_color"]
                thumbnail_span.style.backgroundColor = theme_color["second_color"]
    
                // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]
    
                // Footer page theme
                footer_container.style.backgroundColor = theme_color["base_color"]
            })()
    
            break;
        case "discover":
            (() => {
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const footer_container = getElement_id(robloxClassName["footer_container"]);
                const page_content = getElement_class(robloxClassName["page_content"])[0];
    
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]

                // Game content
                page_content.style.backgroundColor = theme_color["base_color"]
    
                // Footer page theme
                footer_container.style.backgroundColor = theme_color["base_color"]
            })()
    
            break;
        case "catalog":
            (() => {
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const footer_container = getElement_id(robloxClassName["footer_container"]);
                const marketplace_search = getElement_class(robloxClassName["marketplace_search"])[0];
                const page_content = getElement_class(robloxClassName["page_content"])[0];
                const markplace_unavailable = getElement_class(robloxClassName["markplace_unavailable"])[0];
                const marketplace_no_topic_container = getElement_class(robloxClassName["marketplace_no_topic_container"])[0];
                const marketplace_item_thumbnail = getElement_class(robloxClassName["marketplace_item_thumbnail"]);
                const marketplace_topicList = getElement_id(robloxClassName["marketplace_topicList"]);
    
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]
    
                // Marketplace search
                page_content.style.backgroundColor = theme_color["base_color"]
                marketplace_search.style.backgroundColor = theme_color["base_color"]
    
                // Unavailable Marketplace content
                marketplace_no_topic_container.style.backgroundColor = theme_color["base_color"]
                markplace_unavailable.style.backgroundColor = theme_color["base_color"]
    
                // Marketplace topic
                marketplace_topicList.style.backgroundColor = theme_color["base_color"]
    
                // Item thumbnail
                if (marketplace_item_thumbnail && marketplace_item_thumbnail["children"]) {
                    Object.keys(marketplace_item_thumbnail["children"]).forEach((buttons_index) => {
                        const buttons = marketplace_item_thumbnail["children"][buttons_index];
                        buttons.style.backgroundColor = theme_color["second_color"];
                    })
                }
    
                // Footer page theme
                footer_container.style.backgroundColor = theme_color["base_color"]
            })()
    
            break;
        case "upgrades":
            (() => {
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const footer_container = getElement_id(robloxClassName["footer_container"]);
    
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]
    
                // Footer page theme
                footer_container.style.backgroundColor = theme_color["base_color"]
            })()
    
            break;
        case "premium":
            (() => {
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const footer_container = getElement_id(robloxClassName["footer_container"]);
    
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]
    
                // Footer page theme
                footer_container.style.backgroundColor = theme_color["base_color"]
            })()
    
            break;
        default:
            // This one maybe use in custom function or future roblox update
            (() => {
                // Variables
                const rbx_body = getElement_id(robloxClassName["body"]);
                const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
                const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
                const footer_font = getElement_class(robloxClassName["footer_font"])[0];
                const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
                const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
                const footer_container = getElement_id(robloxClassName["footer_container"]);
    
                document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
                rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
    
                player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
                top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
    
                // Small corner in the player_navBar that contain username with usericon
                username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
                username_corner_break.style.backgroundColor = theme_color["base_color"]
                footer_font.style.backgroundColor = theme_color["base_color"]
    
                // Footer page theme
                footer_container.style.backgroundColor = theme_color["base_color"]
            })()
    
            break;
    }
}, settings["intervalLoopTime"] || 1000)