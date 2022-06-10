// Created By Judah Fuller Monday the 6th of June 2022
// Parent class for all OSes
import version from "../versionClass";
import { App } from "../App/app";

export class OS {
	private Name: string = "defaultName00"; // OS Name
	private Versions: version[] = []; // Keep track of OS version
	private CurrentVersion: number = 0;
	private Apps: App[] = [];
	private ID: number;

	// Constructor function
	public constructor(name: string, version: version, id: number) {
		this.Versions[0] = version;
		this.Name = name;
		this.ID = id;
	}

	// Create a new OS version
	public newVersion(version: version) {
		this.CurrentVersion++; // Increment the current version number
		this.Versions[this.CurrentVersion] = version;
	}

	public addApp(App: App) {
		this.Apps[this.Apps.length] = App;
	}

	// Get Functions
	public getCurrentVersion(): version {
		// Return the OS version
		return this.Versions[this.CurrentVersion];
	}

	public getVersion(major: number, minor: number, bugfix: number): version {
		// Return the OS version
		return this.Versions[this.CurrentVersion];
	}

	public getApps(): App[] {
		return this.Apps;
	}

	public getID(): number {
		return this.ID;
	}
}
