#!/usr/bin/env node
'use strict';
const meow = require('meow');
const publicIp = require('public-ip');

const cli = meow(`
	Usage
	  $ public-ip

	Options
	  -4, --ipv4          Return the IPv4 address (default)
	  -6, --ipv6          Return the IPv6 address
	  -h, --https         Use HTTPS instead of DNS
	  -t, --timeout=<ms>  Timeout in milliseconds (default: 5000)

	Example
	  $ public-ip
	  46.5.21.123
`, {
	alias: {
		4: 'ipv4',
		6: 'ipv6',
		h: 'https',
		t: 'timeout'
	}
});

publicIp[cli.flags.ipv6 ? 'v6' : 'v4']({
	https: cli.flags.https ? true : undefined,
	timeout: typeof cli.flags.timeout === 'number' ? cli.flags.timeout : undefined
}).then(console.log);
