#!/usr/bin/env node
'use strict';
const meow = require('meow');
const publicIp = require('public-ip');

const cli = meow(`
	Usage
	  $ public-ip

	Options
	  -4, --ipv4  Return the IPv4 address (default)
	  -6, --ipv6  Return the IPv6 address

	Examples
	  $ public-ip
	    46.5.21.123
`, {
	alias: {
		4: 'ipv4',
		6: 'ipv6'
	}
});

publicIp[cli.flags.ipv6 ? 'v6' : 'v4']().then(console.log);
