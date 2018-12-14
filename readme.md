# public-ip-cli [![Build Status](https://travis-ci.org/sindresorhus/public-ip-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/public-ip-cli)

> Get your public IP address


## Install

```
$ npm install --global public-ip-cli
```


## Usage

```
$ public-ip --help

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
```

```
$ time public-ip
46.5.21.123

real    0.08s
user    0.05s
sys     0.02s
```


## Maintainers

- [silverwind](https://github.com/silverwind)


## Related

- [public-ip](https://github.com/sindresorhus/public-ip) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
