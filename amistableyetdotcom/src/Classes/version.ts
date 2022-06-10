// Created By Judah Fuller Monday the 6th of June 2022
// Class to keep track of and parse OS/App versions
import { parseVersion } from "../Functions/Parse";

export class version {
	// Attributes
	private major: number = 0;
	private minor: number = 0;
	private bugfix: number = 0;
	private name: string = "";
	private type: string = "";
	private score: number = 10;

	// Constructor to set all values on object creation
	public constructor(
		name: string,
		major: number,
		minor: number,
		bugfix: number,
		type: string
	);

	public constructor(name: string, versionString: string);
	public constructor(...args: any[]) {
		let versions: string[];
		if (args.length === 2) {
			let versionInfo = parseVersion(args[1]);
			this.major = versionInfo.major;
			this.minor = versionInfo.minor;
			this.bugfix = versionInfo.bugfix;
			this.type = versionInfo.type;
		} else if (args.length === 5) {
			this.major = args[1];
			this.minor = args[2];
			this.bugfix = args[3];
			this.type = args[4];
		}
		this.name = args[0];
	}

	// Set functions
	public updateScore(newScore: number): void {
		this.score = newScore;
	}

	// Get functions
	public getMajor(): number {
		return this.major;
	}
	public getMinor(): number {
		return this.minor;
	}
	public getBugfix(): number {
		return this.bugfix;
	}
	public getType(): string {
		return this.type;
	}
	public getName(): string {
		return this.name;
	}
	public getVersion(): string {
		return this.major + "." + this.minor + "." + this.bugfix;
	}
	public getScore(): number {
		return this.score;
	}
}
