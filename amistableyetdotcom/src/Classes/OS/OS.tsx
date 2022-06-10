// Created By Judah Fuller Monday the 6th of June 2022
// Parent class for all OSes
// Default React Libraries
import version from "../versionClass";

export class OS {
	private Version: version = new version("default", "0.0.0"); // Keep track of OS version
	private Name: string = ""; // OS Name

	public constructor(
		name: string,
		major: number,
		minor: number,
		bugfix: number
	);
	public constructor(name: string, versionString: string);
	public constructor(...args: any[]) {
		if (args.length === 2) {
			this.Version = new version(args[0], args[1]);
		} else if (args.length === 4) {
			this.Version = new version(args[0], args[1], args[2], args[3]);
		}
	}

	public getVersion(): version {
		return this.Version;
	}

	public stringVersion(): string {
		return this.Version.getVersion();
	}
}
