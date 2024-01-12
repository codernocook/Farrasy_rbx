// This check use to get userid, which is stored in sessionStorage

// IsJSON
const isJSON = (item) => {
	let value = typeof item !== "string" ? JSON.stringify(item) : item;    
	try {
		value = JSON.parse(value);
	} catch (e) {
		return false;
	}
	  
	return typeof value === "object" && value !== null;
}

// Client request
chrome.runtime.onMessageExternal.addListener((req, sender, sendRes) => {
	// Check if res exist
	if (req) {
		if (req["key"] === "farrasy.client_request") {
			switch(req["action"]) {
				case "farrasy.keepAlivePacket":
					(() => {
						console.log("[Farrasy]: client.keepalive packet sent!");
					})();

					break;
			}
		}
	}
})

// This one for xp system
const xp_checkingRequest = () => {
	chrome.tabs.query({}, (tabs) => {
		tabs.forEach((tab) => {
			if (tabs && tab) {
				// Receive sessionStorage request
				chrome.tabs.sendMessage(tab.id, { action: "farrasy.getSessionStorage", key: "farrasy.itzporium.key_request" }, (res) => {
					if (!chrome.runtime.lastError) {
						// Checking for exist response
						if (res) {
							// Parse data
							if (res["sessionStorageData"] && res["sessionStorageData"]["roblox-user-profiles-ttl"] && res["sessionStorageData"]["roblox-user-profiles-ttl"] && isJSON(res["sessionStorageData"]["roblox-user-profiles-ttl"])) {
								const robloxStorage_data = JSON.parse(res["sessionStorageData"]["roblox-user-profiles-ttl"]);
	
								// Check if userId exist
								if (robloxStorage_data) {
									if (robloxStorage_data["userId"] && isNaN(Number(robloxStorage_data["userId"])) === false) {
										fetch("https://presence.roblox.com/v1/presence/users", { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ "userIds": [Number(robloxStorage_data["userId"])] }) }).then((res_raw) => res_raw.json()).then((res_robloxFetch) => {
											if (!res_robloxFetch) res_robloxFetch = {};
	
											// Check for no error
											if (!res_robloxFetch["errors"]) {
												// Check if the player is playing game
												if (res_robloxFetch && res_robloxFetch["userPresences"] && res_robloxFetch["userPresences"][0] && res_robloxFetch["userPresences"][0]["userPresenceType"] !== undefined && res_robloxFetch["userPresences"][0]["userPresenceType"] !== null) {
													if (res_robloxFetch["userPresences"][0]["userPresenceType"] === 2) {
														fetch("https://farrasy.vercel.app/api/xp/start_record", { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ "userid": Number(robloxStorage_data["userId"]) }) }).then((res_raw) => res_raw.json()).then((res) => {})
													}
												}
											}
										})
									}
								}
							}
						}
					}
				})
			}
		})
	})
}

// 5 minutes loop
xp_checkingRequest();
setInterval(() => { xp_checkingRequest() }, 180000);
