import test from 'ava';
import execa from 'execa';
import isIp from 'is-ip';

test('no arguments', async t => {
	t.true(isIp.v4(await execa.stdout('./cli.js')));
});

test('-h', async t => {
	t.true(isIp.v4(await execa.stdout('./cli.js', ['-h'])));
});

test('-4', async t => {
	t.true(isIp.v4(await execa.stdout('./cli.js', ['-4'])));
});

test('-4 -h -t 1', async t => {
	await t.throws(execa.stdout('./cli.js', ['-4', '-h', '-t', '1']));
});

if (!process.env.CI) {
	test('-6', async t => {
		t.true(isIp.v6(await execa.stdout('./cli.js', ['-6'])));
	});

	test('-6 -h -t 1', async t => {
		await t.throws(execa.stdout('./cli.js', ['-6', '-h', '-t', '1']));
	});
}
