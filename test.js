import test from 'ava';
import execa from 'execa';
import isIp from 'is-ip';

test('no arguments', async t => {
	t.true(isIp.v4(await execa.stdout('./cli.js', {cwd: __dirname})));
});

test('-h', async t => {
	t.true(isIp.v4(await execa.stdout('./cli.js', ['-h'], {cwd: __dirname})));
});

test('-4', async t => {
	t.true(isIp.v4(await execa.stdout('./cli.js', ['-4'], {cwd: __dirname})));
});

test('-4 -h -t 1', async t => {
	t.throws(execa.stdout('./cli.js', ['-4', '-h', '-t', '1'], {cwd: __dirname}));
});

if (!process.env.CI) {
	test('-6', async t => {
		t.true(isIp.v6(await execa.stdout('./cli.js', ['-6'], {cwd: __dirname})));
	});

	test('-6 -h -t 1', async t => {
		t.throws(execa.stdout('./cli.js', ['-6', '-h', '-t', '1'], {cwd: __dirname}));
	});
}
