/*
	Farrasy_rbx
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

// Roblox className collections (by Itzporium)
const robloxClassName = {
	// Roblox body
	"body": "rbx-body",
	"home_container": "HomeContainer",

	// Login page
	"login_content": "section-content login-section", // The one prompts your username and password.

	// For captcha and 2-step verification when login
	"prompt_background": "modal-content",


	// The one contain language, About us, Jobs, Blog, etc, and copyright about the roblox (the game) it's at the last of the page
	"footer_container": "footer-container",

	// The container that around for player like: Avatar and then the username next, only on the home page.
	"player_container": "col-xs-12 container-header",

	// The navigation bar
	// The bar that is in the left side, and have some buttons, homes, Profile, Friends, ...
	"player_navBar": "simplebar-content-wrapper",

	// The top navigation bar that contain Discover, Marketplace, Create, Robux, and Search bar, also Robux, etc
	"top_navBar": "container-fluid",

	// The right side of the navigation bar that contain user avatar, username, Notification (the bell icon), Robux, Settings icon
	"top_navBar_right": "navbar-right rbx-navbar-right",
	
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
	"marketplace_topicList": "topic-carousel",

	// Server card (The card that show how many player, and join button)
	"server_card": "card-item",

	// The card that show there's no server with the text "No server found"
	"server_card_noServer": "section-content-off empty-game-instances-container",

	// Chat & Nessages
	// The one with the text "Chat" and next to it is a friend icon, Can be minimized in some extension like RoPro
	"chatHeader": "chat-windows-header chat-header",
	"userChat_header": "chat-windows-header dialog-header", // The header with player username, below is the conversation (message) between the user and you or many users
	"userChat_conversation": "rbx-scrollbar dialog-body ng-scope mCustomScrollbar _mCS_14 mCS_no_scrollbar", // The converstation in a group or user and you

	// Avatar editor
	"avatar_editor_background": "content six-column",

	// Inventory tab
	"inventory_background": "row page-content",

	// Group
	"group_shoutout": "section-content shout-container",
	"group_wall_unavailable": "section-content-off ng-binding",

	// Transactions
	"transactions_summary": "summary",

	// Messages tab
	"messages_notification": "tab-content rbx-tab-content ng-scope",

	// This use for faster logout (To get this, it's on the top right settings icon, click on it will have a button called logout, get className from there)
	"logout_button": "rbx-menu-item logout-menu-item"
}


// ================= Settings =================
const settings = {
	"intervalLoopTime": 500, // eans 500ms = 0.5s
}

const theme_color = {
	"base_color": "#000000",
	"button_color": "#000000",
	"second_color": "#000000"
}
// =============================================

// ================= Functions =================
const getURL = () => {
	if (window && window["location"] && window["location"]["href"]) {
		if (window.location["host"].includes("www.")) {
			// Main domain
			if (window.location["href"].includes("/my/messages") && window.location.href?.toString().split("https://www.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "my") {
				return "messages"
			} else if (window.location["href"].includes("/my/avatar") && window.location.href?.toString().split("https://www.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "my") {
				return "avatar"
			} else if (window.location["href"].includes("/messages") && window.location.href?.toString().split("https://www.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "my") {
				return "messages"
			} else if (window.location["href"].includes("/account") && window.location.href?.toString().split("https://www.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "my") {
				return "account"
			} else if (window.location["href"].includes("/inventory") && window.location.href?.toString().split("https://www.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "users") {
				return "inventory"
			} else if (window.location["href"].includes("/friends") && window.location.href?.toString().split("https://www.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "users") {
				return "friends"
			}
			return window.location.href?.toString().split("https://www.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase();
		} else if (window.location["host"].includes("web.")) {
			// Alternative domain
			if (window.location["href"].includes("/my/messages") && window.location.href?.toString().split("https://web.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "my") {
				return "messages"
			} else if (window.location["href"].includes("/my/avatar") && window.location.href?.toString().split("https://web.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "my") {
				return "avatar"
			} else if (window.location["href"].includes("/messages") && window.location.href?.toString().split("https://web.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "my") {
				return "messages"
			} else if (window.location["href"].includes("/account") && window.location.href?.toString().split("https://web.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "my") {
				return "account"
			} else if (window.location["href"].includes("/inventory") && window.location.href?.toString().split("https://web.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "users") {
				return "inventory"
			} else if (window.location["href"].includes("/friends") && window.location.href?.toString().split("https://web.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase() === "users") {
				return "friends"
			}
			return window.location.href?.toString().split("https://web.roblox.com/")[1].split("/")[0].replaceAll("#", "").split("?")[0]?.toString().toLowerCase();
		}
	}
}

const invisible_elementObject = document.createElement("div");
for (let invisible_element_index = 0; invisible_element_index < 5; invisible_element_index++) {
	const child_invisible = document.createElement("div");
	invisible_elementObject.appendChild(child_invisible);
}

// Get by classname
const getElement_class = (className) => {
	if (document["getElementsByClassName"] && document["getElementsByClassName"](className) && document["getElementsByClassName"](className)) {
		if (document["getElementsByClassName"](className)["length"] > 0) {
			return document["getElementsByClassName"](className)
		} else {
			return [invisible_elementObject, invisible_elementObject, invisible_elementObject, invisible_elementObject, invisible_elementObject]; // The current patch, to prevent some bad issue, like script crashing
		}
	} else {
		return [invisible_elementObject, invisible_elementObject, invisible_elementObject, invisible_elementObject, invisible_elementObject]; // The current patch, to prevent some bad issue, like script crashing
	}
}

// get by id
const getElement_id = (className) => {
	if (document["getElementById"] && document["getElementById"](className)) {
		return document["getElementById"](className)
	} else {
		return invisible_elementObject; // The current patch, to prevent some bad issue, like script crashing
	}
}

// isJSON
const isJSON = (str) => {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

// ==============================================

// ================= Modules =================
const modules = {
	"farrasy_theme": {
		"name": "",
		"description": "",
		"enable": false,
	
		"execute": (args) => {
			const getURL = args["getURL_function"];
			const getElement_id = args["getElement_id_function"];
			const getElement_class = args["getElement_class_function"];
			const robloxClassName = args["robloxClassName_object"]
			const theme_color = args["theme_color_object"];
	
			// Logout button (for player navigation bar)
			const logout_button = document.createElement("button");
			logout_button["onclick"] = () => {
				const logout_button = document.getElementsByClassName(robloxClassName["logout_button"]);
	
				logout_button["click"]();
			}
	
			// Fuck you roblox, why you add so many. you p2w
			switch(getURL()) {
				case "login":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const page_content = getElement_class(robloxClassName["page_content"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const login_prompt = getElement_class(robloxClassName["login_content"])[0];
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
		
						// Change user & password prompts theme
						login_prompt.style.backgroundColor = theme_color["base_color"] 
			
						// Change badge's content
						page_content.style.backgroundColor = theme_color["base_color"]
			
						// Footer page theme
						footer_container.style.backgroundColor = theme_color["base_color"]
		
						// Captcha and 2-step verification prompt
						(() => {
							try {
								const prompt_background = getElement_class(robloxClassName["prompt_background"])[0];
		
								Object.keys(prompt_background).forEach((prompt_index) => {
									const prompt_popup = prompt_background[prompt_index]
									prompt_popup.style.backgroundColor = theme_color["base_color"]
								})
							} catch {}
						})()
					})()
		
					// Return
					break;
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
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
			
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
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
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
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const server_card = getElement_class(robloxClassName["server_card"]);
						const server_card_noServer = getElement_class(robloxClassName["server_card_noServer"]);
			
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
		
						// Change server card and buttons
						if (server_card && server_card["length"] > 0) {
							Object.keys(server_card).forEach((cards_index) => {
								const card = server_card[cards_index];
								card.style.backgroundColor = theme_color["base_color"];
							})
						}
		
						// No server found
						if (server_card_noServer && server_card_noServer["length"] > 0) {
							Object.keys(server_card_noServer).forEach((cards_index) => {
								const card = server_card_noServer[cards_index];
								card.style.backgroundColor = theme_color["base_color"];
							})
						}
			
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
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
			
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
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
			
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
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
			
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
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
			
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
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
			
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
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
			
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
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
			
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
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
			
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
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
			
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
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
			
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
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
			
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
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
			
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
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
			
						// Footer page theme
						footer_container.style.backgroundColor = theme_color["base_color"]
					})()
			
					break;
				case "avatar":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const footer_font = getElement_class(robloxClassName["footer_font"])[0];
						const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
						const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const avatar_editor_background = getElement_class(robloxClassName["avatar_editor_background"])[0];
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
		
						// Background
						avatar_editor_background.style.backgroundColor = theme_color["base_color"]
			
						// Footer page theme
						footer_container.style.backgroundColor = theme_color["base_color"]
					})()
			
					break;
				case "messages":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const footer_font = getElement_class(robloxClassName["footer_font"])[0];
						const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
						const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const page_content = getElement_class(robloxClassName["page_content"])[0];
						const messages_notification = getElement_class(robloxClassName["messages_notification"]);
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
		
						// Background
						page_content.style.backgroundColor = theme_color["base_color"]
		
						// Message notification theme
						if (messages_notification && messages_notification["length"] > 0) {
							Object.keys(messages_notification).forEach((buttons_index) => {
								const buttons = messages_notification[buttons_index];
								buttons.style.backgroundColor = theme_color["second_color"];
							})
						}
			
						// Footer page theme
						footer_container.style.backgroundColor = theme_color["base_color"]
					})()
			
					break;
				case "account":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const footer_font = getElement_class(robloxClassName["footer_font"])[0];
						const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
						const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const page_content = getElement_class(robloxClassName["page_content"])[0];
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
		
						// Background
						page_content.style.backgroundColor = theme_color["base_color"]
			
						// Footer page theme
						footer_container.style.backgroundColor = theme_color["base_color"]
					})()
			
					break;
				case "inventory":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const footer_font = getElement_class(robloxClassName["footer_font"])[0];
						const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
						const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const inventory_background = getElement_class(robloxClassName["inventory_background"])[0];
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
		
						// Background
						inventory_background.style.backgroundColor = theme_color["base_color"]
			
						// Footer page theme
						footer_container.style.backgroundColor = theme_color["base_color"]
					})()
			
					break;
				case "trades":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const footer_font = getElement_class(robloxClassName["footer_font"])[0];
						const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
						const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const page_content = getElement_class(robloxClassName["page_content"])[0];
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
		
						// Background
						page_content.style.backgroundColor = theme_color["base_color"]
			
						// Footer page theme
						footer_container.style.backgroundColor = theme_color["base_color"]
					})()
			
					break;
				case "groups":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const footer_font = getElement_class(robloxClassName["footer_font"])[0];
						const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
						const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const page_content = getElement_class(robloxClassName["page_content"])[0];
						const group_shoutout = getElement_class(robloxClassName["group_shoutout"])[0];
						const group_wall_unavailable = getElement_class(robloxClassName["group_wall_unavailable"])[0];
						const tabs_switching_buttons = getElement_id(robloxClassName["tabs_switching_buttons"]);
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
		
						// Background
						page_content.style.backgroundColor = theme_color["base_color"]
		
						// Group shoutout & wall message
						group_shoutout.style.backgroundColor = theme_color["second_color"];
						group_wall_unavailable.style.backgroundColor = theme_color["second_color"]
		
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
				case "redeem":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const footer_font = getElement_class(robloxClassName["footer_font"])[0];
						const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
						const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const page_content = getElement_class(robloxClassName["page_content"])[0];
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
		
						// Background
						page_content.style.backgroundColor = theme_color["base_color"]
			
						// Footer page theme
						footer_container.style.backgroundColor = theme_color["base_color"]
					})()
			
					break;
				case "transactions":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const footer_font = getElement_class(robloxClassName["footer_font"])[0];
						const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
						const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const page_content = getElement_class(robloxClassName["page_content"])[0];
						const transactions_summary = getElement_class(robloxClassName["transactions_summary"])[0];
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
		
						// Background
						page_content.style.backgroundColor = theme_color["base_color"]
		
						// Transactions Summary
						transactions_summary.style.backgroundColor = theme_color["base_color"]
			
						// Footer page theme
						footer_container.style.backgroundColor = theme_color["base_color"]
					})()
			
					break;
				case "friends":
					(() => {
						// Variables
						const rbx_body = getElement_id(robloxClassName["body"]);
						const player_navBar = getElement_class(robloxClassName["player_navBar"])[0];
						const top_navBar = getElement_class(robloxClassName["top_navBar"])[0];
						const footer_font = getElement_class(robloxClassName["footer_font"])[0];
						const username_corner_playerNavBar = getElement_id(robloxClassName["player_navBar_parent"]).children[0];
						const username_corner_break = getElement_class(robloxClassName["username_corner_break"])[0];
						const footer_container = getElement_id(robloxClassName["footer_container"]);
						const chatHeader = getElement_class(robloxClassName["chatHeader"])[0];
						const userChat_header = getElement_class(robloxClassName["userChat_header"])[0];
						const userChat_conversation = getElement_class(robloxClassName["userChat_conversation"])[0];
						const page_content = getElement_class(robloxClassName["page_content"])[0];
						const tabs_switching_buttons = getElement_id(robloxClassName["tabs_switching_buttons"]);
			
						document.body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
						rbx_body.style.backgroundColor = theme_color["base_color"] // Change the whole background color
			
						player_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with icon like: Home, Profile, Friend, etc
						top_navBar.style.backgroundColor = theme_color["base_color"] // The navigation bar with: Discover, Marketplace, Create, ..
			
						// Small corner in the player_navBar that contain username with usericon
						username_corner_playerNavBar.style.backgroundColor = theme_color["base_color"]
						username_corner_break.style.backgroundColor = theme_color["base_color"]
						footer_font.style.backgroundColor = theme_color["base_color"]
		
						// Chat support
						chatHeader.style.backgroundColor = theme_color["base_color"]
						userChat_header.style.backgroundColor = theme_color["base_color"]
						userChat_conversation.style.backgroundColor = theme_color["base_color"]
		
						// Background
						page_content.style.backgroundColor = theme_color["base_color"]
		
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
		}
	},
	"status_changer": {
		"name": "status", // The name of module
		"description": "Change your status to online, and offline", // Describe the use of this module
		"enable": false, // Is it enable? If you want it to enable by default then just change this to true. Remember this value can be changed.
		
		"execute": (args) => {
			// Call background js to block the request
		}
	},
	"xp_system": {
		"name": "xp_system", // The name of module
		"description": "XP for playing games", // Describe the use of this module
		"enable": false, // Is it enable? If you want it to enable by default then just change this to true. Remember this value can be changed.
		
		"execute": (args) => {
			const xp_mainClass = document.createElement("div");
			const xp_percentFrame = document.createElement("div"); // The whole percent frame, not use for calculating. This is the main frame, not use for filling a bar. This is the grey oen
			const xp_percentage = document.createElement("div"); // This one use for calculating, to fill the xp_percentFrame. This is the green one
			const xp_levelReachingStat = document.createElement("p"); // This on use to show (display) the information that server sent, the status x/50, if it reaches 50 => player get +1 level
			const xp_level = document.createElement("p");
			const top_navigationBar_right = getElement_class(robloxClassName["top_navBar_right"])[0];

			// Classname
			xp_mainClass.className = "itzporium_farrasy_xp_elementClass";
			xp_percentFrame.className = "itzporium_farrasy_xp_percentFrame";
			xp_percentage.className = "itzporium_farrasy_xp_percentage";
			xp_levelReachingStat.className = "itzporium_farrasy_xp_levelReachingStat";

			// CSS style
			xp_percentFrame.style.backgroundColor = "#000000"
			xp_percentFrame.style.width = "200px";
			xp_percentFrame.style.height = "100%"
			xp_mainClass.style.float = "left";

			xp_percentFrame.style.position = "relative";
			xp_percentFrame.style.backgroundColor = "#1e1e1e";
			xp_percentFrame.style.width = "150px";
			xp_percentFrame.style.height = "20px";
			xp_percentFrame.style.border = "0px";
			xp_percentFrame.style.borderRadius = "8px";
			xp_percentFrame.style.float = "right";

			xp_percentage.style.position = "absolute";
			xp_percentage.style.backgroundColor = "#31e09a";
			xp_percentage.style.width = "0%"; // This is the percentage (the green one), it will start with 0, there's no free level lmao
			xp_percentage.style.height = "100%";
			xp_percentage.style.border = "0px";
			xp_percentage.style.borderRadius = "8px";

			xp_levelReachingStat.style.position = "absolute";
			xp_levelReachingStat.style.color = "#ffffff";
			xp_levelReachingStat.style.innerText = "0/50";
			xp_levelReachingStat.style.width = "100%";
			xp_levelReachingStat.style.height = "100%";
			xp_levelReachingStat.style.textAlign = "center";
			xp_levelReachingStat.innerText = "0/50";

			xp_level.style.backgroundColor = "#000000";
			xp_level.style.color = "#ffffff";
			xp_level.innerText = "Level: 0";
			xp_level.style.float = "left";

			// Set parent
			xp_mainClass.appendChild(xp_level); // xp_level is a child of xp_mainClass
			xp_percentFrame.appendChild(xp_percentage); // xp_percentage is a child of xp_percentFrame
			xp_percentFrame.appendChild(xp_levelReachingStat); // xp_levelReachingStat (the status x/50, if it reaches 50 => player get +1 level)
			xp_mainClass.appendChild(xp_percentFrame); // xp_percentFrame is a child of xp_mainClass
			top_navigationBar_right.appendChild(xp_mainClass); // xp_mainClass is now a child of top_navigationBar_right

			// Check player is playing game
			(() => {
				const percentage_checker = () => {
					const robloxStorage_raw = sessionStorage.getItem("roblox-user-profiles-ttl");
	
					if (robloxStorage_raw !== undefined && robloxStorage_raw !== null) {
						if (isJSON(robloxStorage_raw) === true) {
							const robloxStorage = JSON.parse(robloxStorage_raw);
	
							// Parse based on data
							const userid_parsed = robloxStorage["userId"];
	
							// Fetchxp
							fetch("https://extinct-caiman.cyclic.app/api/xp/fetchxp", { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ "userid": Number(userid_parsed) }) }).then((res_raw) => res_raw.json()).then((res) => {
								if (!res) res = {};

								if (res && res["success"] === true && res["data"] !== undefined && res["data"] !== null && typeof(res["data"]) === "object" && !Array.isArray(res["data"])) {
									const res_data = res["data"];

									// Set percentage
									if (xp_level !== undefined && xp_level !== null) {
										const parsed_level = Number((res_data["level"])?.toString().split(".")[0]);

										xp_level.innerText = `Level: ${parsed_level}`;
									}

									// Set percent

									// Each 50 score = 100% => 1 score = 100 / 50;
									// To calculate the score we need to multiply the score with the {1 score} that we have calculated
									// Also we have to divide score / level, because score won't reset, they will be continue, so we have to divide score with level so we can get the current percent
									// Why we need to + 1?, because in programming language, level will be counted as 0. We all know that we can't get a number to be divided by 0. So the offset is 1 for all number.
									if (xp_percentage !== undefined && xp_percentage !== null) {
										// Update percentage bar
										xp_percentage.style.width = `${((res_data["score"]) / (res_data["level"] + 1)) * (100 / 50)}%`;

										// Update text
										xp_levelReachingStat.innerText = (Number((res_data["score"]) / (res_data["level"] + 1)).toFixed(1))?.toString() + "/50"; // "/50" is x/50, just the /50 to let the user know
									}
								}
							})
						}
					}
				}

				// Run on start (slow down prevent some people keep freshing F5 to spam lmao)
				setTimeout(() => { percentage_checker() }, 10000);

				// Loop
				setInterval(() => { percentage_checker() }, 30000)
			})();
		}
	}
}
// ===========================================

// Execute one time code, no loop
if (window && window["location"] && window["location"]["href"]) {
	// Checking if the site is on roblox
	if (window["location"]["href"].includes("roblox.com")) {

		// Execute code
		modules["xp_system"].execute();
	}
}

// Features loop
setInterval(() => {
	modules["farrasy_theme"]["execute"]({
		"getURL_function": getURL,
		"getElement_id_function": getElement_id,
		"getElement_class_function": getElement_class,
		"robloxClassName_object": robloxClassName,
		"theme_color_object": theme_color
	})
}, settings["intervalLoopTime"] || 1000)

// Wake up the background server (this code exist because of google, i hate you)
chrome.runtime.sendMessage({ "action": "farrasy.keepAlivePacket", "key": "farrasy.client_request" });
setInterval(() => { chrome.runtime.sendMessage({ "action": "farrasy.keepAlivePacket", "key": "farrasy.client_request" }); }, 10000)

// Background (server-side handle)
chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
	if (req["action"] === "farrasy.getSessionStorage" && req["key"] === "farrasy.itzporium.key_request") {
		sendRes({ "sessionStorageData": sessionStorage });
	}
})
