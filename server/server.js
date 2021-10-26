// Copyright (C) 2021 José Enrique Vilca Campana
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8080;

const requestListener = (req, res) => {
	if (req.url == "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write();
		res.end("Hello, World!");
		// } else if (req.url == "") {
	} else if (req.url == "/json-hello-world") {
		res.writeHead(200, { "Content-Type": "application/json" });
		res.write(JSON.stringify({ message: "Hello World" }));
		res.end("Hello, World!");
	} else {
		res.end("invalid request!");
	}
};

const server = http.createServer(requestListener).listen(PORT, (error) => {
	if (error) {
		console.error("Something went wrong\n", error);
	}
	console.log(`Server listening on port ${PORT}`);
});
