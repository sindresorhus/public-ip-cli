import process from 'node:process';
import test from 'ava';
import {execa} from 'execa';
import isIp from 'is-ip';

test('no arguments', async t => {
	const {stdout} = await execa('./cli.js');
	t.true(isIp.v4(stdout));
});

test('-h', async t => {
	const {stdout} = await execa('./cli.js', ['-h']);
	t.true(isIp.v4(stdout));
});

test('-4', async t => {
	const {stdout} = await execa('./cli.js', ['-4']);
	t.true(isIp.v4(stdout));
});

if (!process.env.CI) {
	test('-4 -h -t 1', async t => {
		await t.throwsAsync(execa('./cli.js', ['-4', '-h', '-t', '1']));
	});

	test('-6', async t => {
		const {stdout} = await execa('./cli.js', ['-6']);
		t.true(isIp.v6(stdout));
	});

	test('-6 -h -t 1', async t => {
		await t.throwsAsync(execa('./cli.js', ['-6', '-h', '-t', '1']));
	});
}
