import { version } from "./version";
import { OS, OSVersion } from "./OS";

export class App {
	private OSTypes: OS[] = [];
	private OSMinVersion: OSVersion[] = [];
	private OSMaxVersion: OSVersion[] = [];
	private OSVersionScore: number[] = [];
	private name: string;
	private icon: string;
	private versions: version[] = []; // Keep track of OS version
	private currentVersion: number = 0; // Current App release version
	private bugs: AppBug[] = [];

	public constructor(
		name: string,
		icon: string,
		OSTypes: OS[],
		OSMinVersion: OSVersion[],
		OSMaxVersion: OSVersion[]
	) {
		this.name = name;
		this.icon = icon;
		this.OSMinVersion = OSMinVersion;
		this.OSMaxVersion = OSMaxVersion;
		this.OSTypes = OSTypes;
	}

	public newVersion(version: version) {
		this.currentVersion++; // Increment the current version number
		this.versions[this.currentVersion] = version;
	}

	public newBug(
		appVersion: AppVersion,
		OSVersion: OSVersion,
		severity: number,
		title: string,
		description: string
	) {
		this.bugs[this.bugs.length] = new AppBug(
			appVersion,
			OSVersion,
			severity,
			title,
			description
		);
	}

	public getName(): string {
		return this.name;
	}
}

export interface AppVersion {
	App: App;
	Version: version;
}

export class AppBug {
	private severity: number = 0;
	private severityReports: number[] = [];
	private appVersion: AppVersion;
	private OSVersion: OSVersion;
	private title: string;
	private description: string;
	private issueOccurrences: number = 0;

	public constructor(
		appVersion: AppVersion,
		OSVersion: OSVersion,
		severity: number,
		title: string,
		description: string
	) {
		this.appVersion = appVersion;
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
