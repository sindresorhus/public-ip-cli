#!/usr/bin/env node
'use strict';
const meow = require('meow');
const publicIp = require('public-ip');

const cli = meow(`
	Usage
	  $ public-ip

	Options
	  --ipv4, -4          Return the IPv4 address (default)
	  --ipv6, -6          Return the IPv6 address
	  --https, -h         Use HTTPS instead of DNS
	  --timeout=<ms>, -t  Timeout in milliseconds (default: 5000)

	Example
	  $ public-ip
	  46.5.21.123
`, {
	flags: {
		ipv4: {
			type: 'boolean',
			alias: '4'
		},
		ipv6: {
			type: 'boolean',
			alias: '6'
		},
		https: {
			type: 'boolean',
			alias: 'h'
		},
		timeout: {
			type: 'string',
			alias: 't'
		}
	}
});

(async () => {
	const ip = await publicIp[cli.flags.ipv6 ? 'v6' : 'v4']({
		https: cli.flags.https ? true : undefined,
		timeout: typeof cli.flags.timeout !== 'undefined' && Number(cli.flags.timeout)
	});

	console.log(ip);
})();
