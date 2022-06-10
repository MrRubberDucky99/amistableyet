// Created By Judah Fuller Monday the 6th of June 2022
// Parent class for all OSes
import { version } from "./version";
import { App } from "./app";

export class OS {
	private name: string = "defaultName00"; // OS Name
	private versions: version[] = []; // Keep track of OS version
	private currentVersion: number = 0;
	private apps: App[] = [];
	private ID: number;

	// Constructor function
	public constructor(name: string, version: version, id: number) {
		this.versions[0] = version;
		this.name = name;
		this.ID = id;
	}

	// Create a new OS version
	public newVersion(version: version) {
		this.currentVersion++; // Increment the current version number
		this.versions[this.currentVersion] = version;
	}

	public addApp(App: App) {
		this.apps[this.apps.length] = App;
	}

	// Get Functions
	public getCurrentVersion(): version {
		// Return the OS version
		return this.versions[this.currentVersion];
	}

	public getVersion(major: number, minor: number, bugfix: number): version {
		// Return the OS version
		return this.versions[this.currentVersion];
	}

	public getApps(): App[] {
		return this.apps;
	}

	public getID(): number {
		return this.ID;
	}
}

export interface OSVersion {
	OS: OS;
	Version: version;
}

export class OSBug {
	private severity: number = 0;
	private severityReports: number[] = [];
	private OSVersion: OSVersion;
	private title: string;
	private description: string;
	private issueOccurrences: number = 0;

	public constructor(
		OSVersion: OSVersion,
		severity: number,
		title: string,
		description: string
	) {
		this.OSVersion = OSVersion;
		this.severityReports[0] = severity;
		this.title = title;
		this.description = description;
	}

	public Occurrence(severity: number) {
		let severityAdded = severity;
		let i = 0;
		this.issueOccurrences++;
		for (i = 0; i < this.severityReports.length; i++) {
			severityAdded += this.severityReports[i];
		}
		this.severity = severityAdded / this.issueOccurrences;
	}
}
