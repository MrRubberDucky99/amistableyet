export function parseVersion(versionString: string) {
	let removeTags: string[] = versionString.split(" ");
	let versionNumberString: string[] = removeTags[0].split(",");
	let versionNumbers: number[] = [];
	let i: number;
	for (i = 0; i < versionNumberString.length; i++) {
		versionNumbers[i] = parseInt(versionNumberString[i]);
	}
	let major = versionNumbers[0];
	let minor = versionNumbers[0];
	let bugfix = versionNumbers[0];
	let type = removeTags[1];
	return {
		major,
		minor,
		bugfix,
		type,
	};
}
