import child from "child_process";

/**
 * Versions a myApp copy using the CLI
 * @param {Array} params Child process params
 */
function versionTempWithCLI(params) {
	const versionProcess = child.spawnSync(
		"node",
		[require.resolve("../../lib/cli")].concat(params).filter(Boolean),
		{
			env: Object.assign({}, process.env, {
				IV_ENV: "ava"
			})
		}
	);

	if (versionProcess.status > 0) {
		throw new Error(versionProcess.stderr.toString());
	}
}

module.exports = versionTempWithCLI;
