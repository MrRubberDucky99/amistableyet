// Created By Judah Fuller Monday the 6th of June 2022
// Class to keep track of and parse OS/App versions

export default class version {
	// Attributes
	private major: number = 0;
	private minor: number = 0;
	private bugfix: number = 0;
	private name: string = "";

	// Constructor to set all values on object creation
	public constructor(
		name: string,
		major: number,
		minor: number,
		bugfix: number
	);
	public constructor(name: string, versionString: string);
	public constructor(...args: any[]) {
		let versions: string[];
		if (args.length === 2) {
			versions = args[1].split(".");
			this.major = +versions[0];
			this.minor = +versions[1];
			this.bugfix = +versions[2];
		} else if (args.length === 4) {
			this.major = args[1];
			this.minor = args[2];
			this.bugfix = args[3];
		}
		this.name = args[0];
		throw new Error("Undefined constructor.");
	}

	public getMajor(): number {
		return this.major;
	}
	public getMinor(): number {
		return this.minor;
	}
	public getBugfix(): number {
		return this.bugfix;
	}
	public getName(): string {
		return this.name;
	}
	public getVersion(): string {
		return this.major + "." + this.minor + "." + this.bugfix;
	}
}
